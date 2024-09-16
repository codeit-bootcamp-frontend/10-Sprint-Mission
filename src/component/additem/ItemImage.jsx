import { useState, useRef } from "react";
import styled from "styled-components";
import RegistImg from "../../assets/Registimg.png";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 8px;
  font-size: 14px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const RegistedImg = styled.img`
  margin-top: 16px;
  margin-left: 16px;
  width: 282px;
  height: 282px;
  border-radius: 12px;
`;

const Registimg = styled.img`
  margin-top: 16px;
  width: 282px;
  height: 282px;
  border-radius: 12px;
`;

const ItemSubTitle = styled.h2`
  margin-top: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const ItemImage = ({ setItem }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (image) {
        setErrorMessage("최대 1개까지만 등록할 수 있습니다");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setErrorMessage("");
        setItem((prev) => ({ ...prev, image: true }));
        console.log("img");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <ItemSubTitle>상품 이미지</ItemSubTitle>
      <ImageContainer>
        <Registimg
          src={RegistImg}
          alt="상품 등록버튼"
          onClick={handleImgClick}
        />
        {image && <RegistedImg src={image} alt="등록된 이미지" />}
      </ImageContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <HiddenFileInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </section>
  );
};

export default ItemImage;
