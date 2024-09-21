import React, { useState, useEffect, useCallback } from 'react';
import SearchIcon from '../../../assets/images/searchicon.png';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api/itemApi';
import styles from '../Market.module.css';

const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 767) {
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleNewestClick = () => {
        setOrder('recent');
        setIsDropdownOpen(false);
    };

    const handleFavoriteClick = () => {
        setOrder('favorite');
        setIsDropdownOpen(false);
    };

    const fetchSortedData = useCallback(async () => {
        const products = await getProducts({ orderBy: order, pageSize });
        setItemList(products.list);
    }, [order, pageSize]);

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };
        window.addEventListener('resize', handleResize);
        fetchSortedData();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [fetchSortedData]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.allItem}>
            <div className={styles.allItemContainer}>
                <div className={styles.allItemHeader}>
                    <h3 className={styles.listTitle}>전체 상품</h3>
                    <div className={styles.allItemHeaderRight}>
                        <div className={styles.searchContainer}>
                            <img className={styles.searchIcon} src={SearchIcon} alt="검색" />
                            <input className={styles.searchInput} placeholder="검색할 상품을 입력해주세요" />
                        </div>
                        <Link className={styles.addItemButton} to="/addItem">상품 등록하기</Link>
                        <div className={styles.dropdownContainer}>
                            <button className={styles.dropdownButton} onClick={toggleDropdown}>
                                {order === 'recent' ? '최신순' : '인기순'} <span className={styles.dropdownArrow}>▼</span>
                            </button>
                            <ul className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.show : ''}`}>
                                <li className={styles.dropdownOption} onClick={handleNewestClick}>최신순</li>
                                <li className={styles.dropdownOption} onClick={handleFavoriteClick}>좋아요순</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.cardList}>
                    {itemList?.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllItem;
