import EmptyStateImage from "@/public/images/ui/empty-comments.svg";
import { EmptyStateContainer, EmptyStateText } from "./EmptyState.styles";

interface EmptyStateProps {
  text: string;
  imageComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
