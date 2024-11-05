import styled from "styled-components";
import HeartSvg from "@/public/images/icons/ic_heart.svg";
import { FlexRowCentered } from "@/styles/CommonStyles";
import Icon from "@/components/ui/Icon";

const PillButton = styled.button`
  color: var(--gray-500);
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--gray-200);

  &:hover svg path {
    fill: var(--red);
    stroke: var(--red);
  }
`;

const ButtonContent = styled(FlexRowCentered)`
  gap: 4px;
`;

interface LikeButtonProps {
  productId: number;
  isFavorite: boolean;
  favoriteCount: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  productId,
  isFavorite,
  favoriteCount,
}) => {
  return (
    <PillButton>
      <ButtonContent>
\        <Icon
          iconComponent={HeartSvg}
          size={24}
           fillColor={isFavorite ? "var(--red)" : undefined}
        />
        {favoriteCount.toLocaleString()}
      </ButtonContent>
    </PillButton>
  );
};

export default LikeButton;
