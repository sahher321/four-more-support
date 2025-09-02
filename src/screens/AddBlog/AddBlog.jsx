import { Box, Container } from "@mui/material";
import { Editor } from "../../components";

const AddBlog = () => {
  return (
    <>
      <Box paddingY={7}>
        <Container>
          <Editor />
        </Container>
      </Box>
    </>
  );
};

export default AddBlog;
