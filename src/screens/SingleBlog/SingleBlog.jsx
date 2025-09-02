import React, { useEffect, useState } from "react";
import { MainHeading, MainPara } from "../../components";
import { blogcard, wave } from "../../assets";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { ref, get } from "firebase/database";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogRef = ref(db, `blogs/${id}`);
        const snapshot = await get(blogRef);

        if (snapshot.exists()) {
          setBlogData(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!blogData) {
    return <Typography>No blog found</Typography>;
  }

  return (
    <>
      <Box paddingY={5} position="relative" overflow="hidden">
        {/* Background Wave */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "300px",
            backgroundImage: `linear-gradient(90deg, #F1F1F1 15%, #FAF0C8 29%, #FFFFFF 63%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            backgroundImage: `url(${wave})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack
            direction={{
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            }}
            gap={5}
          >
            <Box width="100%">
              <img src={blogData.coverImage || blogcard} alt="" width="100%" />
            </Box>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              padding={2}
              flexDirection="column"
            >
              <Typography
                variant="h6"
                fontWeight={300}
                color="#002135"
                sx={{ alignSelf: "flex-start" }}
              >
                {new Date(blogData.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
              <MainHeading heading={blogData.title} />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box paddingY={5}>
        <Container>
          <Stack gap={4}>
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
              gap={5}
            >
              <Box width="100%">
                <MainPara para={stripHtmlTags(blogData.content)} />
              </Box>
            </Stack>
            <Stack gap={3}>
              <Box width="100%" height="500px">
                <img
                  src={blogData.coverImage || blogcard}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SingleBlog;
