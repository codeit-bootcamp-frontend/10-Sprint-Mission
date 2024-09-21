import React from 'react'
import './ProductInfo.css';
import profileimg from '../../../../assets/images/profile.png';
import heartIcon from '../../../../assets/images/hearticon.png';

function formatDate(createdDate) {
  const date = new Date(createdDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}.${month}.${day}`;
}
function ProductInfo( { item }) {
  
  return (
    <>
      <div className='info-container'>
        <img className='product-img' src={item.images[0]} alt='제품 이미지'/>
        <div className='product-text-container'>
          <div className='product-text-box'>
            <div className='main-box'>
              <div className='name'>{item.name}</div>
              <div className='price'>{item.price.toLocaleString()}</div>
              <hr></hr>
            </div>
            <div className='sub-box'>
              <label>상품 소개</label>
              <div className='description'>
                {item.description}
              </div>
              <label>상품 태그</label>
              <div className='tag-list-container'>
                {item.tags?.map((tagItem, index) => (
                  <div className='tag'>
                    <span key={index}>#{tagItem}</span>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
          <div className='profile-container'>
              <div className='profile-box'>
                <img className='profile-img' src={profileimg} alt='프로필 이미지'></img>
                <div className='profile-text-box'>
                  <p className='username'>총명한 판다</p>
                  <p className='date'>{formatDate(item.createdAt)}</p>
                </div>
              </div>
              <div className='like-box'>
                <div>
                  <img className='hearticon' src={heartIcon} alt='좋아요아이콘'></img>
                  <p className='like-num'>{item.favoriteCount}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo