import React, { useState } from 'react'
import styled from 'styled-components'
import InputItem from './InputItem'
import { FlexContainer } from '../../styles/CommonStyles'
import DeleteButton from './DeleteButton'

const TagButtonsSection = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
`

const Tag = styled(FlexContainer)`
  background-color: ${({ theme }) => theme.colors.gray[2]};
  color: ${({ theme }) => theme.colors.black};
  padding: 14px 14px 14px 16px;
  border-radius: 999px;
  min-width: 100px;
`

const TagText = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin-right: 8px;
  max-width: calc(100% - 28px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

function TagInput ({ tags, onAddTag, onRemoveTag }) {
  const [input, setInput] = useState('')

  const onPressEnter = event => {
    if (event.nativeEvent.isComposing) return

    const inputString = input.trim()
    if (event.key === 'Enter' && inputString) {
      event.preventDefault()
      onAddTag(inputString)
      setInput('')
    }

    // 입력 포커스를 잃었을때, 이전 까지 입력된 값으로 태그를 추가하도록 변경 ???
  }

  return (
    <div>
      <InputItem
        id='tags'
        label='태그'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onPressEnter}
        placeholder='태그를 입력해 주세요, 입력 완료 후 앤터키를 누르세요'
      />

      {tags.length > 0 && (
        <TagButtonsSection>
          {tags.map(tag => (
            <Tag key={`tag-${tag}`}>
              <TagText>{tag}</TagText>

              <DeleteButton
                onClick={() => onRemoveTag(tag)}
                label={`${tag} 태그`}
              />
            </Tag>
          ))}
        </TagButtonsSection>
      )}
    </div>
  )
}

export default TagInput
