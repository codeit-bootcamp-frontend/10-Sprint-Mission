import React from 'react'
import { getProducts } from '../../../../api/itemApi';
import './ProductInfo.css';
import img from '../../../../assets/images/itemimg.png';
import profileimg from '../../../../assets/images/profile.png';
import heartIcon from '../../../../assets/images/hearticon.png';
function ProductInfo( { item }) {
  return (
    <>
      <div className='info-container'>
        <img className='product-img' src={img} alt='제품 이미지'/>
        <div className='product-text-container'>
          <div className='product-text-box'>
            <div className='main-box'>
              <div className='name'>아이패드 미니 팔아요</div>
              <div className='price'>50000원</div>
              <hr></hr>
            </div>
            <div className='sub-box'>
              <label>상품 소개</label>
              <div className='description'>
                액정에 잔기스랑 주변부 스크래치있습니다만
                예민하신분아니면 전혀 신경쓰이지않을정도입니다.
                박스 보관중입니다.
                메모용과 넷플릭스용으로만쓰던거라 뭘 해보질 않아 기능이나 문제점을 못느꼈네요
                잘 안써서 싸게넘깁니다!
                택배거래안합니다.
              </div>
              <label>상품 태그</label>
              <div className='tag-list-container'>
                <div className='tag'>
                  <span>#아이패드미니</span>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-container'>
              <div className='profile-box'>
                <img className='profile-img' src={profileimg} alt='프로필 이미지'></img>
                <div className='profile-text-box'>
                  <p className='username'>총명한 판다</p>
                  <p className='date'>2024.01.02</p>
                </div>
              </div>
              <div className='like-box'>
                <div>
                  <img className='hearticon' src={heartIcon} alt='좋아요아이콘'></img>
                  <p className='like-num'>123</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo