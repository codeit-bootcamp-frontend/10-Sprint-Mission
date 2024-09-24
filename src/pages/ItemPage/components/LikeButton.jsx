import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HeartSvg } from '../../../assets/images/icons/ic_heart.svg'
import { FlexContainer } from '../../../styles/CommonStyles'
import Icon from '../../../components/UI/Icon'

const PillButton = styled.button`
  color: var(--gray-500);
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--gray-200);

  &:hover svg path {
    fill: var(--red);
    stroke: var(--red);
  }
`

const ButtonContent = styled(FlexContainer)`
  gap: 4px;
`

function LikeButton ({ productId, isFavorite, favoriteCount }) {
  return (
    <PillButton>
      <ButtonContent>
        <Icon
          iconComponent={HeartSvg}
          size={24}
          fillColor={isFavorite && 'var(--red)'}
        />
        {favoriteCount.toLocaleString()}
      </ButtonContent>
    </PillButton>
  )
}

export default LikeButton
