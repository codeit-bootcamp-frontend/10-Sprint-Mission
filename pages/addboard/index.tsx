import {
  Container,
  SectionHeader,
  SectionTitle
} from '@/styles/CommonStyles';
import styled from 'styled-components';

const AddBoardPage = () => {
  return (
    <Container>
      <SectionHeader>
        <SectionTitle>게시글 쓰기</SectionTitle>
        <PostStyleButton>등록</PostStyleButton>
      </SectionHeader>
    </Container>
  );
};

const PostStyleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.gray[100]};
  padding: 8px 23px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default AddBoardPage;
