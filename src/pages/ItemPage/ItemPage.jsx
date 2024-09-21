import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container, LineDivider, StyledLink } from '../../styles/CommonStyles'
import { getProductDetail } from '../../api/itemApi'
import ItemProfileSection from './components/ItemProfileSection'
import ItemCommentSection from './components/ItemCommentSection'
import { ReactComponent as BackIcon } from '../../assets/images/icons/ic_back.svg'
import LoadingSpinner from '../../components/UI/LoadingSpinner'

const BackToMarketPageLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
`

function ItemPage () {
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const { productId } = useParams()

  useEffect(() => {
    async function fetchProduct () {
      if (!productId) {
        setError('상품 아이디가 제공되지 않았어요.')
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      try {
        const data = await getProductDetail(productId)
        if (!data) {
          throw new Error('해당 상품의 데이터를 찾을 수 없습니다.')
        }
        setProduct(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (error) {
    alert(`오류: ${error}`)
  }

  if (!productId || !product) return null

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />

      <Container>
        <ItemProfileSection product={product} />

        <LineDivider />

        <ItemCommentSection productId={productId} />

        <BackToMarketPageLink $pill='true' to='/items'>
          목록으로 돌아가기
          <BackIcon />
        </BackToMarketPageLink>
      </Container>
    </>
  )
}

export default ItemPage
