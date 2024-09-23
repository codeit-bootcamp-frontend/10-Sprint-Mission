import { useEffect, useState } from 'react';
import './ItemDetails.css';
import { getItem } from '../../services/itemApi';
import Favorite from './Favorite';
import { formatNumberWithCommas } from '../../utils/numberFormat';
import TagCard from './TagCard';
import avatar from '../../assets/avatar.svg';
import { formatDateWithDot } from '../../utils/dateFormat';

export default function ItemDetails({ itemId }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchItem = async () => {
      const result = await getItem(itemId);
      setItem(result);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="ItemDetails">
      {item && (
        <>
          <div>
            <img className="item-img" src={item.images[0]} alt={item.name} />
          </div>
          <div className="item-info-container">
            <div className="item-info-wrapper">
              <section className="item-title">
                <h2 className="item-name">{item.name}</h2>
                <p className="item-price">
                  {formatNumberWithCommas(item.price)}원
                </p>
              </section>
              <section className="item-content">
                <h4>상품소개</h4>
                <p>{item.description}</p>
              </section>
              {item.tags.length && (
                <section className="item-tags">
                  <h4>상품태그</h4>
                  <div className="item-tags-wrapper">
                    {item.tags.map((tag, index) => (
                      <TagCard key={index} name={tag} />
                    ))}
                  </div>
                </section>
              )}
              <section className="item-etc">
                <div className="item-etc-wrapper">
                  <div className="item-etc-left">
                    <img src={avatar} alt="아바타" />
                    <div>
                      <p className="item-owner-name">총명한 판다</p>
                      <span className="item-created-at">
                        {formatDateWithDot(item.createdAt)}
                      </span>
                    </div>
                  </div>
                  <Favorite favoriteCount={item.favoriteCount} />
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
