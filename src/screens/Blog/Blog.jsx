import React, { useEffect, useState } from "react";
import { Banner, BlogCard, MainHeading } from "../../components";
import { Box, Grid, Stack, Container, Button } from "@mui/material";
import { db } from "../../Firebase/firebase";
import { ref, onValue } from "firebase/database";

const ITEMS_PER_LOAD = 3;
const INITIAL_LOAD = 6;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  useEffect(() => {
    const blogRef = ref(db, "blogs/");

    const unsubscribe = onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        const sortedData = formattedData.sort((a, b) => b.id - a.id);
        setBlogs(sortedData);
        setVisibleBlogs(sortedData.slice(0, INITIAL_LOAD));
      } else {
        setBlogs([]);
        setVisibleBlogs([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const loadMore = () => {
    const newCount = visibleCount + ITEMS_PER_LOAD;
    setVisibleCount(newCount);
    setVisibleBlogs(blogs.slice(0, newCount));
  };

  return (
    <>
      {/* <Banner
        head="Connect with our non stop daily blogs"
        para="Our Vision for NDIS Care"
        main="Our Blogs"
      /> */}

      <Box paddingY={5}>
        <Container>
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            mx="auto"
            gap={1}
          >
            <MainHeading heading="Recent Blogs" textAlign="center" />
            <Grid container spacing={4} mt={6} mb={3} justifyContent="center">
              {visibleBlogs.map((content) => (
                <Grid
                  item
                  size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 4 }}
                  key={content.id}
                >
                  <BlogCard
                    id={content.id}
                    title={content.title}
                    image={content.coverImage}
                    date={content.createdAt}
                  />
                </Grid>
              ))}
            </Grid>

            {visibleCount < blogs.length && (
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "max-content",
                  fontSize: "16px",
                  textTransform: "none",
                  marginTop: "10px",
                  mx: "auto",
                }}
                size="large"
                onClick={loadMore}
              >
                Load more
              </Button>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
