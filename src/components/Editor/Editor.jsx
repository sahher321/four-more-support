import React, { useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import { Box, Button, FormHelperText, InputLabel } from "@mui/material";
import "react-quill-new/dist/quill.snow.css";
import { db } from "../../Firebase/firebase";
import { ref as dbRef, set } from "firebase/database";

import Input from "../Heading/Input";
import { blogcard } from "../../assets";

const DEFAULT_IMAGE = blogcard;

const Editor = ({
  quillRef,
  value,
  onChange = () => {},
  error,
  name,
  labelTop,
}) => {
  const localRef = useRef(null);
  const [editorContent, setEditorContent] = useState("");
  const [imageFile, setImageFile] = useState(DEFAULT_IMAGE);
  const [title, setTitle] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const saveToFirebase = async () => {
    if (editorContent.trim() === "") {
      console.log("Content is empty. Not saving.");
      return;
    }

    const formattedDate = new Date(Date.now()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const uniqueId = Date.now();
    const blogRef = dbRef(db, `blogs/${uniqueId}`);

    const blogData = {
      id: uniqueId,
      title: title,
      content: editorContent,
      coverImage: imageFile,
      createdAt: formattedDate, // use the formatted date here
    };

    try {
      await set(blogRef, blogData);
      console.log("Data saved successfully!");
      setEditorContent("");
      setTitle("");
      setImageFile(null);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleChange = (e) => {
    const data = { target: { value: e, name } };
    onChange(data);
    setEditorContent(e);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const modules = {
    toolbar: [
      [
        { font: [] },
        { color: [] },
        { align: [] },
        { size: [] },
        { background: [] },
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { header: "1" },
        { header: "2" },
        { header: [3, 4, 5, 6, false] },
      ],
      ["bold", "italic", "underline", "strike", "blockquote", "link", "clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
    "image",
  ];

  return (
    <Box>
      {labelTop && (
        <InputLabel sx={{ marginBottom: "10px", color: "#000" }}>
          {labelTop}
        </InputLabel>
      )}

      <Box
        sx={{
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Input
          type="text"
          placeholder="Write title of blog"
          backgroundColor="#F1F1F1"
          color="#002035"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </Box>

      {/* Image Preview */}
      {/* <Box
        sx={{
          width: "300px",
          height: "300px",
          overflow: "hidden",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <img
          src={imageFile ? URL.createObjectURL(imageFile) : DEFAULT_IMAGE}
          alt="Cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box> */}

      <ReactQuill
        ref={quillRef || localRef}
        theme="snow"
        value={editorContent}
        modules={modules}
        formats={formats}
        onChange={handleChange}
        placeholder="Start writing here..."
        style={{
          border: error ? "1px solid #d32f2f" : "1px solid #ccc",
          borderRadius: 5,
          minHeight: 300,
          maxHeight: 400,
          height: 300,
          overflowY: "hidden",
          marginBottom: 10,
        }}
      />

      {error && (
        <FormHelperText sx={{ color: "error.main", margin: 0 }}>
          {error}
        </FormHelperText>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={saveToFirebase}
        sx={{ marginTop: "10px" }}
      >
        Save Content
      </Button>
    </Box>
  );
};

export default Editor;
