import styled from "styled-components";
import { useState } from "react";

const ItemSubTitle = styled.h2`
  margin-top: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const ItemTag = styled.input`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: #f3f4f6;
  border: 1px solid #ffffff;
`;

const TextDisplay = styled.div`
  width: 110px;
  height: 36px;
  margin-top: 16px;
  font-size: 16px;
  color: #333;
  background-color: #f3f4f6;
  border-radius: 26px;
  font-weight: 400;
  padding: 6px 12px 6px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  color: #ffffff;
  border-radius: 10px;
  background: #9ca3af;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
`;

const Itemtag = ({ setItem }) => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (tag.trim()) {
        setTags([...tags, tag]);
        setTag("");
        setItem((prev) => ({ ...prev, tag: true }));
      }
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
    if (tags === null) {
      setItem((prev) => ({ ...prev, tag: false }));
    }
  };
  return (
    <section>
      <ItemSubTitle>태그</ItemSubTitle>
      <ItemTag
        type="text"
        value={tag}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="태그를 입력해주세요"
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {tags.map((submittedTag, index) => (
          <TextDisplay key={index}>
            #{submittedTag}
            <RemoveButton onClick={() => handleRemoveTag(index)}>
              x
            </RemoveButton>
          </TextDisplay>
        ))}
      </div>
    </section>
  );
};

export default Itemtag;
