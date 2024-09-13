import { css } from '@emotion/react';
import cancelBtn from '../assets/images/ic-cancel.svg';
import plusBtn from '../assets/images/ic-plus.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const layout = css`
  width: 1200px;
  margin: 0 auto;
  margin-top: 2.4rem;
  position: relative;

  ul {
    display: flex;
    gap: 1.2rem;
  }
`;

const h2 = css`
  color: var(--Gray-800);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.9rem;
`;

const label = css`
  font-weight: 700;
  font-size: 1.8rem;
`;

const input = css`
  background-color: var(--Gray-100);
  padding: 1.6rem 2.4rem;
  border-radius: 1.2rem;
  border-width: 0;
  line-height: 2.6rem;
  min-height: 2.6rem;
  font-size: 1.6rem;

  &::placeholder {
    color: var(--Gray-400);
    font-weight: 400;
    font-size: 1.6rem;
    vertical-align: middle;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  /* input arrow 없애기*/
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  &[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const imageBox = css`
  background-color: var(--Gray-100);
  border-radius: 1.2rem;
  border-width: 0;
  height: 28.2rem;
  width: 28.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: var(--Gray-400);
    font-weight: 400;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const formField = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  :not(:last-child) {
    margin-bottom: 3.2rem;
  }

  .error-message {
    color: red;
    font-size: 1.2rem;
  }
`;

const tagList = css`
  padding: 0.6rem 1.6rem;
  display: inline-flex;
  background-color: var(--Gray-100);
  height: 3.6rem;
  border-radius: 2.6rem;
  gap: 0.8rem;
  align-items: center;
  font-size: 1.6rem;
`;

const disabledButton = css`
  background-color: var(--Gray-400);
  color: var(--Gray-100);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.3rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-width: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

const ableButton = css`
  ${disabledButton}
  background-color: var(--Primary-100);
`;

function AddItemPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => console.log(data);

  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
  };

  return (
    <div css={layout}>
      <h2 css={h2}>상품 등록하기</h2>
      <form method='post' onSubmit={handleSubmit(onSubmit)}>
        <div css={formField}>
          <span css={label}>상품 이미지</span>
          <label css={imageBox} htmlFor='p-img'>
            <div>
              {imageSrc ? (
                <img src={imageSrc} alt='상품 이미지' />
              ) : (
                <>
                  <img src={plusBtn} alt='상품 이미지' />
                  <span>이미지 등록</span>
                </>
              )}
            </div>
          </label>
          <input
            css={css`
              ${input};
              width: 28.2rem;
              height: 28.2rem;
              visibility: hidden;
            `}
            type='file'
            id='p-img'
            name='p-img'
            accept='image/png, image/jpeg'
            onChange={(e) => encodeFileToBase64(e.target.files[0])}
          />
        </div>
        <div css={formField}>
          <label css={label} htmlFor='p-name'>
            상품명
          </label>
          <input
            css={input}
            type='text'
            name='title'
            id='p-name'
            placeholder={'상품명을 입력해주세요'}
            {...register('name', {
              required: { value: true, message: '상품명은 필수 값입니다.' },
            })}
          />
          {errors?.name?.message && (
            <span className='error-message'>{errors.name.message}</span>
          )}
        </div>
        <div css={formField}>
          <label css={label} htmlFor='p-info'>
            상품 소개
          </label>
          <textarea
            css={css`
              ${input};
              resize: none;
              height: 28.2rem;
              &:focus {
                outline: none;
                box-shadow: none;
              }
            `}
            name=''
            id='p-into'
            placeholder={'상품 소개를 입력해주세요'}
            {...register('info', {
              required: { value: true, message: '상품 소개는 필수 값입니다.' },
            })}
          ></textarea>
          {errors?.info?.message && (
            <span className='error-message'>{errors.info.message}</span>
          )}
        </div>
        <div css={formField}>
          <label css={label} htmlFor='p-price'>
            판매가격
          </label>
          <input
            css={input}
            type='number'
            name='price'
            id='p-price'
            placeholder={'판매 가격을 입력해주세요'}
            {...register('price', {
              required: { value: true, message: '판매 가격은 필수 값입니다.' },
            })}
          />
          {errors?.price?.message && (
            <span className='error-message'>{errors.price.message}</span>
          )}
        </div>
        <div css={formField}>
          <label css={label} htmlFor='p-tag'>
            태그
          </label>
          <input
            css={input}
            type='text'
            name='tag'
            id='p-tag'
            placeholder={'태그를 입력해주세요'}
            {...register('tag', {
              required: {
                value: true,
                message: '태그는 필수 값입니다.',
              },
            })}
          />
          {errors?.tag?.message && (
            <span className='error-message'>{errors.tag.message}</span>
          )}

          <ul>
            <li css={tagList}>
              <span>#태그1</span>
              <div
                css={css`
                  cursor: pointer;
                  background-color: var(--Gray-400);
                  width: 2.2rem;
                  height: 2.4rem;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <img src={cancelBtn} />
              </div>
            </li>
            <li css={tagList}>
              <span>#태그1</span>
              <div
                css={css`
                  cursor: pointer;
                  background-color: var(--Gray-400);
                  width: 2.2rem;
                  height: 2.4rem;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <img src={cancelBtn} />
              </div>
            </li>
            <li css={tagList}>
              <span>#태그1</span>
              <div
                css={css`
                  cursor: pointer;
                  background-color: var(--Gray-400);
                  width: 2.2rem;
                  height: 2.4rem;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <img src={cancelBtn} />
              </div>
            </li>
          </ul>
        </div>
        <button
          css={!isDirty || !isValid ? disabledButton : ableButton}
          type='submit'
        >
          등록
        </button>
      </form>
    </div>
  );
}

export default AddItemPage;
