import React, { useState, useEffect, useCallback } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api/itemApi';

const getPageSize = () => {
    const width = window.innerWidth;
    if(width < 767) {
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
        const products = await getProducts({ orderBy:"favorite", pageSize});
        setItemList(products.list);
    },[pageSize]);
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

    return (
        <div className="bestitem">
            <div className="bestitem-container">
                <h3 className='list-title'>베스트 상품</h3>
                <div className="card-list">
                    {itemList?.map((item) => (
                        <ItemCard key={item.id} item={item}/>
                    ))}
                    
                </div>
            </div>
            
        </div>
    )
}

export default BestItem;