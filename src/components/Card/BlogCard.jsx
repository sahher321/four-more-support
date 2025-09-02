import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { blogcard } from "../../assets";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ image, title, date, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/singleblog/${id}`);
  };
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <img
          src={image || blogcard}
          alt="Card"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <CardContent sx={{ padding: "16px" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={1}
          textAlign="left"
        >
          {date}
        </Typography>
        <Typography
          variant="body1"
          color="secondary.main"
          fontWeight={600}
          textAlign="left"
          mb={2}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "max-content",
            fontSize: "16px",
            textTransform: "none",
            marginTop: "10px",
            width: "100%",
          }}
          onClick={handleClick}
          size="large"
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
