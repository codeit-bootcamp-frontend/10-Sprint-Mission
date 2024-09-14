import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import './AddItem.css';
import ProductImg from './components/ProductImg/ProductImg';
import ProductName from './components/ProductName/ProductName';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ProductPrice from './components/ProductPrice/ProductPrice';
import ProductTag from './components/ProductTag/ProductTag';

function AddItem() {
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState({
    imgFile:null,
    name:'',
    description:'',
    price:'',
    tags:[],
  })
  
  const isFormValid  = (values) => {
    return (values.name.trim() !== '' &&
            values.description.trim() !== '' &&
            values.price > 0 && 
            values.tags.length > 0);
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isFormValid(values)){
      return;
    }
    console.log(values);
  }
  const handleChange = (name, value) => {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
  };

  useEffect(() => {
    setIsValid(isFormValid(values));
  },[values]);
  
  return (
    <>
      <Header />
      <div className="addItem">
        <div className="content-container">
          <form onSubmit={handleSubmit}>
          <div className="title-container">
            <div className="title">상품 등록하기</div>
            <button type="submit" className="submit-button" disabled={!isValid}>등록</button>
          </div>
            <ProductImg
                name="imgFile"
                value={values.imgFile}
                onChange={handleChange} 
            />
            <ProductName 
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <ProductDescription 
                name="description"
                value={values.description}
                onChange={handleChange}
            />
            <ProductPrice 
                name="price"
                value={values.price}
                onChange={handleChange}
            />
            <ProductTag 
                name="tags"
                value={values.tags}
                onChange={handleChange}
            />
        </form>
        </div>
      </div>
    </>
    
  )
}

export default AddItem;