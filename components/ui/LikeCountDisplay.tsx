import React from "react";
import HeartIcon from "@/public/images/icons/ic_heart.svg";
import { LikeCountWrapper } from "./LikeCountDisplay.styles";

type LikeCountDisplayProps = {
  count: number;
  iconWidth?: number;
  fontSize?: number;
  gap?: number;
  className?: string;
}

const LikeCountDisplay = ({
  count,
  iconWidth = 16,
  fontSize = 16,
  gap = 4,
  className,
}: LikeCountDisplayProps) => {
  const displayCount = count >= 10000 ? "9999+" : count.toString();

  return (
    <LikeCountWrapper className={className} $fontSize={fontSize} $gap={gap}>
      <HeartIcon width={iconWidth} alt="좋아요 아이콘" />
      {displayCount}
    </LikeCountWrapper>
  );
};

export default LikeCountDisplay;
