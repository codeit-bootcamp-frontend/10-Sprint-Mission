import styled from "styled-components";
import { useState } from "react";

const InquiryHagi = styled.p`
  margin-top: 40px;
  width: 56px;
  height: 26px;
  font-size: 16px;
`;
const InquiryArea = styled.textarea`
  width: 100%;
  height: 104px;
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 16px 24px;
  color: 9ca3af;
  border: 1px solid #ffffff;
  resize: none;
  &:focus {
    border: 1px solid #3692ff;
    outline: none;
  }
`;
const InquiryButton = styled.button`
  margin-top: 16px;
  width: 74px;
  height: 42px;
  color: #ffffff;
  background-color: #9ca3af;
  border-radius: 8px;
  border: 1px solid #ffffff;
  background-color: ${(props) => (props.disabled ? "#9ca3af" : "#007bff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Inquiry = () => {
  const [inquiry, setInquiry] = useState("");

  const handleButtonActive = (e) => {
    setInquiry(e.target.value);
  };

  return (
    <section>
      <InquiryHagi>문의하기</InquiryHagi>
      <InquiryArea
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며,이에 대한 민형사상 책임은 게시자에게 있습니다."
        onChange={handleButtonActive}
      ></InquiryArea>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <InquiryButton disabled={!inquiry}>등록</InquiryButton>
      </div>
    </section>
  );
};

export default Inquiry;
