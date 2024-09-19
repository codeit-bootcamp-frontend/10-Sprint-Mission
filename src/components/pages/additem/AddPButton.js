import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";

const AddButton = styled(Button)`
  width: 200px;
  height: 200px;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  position: relative;
  margin: 0 0 32px 0;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #9ca3af;
  border: none;
  border-radius: 50%;
  color: #f9fafb;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
const PhotoContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

function AddInput() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (image) {
        setError("*이미지 등록은 최대 한개까지 가능합니다.");
        return;
      }
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
          setError("");
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <PreviewContainer>
      <PhotoContainer>
        <AddButton>
          <AddContainer>
            <p>+</p>
            <p>이미지 등록</p>
          </AddContainer>
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </AddButton>
        {image && (
          <ImagePreview>
            <PreviewImage src={image} alt="미리보기" />
            <RemoveButton onClick={handleRemoveImage}>X</RemoveButton>
          </ImagePreview>
        )}
      </PhotoContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PreviewContainer>
  );
}

export default AddInput;
