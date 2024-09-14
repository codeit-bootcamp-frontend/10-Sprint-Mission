import React, { useState } from "react";
import styled from "styled-components";
import AddInput from "./AddPButton";
import AddPriceInput from "./AddPriceInput";
import IntroInput from "./AddIntroInput";
import NameInput from "./AddNameInput";
import IntroDuce from "./AddIntroduce";
import TopEnter from "./AddEnterButton";
import TagInput from "./AddTag";

const AddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 100px;
  @media (max-width: 1024px) {
    padding: 10px 100px;
  }

  @media (max-width: 768px) {
    padding: 10px 50px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
  }
`;

const AddIntroDuce = styled(IntroDuce)`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;

  @media (max-width: 768px) {
    margin: 16px 0;
  }

  @media (max-width: 480px) {
    margin: 12px 0;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

function AddAllItems() {
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const isFormValid = () => {
    return image && name && intro && price && tags.length > 0;
  };

  const handleFormSubmit = () => {
    if (isFormValid()) {
      const formData = {
        image,
        name,
        intro,
        price,
        tags,
      };
      console.log("폼 데이터:", formData);
    } else {
      console.log("모든 필드를 채워주세요.");
    }
  };

  return (
    <AddItemContainer>
      <TopContainer>
        <AddIntroDuce>상품 등록하기</AddIntroDuce>
        <TopEnter onSubmit={handleFormSubmit} isEnabled={isFormValid()} />
      </TopContainer>
      <Section>
        <IntroDuce>상품 이미지</IntroDuce>
        <AddInput setImage={setImage} />
      </Section>
      <Section>
        <IntroDuce>상품명</IntroDuce>
        <NameInput setName={setName} />
      </Section>
      <Section>
        <IntroDuce>상품 소개</IntroDuce>
        <IntroInput setIntro={setIntro} />
      </Section>
      <Section>
        <IntroDuce>판매가격</IntroDuce>
        <AddPriceInput setPrice={setPrice} />
      </Section>
      <Section>
        <IntroDuce>태그</IntroDuce>
        <TagInput setTags={setTags} />
      </Section>
    </AddItemContainer>
  );
}

export default AddAllItems;
