import HeartSvg from "@/public/images/icons/ic_heart.svg";
import { FlexRowCentered } from "@/styles/CommonStyles";
import Icon from "@/components/ui/Icon";
import { PillButton, ButtonContent } from "./LikeButton.styles";

type LikeButtonProps = {
  productId: number;
  isFavorite: boolean;
  favoriteCount: number;
}

const LikeButton = ({ productId, isFavorite, favoriteCount }: LikeButtonProps) => {
  return (
    <PillButton>
      <ButtonContent>
        <Icon
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
