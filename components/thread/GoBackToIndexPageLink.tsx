import styled from "styled-components";
import { StyledLink } from "@/styles/CommonStyles";
import BackIcon from "@/public/images/icons/ic_back.svg";

const GoBackLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
`;

interface GoBackToIndexPageLinkProps {
  pathname: string;
}

const GoBackToIndexPageLink: React.FC<GoBackToIndexPageLinkProps> = ({
  pathname,
}) => {
  return (
    <GoBackLink $pill href={pathname}>
      목록으로 돌아가기
      <BackIcon />
    </GoBackLink>
  );
};

export default GoBackToIndexPageLink;
