import axios from 'axios';
import { ChangeEvent, useState } from 'react';

const useImageUpload = () => {
  const [previewImageSrc, setPreviewImageSrc] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const encodeFileToBase64 = (fileBlob: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPreviewImageSrc(reader.result);
        }

        resolve(reader.result);
      };
    });
  };

  const handleImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImageFile(selectedFile);
      encodeFileToBase64(selectedFile);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await axios.post(
        'https://panda-market-api.vercel.app/images/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          },
        }
      );

      return res.data.url;
    } catch (error) {
      console.error('이미지 업로드에 실패했습니다......', error);
      return null;
    }
  };
  return { previewImageSrc, handleImagePreview, uploadImage, imageFile };
};

export default useImageUpload;