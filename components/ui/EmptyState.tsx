import EmptyStateImage from "@/public/images/ui/empty-comments.svg";
import { EmptyStateContainer, EmptyStateText } from "./EmptyState.styles";

type EmptyStateProps = {
  text: string;
  imageComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const EmptyState = ({
  text,
  imageComponent: ImageComponent = EmptyStateImage,
}: EmptyStateProps) => {
  return (
    <EmptyStateContainer>
      <ImageComponent />
      <EmptyStateText>{text}</EmptyStateText>
    </EmptyStateContainer>
  );
};

export default EmptyState;
