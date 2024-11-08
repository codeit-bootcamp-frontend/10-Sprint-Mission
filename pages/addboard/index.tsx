import axios, { HttpStatusCode } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import useImageUpload from '@/hooks/useImageUpload';
import IconPlus from '@/public/images/icons/ic_plus.svg';
import { Container, SectionHeader, SectionTitle } from '@/styles/CommonStyles';

const AddBoardPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { previewImageSrc, handleImagePreview, uploadImage, imageFile } =
    useImageUpload();

  const formSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (title.length === 0 || content.length === 0) {
      alert('제목과 내용은 필수 입력사항입니다.');
    } else {
      try {
        if (window.confirm('게시글을 등록하시겠습니까?')) {
          const token = process.env.NEXT_PUBLIC_API_TOKEN; // TODO: 토큰은 추후에 수정해야 합니다.
          let imageUrl = '';
          if (imageFile) {
            const uploadImageUrl = await uploadImage(imageFile);
            if (uploadImageUrl) {
              imageUrl = uploadImageUrl;
            } else {
              alert('이미지 업로드에 실패했습니다.');
              return;
            }
          }

          const res = await axios.post(
            'https://panda-market-api.vercel.app/articles',
            {
              title,
              content,
              image: imageUrl,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (res.status === HttpStatusCode.Created) {
            alert('게시글이 등록되었습니다.');
            console.log(res.data);
            router.push(`/boards/${res.data.id}`);
          } else {
            alert('게시글 등록에 실패했습니다.');
          }
        }
      } catch (err) {
        console.error(err);
        alert('게시글 등록에 실패했습니다.');
      }
    }
  };
  return (
    <Container>
      <SectionHeader>
        <SectionTitle>게시글 쓰기</SectionTitle>
        <PostStyleButton onClick={formSubmit}>등록</PostStyleButton>
      </SectionHeader>
      <StyledFormContainer>
        <StyledBoxTitle>*제목</StyledBoxTitle>
        <StyledBox>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='제목을 입력해주세요'
            type='text'
          />
        </StyledBox>
        <StyledBoxTitle>*내용</StyledBoxTitle>
        <StyledBox>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='내용을 입력해주세요'
          />
        </StyledBox>
        <StyledBoxTitle>이미지</StyledBoxTitle>
        <StyledFileUpload htmlFor='file-upload' $hasImage={!!previewImageSrc}>
          <input onChange={handleImagePreview} id='file-upload' type='file' />
          {!previewImageSrc ? (
            <>
              <Image src={IconPlus} alt='icon-plus' />
              <span>이미지 등록</span>
            </>
          ) : (
            <Image
              src={previewImageSrc}
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

const StyledFileUpload = styled.label<{ $hasImage: boolean }>`
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
  border: 1px solid
    ${({ $hasImage, theme }) =>
      $hasImage ? theme.colors.gray[200] : 'transparent'};
`;

export default AddBoardPage;
