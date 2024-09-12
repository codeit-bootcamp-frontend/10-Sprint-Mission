import React, { useState } from "react";
import {
  Button,
  Container,
  FlexContainer,
  SectionTitle,
} from "../../styles/CommonStyles";
import styled from "styled-components";
import InputItem from "../../components/UI/InputItem";
import TagInput from "../../components/UI/TagInput";
import ImageUpload from "../../components/UI/ImageUpload";

const TitleSection = styled(FlexContainer)`
  margin-bottom: 16px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 24px;
  }
`;

function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const isSubmitDisabled = !name || !description || !price || !tags.length;

  return (
    <Container>
      <form>
        <TitleSection>
          <SectionTitle>��ǰ ����ϱ�</SectionTitle>
          <Button type="submit" disabled={isSubmitDisabled}>
            ���
          </Button>
        </TitleSection>

        <InputSection>
          <ImageUpload title="��ǰ �̹���" />

          <InputItem
            id="name"
            label="��ǰ��"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="��ǰ���� �Է��� �ּ���"
          />

          <InputItem
            id="description"
            label="��ǰ �Ұ�"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="��ǰ �Ұ��� �Է��� �ּ���"
            isTextArea
          />

          <InputItem
            id="price"
            label="�Ǹ� ����"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="�Ǹ� ������ �Է��� �ּ���"
          />

          <TagInput tags={tags} onAddTag={addTag} onRemoveTag={removeTag} />
        </InputSection>
      </form>
    </Container>
  );
}

export default AddItemPage;
