import IconPlus from '@/public/images/icons/ic_plus.svg';
import { Container, SectionHeader, SectionTitle } from '@/styles/CommonStyles';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const AddBoardPage = () => {
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
        }

        resolve(reader.result);
      };
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      encodeFileToBase64(e.target.files[0]);
    }
  };

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
        <StyledFileUpload htmlFor='file-upload' hasImage={!!imageSrc}>
          <input onChange={handleImageUpload} id='file-upload' type='file' />
          {!imageSrc ? (
            <>
              <IconPlus />
              <span>이미지 등록</span>
            </>
          ) : (
            <Image
              src={imageSrc}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              alt='preview-img'
            />
          )}
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

const StyledFileUpload = styled.label<{ hasImage: boolean }>`
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
  overflow: hidden;
  color: ${({ theme }) => theme.colors.gray[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${({ hasImage, theme }) =>
    hasImage ? `1px solid ${theme.colors.gray[200]}` : 'none'};
`;

export default AddBoardPage;
