import IconPlus from '@/public/images/icons/ic_plus.svg';
import { Container, SectionHeader, SectionTitle } from '@/styles/CommonStyles';
import styled from 'styled-components';

const AddBoardPage = () => {
  return (
    <Container>
      <SectionHeader>
        <SectionTitle>게시글 쓰기</SectionTitle>
        <PostStyleButton>등록</PostStyleButton>
      </SectionHeader>
      <StyledFormContainer>
        <StyledBoxTitle>*제목</StyledBoxTitle>
        <StyledBox>
          <input placeholder='제목을 입력해주세요' type='text' />
        </StyledBox>
        <StyledBoxTitle>*내용</StyledBoxTitle>
        <StyledBox>
          <textarea placeholder='내용을 입력해주세요' />
        </StyledBox>
        <StyledBoxTitle>이미지</StyledBoxTitle>
        <StyledFileUpload htmlFor='file-upload'>
          <input id='file-upload' type='file' />
          <IconPlus />
          <span>이미지 등록</span>
        </StyledFileUpload>
      </StyledFormContainer>
    </Container>
  );
};

const StyledFormContainer = styled.div`
  margin-top: 13px;
  margin-bottom: 106px;
`;

const PostStyleButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[400]};
  color: ${({ theme }) => theme.colors.gray[100]};
  padding: 8px 23px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const StyledBoxTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray[800]};
`;

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  width: 100%;
  padding: 16px 24px;
  color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: 12px;
  margin-bottom: 24px;

  > textarea {
    // textarea의 기본 스타일 초기화
    border: none;
    overflow: auto;
    outline: none;
    background-color: inherit;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;

    width: 100%;
    height: 250px;

    &::placeholder {
      color: var(--gray-400);
      font-size: 16px;
    }

    &:focus {
      outline: none;
    }
  }

  > input {
    border: none;
    flex: 1;
    background-color: inherit;

    &::placeholder {
      color: var(--gray-400);
      font-size: 16px;
    }

    &:focus {
      outline: none;
    }
  }
`;

const StyledFileUpload = styled.label`
  > input[type='file'] {
    display: none;
  }
  // Custom file upload button
  display: inline-block;
  cursor: pointer;
  width: 282px;
  height: 282px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default AddBoardPage;
