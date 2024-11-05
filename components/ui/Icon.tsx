import styled from "styled-components";

interface IconWrapperProps {
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

interface IconProps {
  iconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: number;
  fillColor?: string;
  outlineColor?: string;
}

const Icon: React.FC<IconProps> = ({
  iconComponent: IconComponent,
  size,
  fillColor = "currentColor",
  outlineColor = "currentColor",
}) => (
  <IconWrapper $size={size} $fillColor={fillColor} $outlineColor={outlineColor}>
    <IconComponent />
  </IconWrapper>
);

export default Icon;
