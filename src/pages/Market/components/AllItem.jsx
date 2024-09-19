import React, { useState,useEffect, useCallback } from 'react';
import SearchIcon from '../../../assets/images/searchicon.png';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api/itemApi';

const getPageSize = () => {
    const width = window.innerWidth;
    if(width < 767) {
        return 4;
    } else if (width < 1280) {
        return 6;
    } else {
        return 10;
    }
};

function AllItem() {
    const [itemList, setItemList] = useState([]);
    const [pageSize, setPageSize] = useState(getPageSize());
    const [order, setOrder] = useState('recent');
    const [isdropdownOpen, setIsDropdownOpen] = useState(false);

    const handleNewestClick = () => {
        setOrder('recent');
        setIsDropdownOpen(false);
    };

    const handleFavoriteClick = () => {
        setOrder('favorite');
        setIsDropdownOpen(false);
    };

    const fetchSortedData = useCallback(async () => {
        const products = await getProducts({ orderBy:order, pageSize});
        setItemList(products.list);
    },[order, pageSize]);
    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };
        window.addEventListener("resize",handleResize);
        fetchSortedData();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[fetchSortedData])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isdropdownOpen);
    };

    return (
        <div className="allitem">
            <div className="allitem-container">
                <div className="allitem-header">
                    <h3 className='list-title'>전체 상품</h3>
                    <div className="allitem-header-right">
                        <div className="search-container">
                            <img className="search-icon" src={SearchIcon} alt="검색"></img>
                            <input className='search-input' placeholder='검색할 상품을 입력해주세요'></input>
                        </div>
                        <Link className="additem-button" to="/additem">상품 등록하기</Link>
                        <div className="dropdown-container">
                            <button className="dropdown-button" onClick={toggleDropdown}>
                                {order === 'recent' ? '최신순' : '인기순'} <span className="dropdown-arrow">▼</span>
                            </button>
                            <ul className={`dropdown-menu ${isdropdownOpen ? 'show' : ''}`}>
                                <li className="dropdown-option" onClick={handleNewestClick}>최신순</li>
                                <li className="dropdown-option" onClick={handleFavoriteClick}>좋아요순</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-list">
                    {itemList?.map((item) => (
                            <ItemCard key={item.id} item={item}/>
                        ))}
                </div>
                
            </div>
        </div>
    )
}

export default AllItem;