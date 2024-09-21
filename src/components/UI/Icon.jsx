import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ $fillColor }) => $fillColor || 'current'}; // 색 채움
    width: ${({ $size }) => ($size ? `${$size}px` : 'auto')};
    height: ${({ $size }) => ($size ? `${$size}px` : 'auto')};
  }

  svg path {
    stroke: ${({ $fillColor, $outlineColor }) =>
      $fillColor || $outlineColor || 'currentColor'};
  }
`

const Icon = ({
  iconComponent: IconComponent,
  size,
  fillColor,
  outlineColor
}) => (
  <IconWrapper $size={size} $fillColor={fillColor} $outlineColor={outlineColor}>
    <IconComponent />
  </IconWrapper>
)

export default Icon
