import { Box, Card, IconButton, styled } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";
import DeleteOutlined from "icons/DeleteOutlined";
import UploadOnCloud from "icons/UploadOnCloud";
import React from "react";
import { useDropzone } from "react-dropzone";
import { lightTheme } from "../../../constants";
const UploadImagesWrapper = styled(Box)(({
  theme
}) => ({
  overflow: "hidden",
  borderRadius: "8px",
  "&::after": {
    top: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    content: '""',
    height: "100%",
    position: "absolute",
    transition: "opacity 0.3s",
    backgroundColor: theme.palette.secondary[300]
  },
  "&:hover::after": {
    opacity: 0.7
  },
  "&:hover .MuiButtonBase-root.MuiIconButton-root": {
    visibility: "visible"
  }
}));
const DeleteIconButton = styled(IconButton)(({
  theme
}) => {
  const bgColor = lightTheme(theme) ? "white" : theme.palette.background.default;
  return {
    top: 10,
    right: 10,
    zIndex: 1,
    padding: "4px",
    visibility: "hidden",
    position: "absolute",
    backgroundColor: bgColor,
    transition: "visibility 0.2s",
    "&:hover": {
      backgroundColor: bgColor
    }
  };
}); // --------------------------------------------------------------

// --------------------------------------------------------------
const ImageUpload = ({
  onDrop,
  handleRemoveImage,
  files
}) => {
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"]
    },
    onDrop
  });
  return <Card sx={{
    padding: 3
  }}>
      <Box {...getRootProps({
      className: "dropzone"
    })} sx={{
      padding: 3,
      cursor: "pointer",
      textAlign: "center"
    }}>
        <UploadOnCloud sx={{
        fontSize: 38,
        color: "text.disabled"
      }} />
        <Tiny fontWeight={600}>Drop your images here or</Tiny>
        <H6 fontSize={12} color="primary.main">
          Select click to browse
        </H6>

        <input {...getInputProps()} placeholder="Select click to browse" />
      </Box>

      {files.length > 0 && <FlexBox gap={2} mt={2}>
          {files.map((file, index) => <UploadImagesWrapper key={index} position="relative">
              <AppAvatar src={file.preview} sx={{
          borderRadius: "0%",
          width: 100,
          height: 100
        }} />

              <DeleteIconButton onClick={() => handleRemoveImage(file)}>
                <DeleteOutlined sx={{
            color: "text.disabled",
            fontSize: 17
          }} />
              </DeleteIconButton>
            </UploadImagesWrapper>)}
        </FlexBox>}
    </Card>;
};

export default ImageUpload;