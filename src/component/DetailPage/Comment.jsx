import styled from "styled-components";
import commentPatchRmbtn from "../../assets/commentPatchRmbtn.png";
import ProfileImg from "../../assets/profile.png";
import { useState, useEffect } from "react";
import { fetchProductsComments } from "../../api";
import GoBack from "../../assets/ic_back.png";
import { useNavigate } from "react-router-dom";

const InquiryProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;
const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  position: relative;
`;

const PatchRmbtn = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const DropDownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 12px;
  border: 1px solid #e5e7e8;
  margin-top: 4px;
  right: 0;
  top: 100%;
  z-index: 1;
  overflow: hidden;
`;

const PatchRm = styled.button`
  background-color: #ffffff;
  border: 1px solid #e5e7e8;
  width: 130px;
  height: 42px;
`;
const GobackButton = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:18px;
  line-height:26px;
  margin-top:64px;
  height: 48px;
  width:240px;
  border-radius: 48px;
  padding 12px 64px;
  border : 1px solid #ffffff;
  background-color:#3692ff;
  color:#ffffff;
  cursor:pointer;
  img {
    margin-left: 8px; 
    width: 20px; 
    height: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

const Comment = ({ id }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const [openIndex, setOpenIndex] = useState(null);
  const [comments, setComments] = useState({
    list: [],
    nextCursor: null,
  });
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await fetchProductsComments(id);
        setComments(data);
      } catch (error) {
        console.error("Error fetching ProductDes:", error);
      }
    };
    fetchComments();
  }, [id]);

  const DropDown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      <div>
        {comments &&
          comments.list &&
          comments.list.map((comment, index) => {
            return (
              <div key={index}>
                <CommentContainer>
                  <p>{comment.content}</p>
                  <PatchRmbtn
                    onClick={() => DropDown(index)}
                    src={commentPatchRmbtn}
                  ></PatchRmbtn>
                  {openIndex === index && (
                    <DropDownMenu>
                      <PatchRm>수정하기</PatchRm>
                      <PatchRm>삭제하기</PatchRm>
                    </DropDownMenu>
                  )}
                </CommentContainer>
                <div style={{ display: "flex", marginTop: "24px" }}>
                  <img src={ProfileImg} />
                  <InquiryProfile>
                    {comment.writer ? (
                      <p>{comment.writer.nickname}</p>
                    ) : (
                      <p>작성자 정보 없음</p>
                    )}
                    <p style={{ marginTop: "4px" }}>1시간 전</p>
                  </InquiryProfile>
                </div>
              </div>
            );
          })}
      </div>

      <ButtonWrapper>
        <GobackButton type="button" onClick={handleGoBack}>
          목록으로 돌아가기
          <img src={GoBack} alt="돌아가기 이미지" />
        </GobackButton>
      </ButtonWrapper>
    </section>
  );
};

export default Comment;
