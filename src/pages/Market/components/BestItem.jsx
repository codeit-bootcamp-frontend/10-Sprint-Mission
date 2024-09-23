import React, { useState, useEffect, useCallback } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api/itemApi';
import styles from '../Market.module.css';

const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 767) {
        return 1;
    } else if (width < 1280) {
        return 2;
    } else {
        return 4;
    }
};

function BestItem() {
    const [itemList, setItemList] = useState([]);
    const [pageSize, setPageSize] = useState(getPageSize());

    const fetchSortedData = useCallback(async () => {
        const products = await getProducts({ orderBy: "favorite", pageSize });
        setItemList(products.list);
    }, [pageSize]);

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };
        window.addEventListener("resize", handleResize);
        fetchSortedData();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [fetchSortedData]);

    return (
        <div className={styles.bestItem}>
            <div className={styles.bestItemContainer}>
                <h3 className={styles.listTitle}>베스트 상품</h3>
                <div className={styles.cardList}>
                    {itemList?.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestItem;
