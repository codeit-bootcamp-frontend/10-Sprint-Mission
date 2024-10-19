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

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    images: string[];
    ownerId: number;
    ownerNickname: string;
    favoriteCount: number;
    createdAt: string;
}

interface ItemList {
    totalCount: number;
    list: Item[];
}

function BestItem() {
    const [itemList, setItemList] = useState<ItemList>({ totalCount: 0, list: [] });
    const [pageSize, setPageSize] = useState(getPageSize());

    const fetchSortedData = useCallback(async () => {
        try {
            const products = await getProducts({ orderBy: "favorite", pageSize });
            setItemList(products); 
        } catch (error) {
            console.error('Error fetching best products:', error);
        }
    }, [pageSize]);

    useEffect(() => {
        fetchSortedData(); 
    }, [fetchSortedData]);

    useEffect(() => {
        const handleResize = () => {
            const newPageSize = getPageSize();
            if (newPageSize !== pageSize) {
                setPageSize(newPageSize);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [pageSize]);

    return (
        <div className={styles.bestItem}>
            <div className={styles.bestItemContainer}>
                <h3 className={styles.listTitle}>베스트 상품</h3>
                <div className={styles.cardList}>
                    {itemList.list.map((item) => (
                        <ItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestItem;