import React, { useState, useRef, useEffect } from 'react';
import * as AS from './Styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

export interface AddItemValues {
    image: File | null;
    description: string;
    title: string;
}

export default function AddBoard() {
    const [values, setValues] = useState<AddItemValues>({
        image: null,
        title: '',
        description: '',
    });
    const [isValid, setIsValid] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onChange = (name: keyof AddItemValues, value: File | null) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            title: value,
        }));
    };

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            description: value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] || null;

        if (file) {
            onChange("image", file);
            const objectUrl = URL.createObjectURL(file); 
            setPreview(objectUrl); 
            setErrorMessage("");
        } else {
            onChange("image", null);
            setPreview(null);
        }
    };

    const handleClearClick = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        onChange("image", null);
        setPreview(null);
        setErrorMessage("");
    };

    const isFormValid = (values: AddItemValues) => {
        return (
          values.title.trim() !== '' &&
          values.description.trim() !== '' &&
          values.image !== null // Check for image being null
        );
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid(values)) {
          return;
        }
        console.log(values);
        // Perform further actions like API calls or form submission
    };

    useEffect(() => {
        setIsValid(isFormValid(values));
    }, [values]);

    return (
        <AS.AddBoardForm onSubmit={handleSubmit}> {/* Wrap the form with onSubmit */}
            <AS.TitleContainer>
                <AS.Title>게시물 쓰기</AS.Title>
                <AS.AddButton type="submit" disabled={!isValid}>등록</AS.AddButton> {/* Remove onChange */}
            </AS.TitleContainer>
            <AS.InputFormContainer>
                <AS.InputContainer>
                    <AS.InputLabel>*제목</AS.InputLabel>
                    <AS.ContentInput
                        type='text'
                        name='title'
                        value={values.title}
                        placeholder="제목을 입력해주세요"
                        onChange={handleTitleChange}
                    />
                </AS.InputContainer>
                <AS.InputContainer>
                    <AS.InputLabel>*내용</AS.InputLabel>
                    <AS.TextareaInput
                        name='description'
                        value={values.description}  
                        placeholder="내용을 입력해주세요"
                        onChange={handleTextareaChange}
                    />
                </AS.InputContainer>
                <AS.InputContainer>
                    <AS.InputLabel>이미지</AS.InputLabel>
                    <AS.ImgBox>
                        <AS.CustomButton onClick={() => {inputRef.current?.click();}}>
                            <AS.ContentInput
                                type='file'
                                name='image'
                                ref={inputRef}
                                onChange={handleImageChange} 
                                style={{ display: 'none' }} 
                            />
                            <AS.PlusIcon icon={faPlus} style={{ color: "#9CA3AF" }} />
                            <AS.ButtonText>이미지 등록</AS.ButtonText>
                        </AS.CustomButton>
                        <AS.Upload>
                            {preview && (
                                <AS.Preview src={preview} alt="이미지 미리보기" style={{ objectFit: "cover" }} />
                            )}
                            {values.image && (
                                <AS.DeleteButton icon={faXmark} onClick={handleClearClick} />
                            )}
                        </AS.Upload>
                    </AS.ImgBox>
                    {errorMessage && <AS.ErrorMessage>{errorMessage}</AS.ErrorMessage>}
                </AS.InputContainer>
            </AS.InputFormContainer>
        </AS.AddBoardForm>
    );
}