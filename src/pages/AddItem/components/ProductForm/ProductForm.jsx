import React from 'react'
import ProductImg from '../ProductImg/ProductImg';
import './ProductForm.css';
import { useState } from 'react';


function sanitize(type, value) {
    switch (type) {
      case 'number':
        return Number(value) || 0;
  
      default:
        return value;
    }
} 
function ProductForm() {
    const [values, setValues] = useState({
        imgFile:null,
        name:'',
        description:'',
        price:0,
        tags:[],
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }
    const handleChange = (name, value) => {
        setValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
    };
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        handleChange(name, sanitize(type, value));
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <ProductImg
                name="imgFile"
                value={values.imgFile}
                onChange={handleChange} 
            />
        </form>
        
    )
}

export default ProductForm