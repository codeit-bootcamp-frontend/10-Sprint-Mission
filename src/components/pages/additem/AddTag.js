import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input.js";

const StyledTagInput = styled(Input)`
  width: 100%;
  padding: 10px;
  text-align: start;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

const Tag = styled.div`
  border-radius: 26px;
  background-color: #f3f4f6;
  padding: 6px 15px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4px 10px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 2px 8px;
    font-size: 10px;
  }
`;

const RemoveButton = styled.button`
  background-color: #9ca3af;
  border: none;
  border-radius: 100%;
  color: #f9fafb;
  margin-left: 8px;
  cursor: pointer;
  font-size: 14px;
  padding: 0 6px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0 4px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 0 2px;
  }
`;

function TagInput() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      setTags((prevTags) => {
        if (!prevTags.includes(inputValue.trim())) {
          return [...prevTags, inputValue.trim()];
        }
        return prevTags;
      });
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <>
      <StyledTagInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTag}
        placeholder="태그를 입력해주세요"
      />
      <TagList>
        {tags.map((tag, index) => (
          <Tag key={index}>
            <p>#</p>
            {tag}
            <RemoveButton onClick={() => handleRemoveTag(tag)}>x</RemoveButton>
          </Tag>
        ))}
      </TagList>
    </>
  );
}

export default TagInput;
