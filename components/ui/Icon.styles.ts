import styled from "styled-components";

type IconWrapperProps = {
  $size?: number;
  $fillColor?: string;
  $outlineColor?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ $fillColor }) => $fillColor || "current"};
    width: ${({ $size }) => ($size ? `${$size}px` : "auto")};
    height: ${({ $size }) => ($size ? `${$size}px` : "auto")};
  }

  svg path {
    stroke: ${({ $fillColor, $outlineColor }) =>
      $fillColor || $outlineColor || "currentColor"};
  }
`;

export { IconWrapper };
