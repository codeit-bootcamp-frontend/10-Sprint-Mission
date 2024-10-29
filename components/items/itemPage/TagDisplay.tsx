import { TagsDisplaySection, Tag } from "./TagDisplay.styles"

type TagDisplayProps = {
  tags: string[];
}

const TagDisplay = ({ tags }: TagDisplayProps) => {
  if (!tags || tags.length === 0) return null;

  return (
    <TagsDisplaySection>
      {tags.map((tag, index) => (
        <Tag key={`tag-display-${index}`}>#{tag}</Tag>
      ))}
    </TagsDisplaySection>
  );
};

export default TagDisplay;
