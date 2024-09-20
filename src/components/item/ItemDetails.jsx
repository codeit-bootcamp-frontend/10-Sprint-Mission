import { useEffect, useState } from 'react';
import { getItem } from '../../services/itemApi';
import './ItemDetails.css';
import Favorite from './Favorite';

export default function ItemDetails({ itemId }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const result = await getItem(itemId);
      setItem(result);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div>
      <Favorite favoriteCount={item.favoriteCount} />
    </div>
  );
}
