import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ProductDetail.css';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { getProductDetail } from '../../api/itemApi';

function ProductDetail() {
  
 
  return (
    <>
      <Header />
      <div className="product">
        <div className="content-container">
          <ProductInfo />
        </div>
      </div>
    </>
    
  )
}

export default ProductDetail;