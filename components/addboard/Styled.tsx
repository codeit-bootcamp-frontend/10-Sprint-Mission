import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddBoardForm = styled.form`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    gap:32px;
`;

export const TitleContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

export const Title = styled.div`
    color: #1F2937;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
`;

export const AddButton = styled.button`
    width:74px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border:none;
    background:#3692FF;
    color:  #F3F4F6;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    cursor:pointer;
    &:disabled {
        background:#9CA3AF;
    }
`;

export const InputFormContainer = styled.div`
    width:100%;
    display:flex;
    gap:24px;
    flex-direction:column;
`;
export const InputContainer = styled.div`
    width:100%;
    display:flex;
    gap:12px;
    flex-direction:column;
`;

export const InputLabel = styled.label`
    color: #1F2937;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; 
`;
export const ContentInput = styled.input`
    display: flex;
    height: 56px;
    padding: 16px 24px;
    border-radius: 12px;
    background: #F3F4F6;
    border:none;
    z-index:0
    &::placeholder {
        color: #9CA3AF;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px; 
    }
`;
export const TextareaInput = styled.textarea`
    height: 250px;
    padding: 16px 24px;
    border:none;
    border-radius: 12px;
    background: var(--Cool-Gray-100, #F3F4F6);
    resize:none;
 &::placeholder {
        color: #9CA3AF;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }
`;


export const ImgBox = styled.div`
    width: 588px;
    display: flex;
    gap: 24px;

    @media (max-width: 1199px) {
        width: 346px;
        gap: 10px;
    }
`;

export const CustomButton = styled.button`
    width: 282px;
    height: 282px;
    display: flex;
    background: var(--Secondary-200, #F3F4F6);
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: none;
    @media (max-width: 1199px) {
        width: 168px;
        height: 168px;
    }
`;


export const PlusIcon = styled(FontAwesomeIcon)`
    width: 48px;
    height: 48px;
    background: none;

    @media (max-width: 1199px) {
        width: 24px;
        height: 24px;
    }
`;

export const ButtonText = styled.span`
    color: #9CA3AF;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    background: none;
`;

export const Upload = styled.div`
    width: 282px;
    height: 282px;

    @media (max-width: 1199px) {
        width: 168px;
        height: 168px;
    }
`;

export const Preview = styled.img`
    width: 100%;
    height: 100%;
    background-color: blue;
    border-radius: 12px;
    object-fit: cover;
`;

export const UploadButton = styled.button`
    background: none;
    border: none;
    position: relative;
    left: 248px;
    bottom: 276px;
    cursor: pointer;
    color: #9CA3AF;
    @media (max-width: 1199px) {
        left: 130px;
        bottom: 160px;
    }
`;

export const ErrorMessage = styled.span`
    color: #F74747;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
`;
export const DeleteButton = styled(FontAwesomeIcon)`
    width:24px;
    height:24px;
    position:relative;
    bottom:270px;
    left:240px;
    @media(max-width:1199px) {
        bottom:160px;
        left:130px;
    }
`;