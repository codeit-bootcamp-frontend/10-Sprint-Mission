import styled from "styled-components";
export const AddBoardPage = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
export const AddBoardPageContainer = styled.div`
    max-width:1200px;
    width:100%;
    height:100%;
    margin-top:24px;
    display:flex;
    gap:40px;
    flex-direction:column;

    @media(max-width:1199px){
        max-width:696px;
    }
    @media(max-width:767px){
        max-width:343px;
    }
`;