import React from 'react'
import Header from '../../components/Header/Header';
import './AddItem.css';
import ProductForm from './components/ProductForm/ProductForm';


function AddItem() {
  

  
  return (
    <>
      <Header />
      <div className="addItem">
        <div className="content-container">
          <div className="title">상품 등록하기</div>
          <ProductForm />
        </div>
      </div>
    </>
    
  )
}

export default AddItem;