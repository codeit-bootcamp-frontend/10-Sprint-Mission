import React from 'react'
import Header from '../../components/Header/Header';
import BestItem from './components/BestItem';
import AllItem from './components/AllItem';
import styles from './Market.module.css';

function Market() {
  return (
    <>
        <Header />
        <BestItem />
        <AllItem />
    </>
        
  )
}

export default Market;