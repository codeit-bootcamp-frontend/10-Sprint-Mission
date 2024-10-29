import { IconWrapper } from "./Icon.styles";

type IconProps = {
  iconComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  size?: number;
  fillColor?: string;
  outlineColor?: string;
}

const Icon = ({
  iconComponent: IconComponent,
  size,
  fillColor = "currentColor",
  outlineColor = "currentColor",
}: IconProps) => (
  <IconWrapper $size={size} $fillColor={fillColor} $outlineColor={outlineColor}>
    <IconComponent />
  </IconWrapper>
);

export default Icon;
