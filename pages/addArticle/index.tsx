import { FormEvent, useState } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  SectionTitle,
  SpaceBetween,
} from "@/styles/CommonStyles";
import InputItem from "@/components/ui/InputItem";
import ImageUpload from "@/components/ui/ImageUpload";

const TitleSection = styled(SpaceBetween)`
  margin-bottom: 24px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

const AddArticlePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isSubmitDisabled = !title.trim() || !content.trim();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TitleSection>
          <SectionTitle>게시글 쓰기</SectionTitle>
          <Button type="submit" disabled={isSubmitDisabled}>
            등록
          </Button>
        </TitleSection>

        <InputSection>
          <InputItem
            id="title"
            label="*제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해 주세요"
          />

          <InputItem
            id="content"
            label="*내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해 주세요"
            isTextArea
          />

          <ImageUpload title="이미지" />
        </InputSection>
      </form>
    </Container>
  );
};

export default AddArticlePage;
