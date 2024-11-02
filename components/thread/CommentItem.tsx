import styled from "styled-components";
import { Comment } from "@/types/commentTypes";
import { formatUpdatedAt } from "@/utils/dateUtils";
import SeeMoreIcon from "@/public/images/icons/ic_kebab.svg";
import DefaultProfileImage from "@/public/images/ui/ic_profile.svg";
import { LineDivider } from "@/styles/CommonStyles";
import Image from "next/image";

const CommentContainer = styled.div`
  padding: 24px 0;
  position: relative;
`;

const SeeMoreButton = styled.button`
  position: absolute;
  right: 0;
`;

const CommentContent = styled.p`
  font-size: 16px;
  line-height: 140%;
  margin-bottom: 24px;
`;

const AuthorProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserProfileImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const Username = styled.p`
  color: var(--gray-600);
  font-size: 14px;
  margin-bottom: 4px;
`;

const Timestamp = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: 12px;
`;

interface CommentItemProps {
  item: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ item }) => {
  const authorInfo = item.writer;
  const formattedTimestamp = formatUpdatedAt(item.updatedAt);

  return (
    <>
      <CommentContainer>
        {/* 참고: 더보기 버튼 기능은 추후 요구사항에 따라 추가 예정 */}
        <SeeMoreButton>
          <SeeMoreIcon />
        </SeeMoreButton>

        <CommentContent>{item.content}</CommentContent>

        <AuthorProfile>
          {authorInfo.image ? (
            <UserProfileImageWrapper>
              <Image
                src={authorInfo.image}
                alt={`${authorInfo.nickname}님의 프로필 사진`}
                width={40}
                height={40}
                objectFit="cover"
              />
            </UserProfileImageWrapper>
          ) : (
            <UserProfileImageWrapper>
              <DefaultProfileImage
                aria-label={`${authorInfo.nickname}님의 프로필 사진`}
              />
            </UserProfileImageWrapper>
          )}

          <div>
            <Username>{authorInfo.nickname}</Username>
            <Timestamp>{formattedTimestamp}</Timestamp>
          </div>
        </AuthorProfile>
      </CommentContainer>

      <LineDivider $margin="0" />
    </>
  );
};

export default CommentItem;
