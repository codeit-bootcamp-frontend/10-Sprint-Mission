import { Link } from 'react-router-dom';
import styles from './AllProductsHeader.module.css';
import { ReactComponent as SearchIcon } from 'assets/imgs/ic_search.svg';
import { ReactComponent as DropdownArrowDown } from 'assets/imgs/ic_arrow_down.svg';
import { ReactComponent as SortIcon } from 'assets/imgs/ic_sort.svg';
import React from 'react';

interface AllProductsHeaderProps {
  responsiveAllProductCount: number;
  isDropdown?: boolean;
  setIsDropdown: (value: boolean) => void;
  sortProduct?: string;
  setSortProduct: (value: string) => void;
}

const AllProductsHeader: React.FC<AllProductsHeaderProps> = ({
  responsiveAllProductCount,
  isDropdown = false,
  setIsDropdown,
  sortProduct = '최신순',
  setSortProduct,
}) => {

  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <h4>전체 상품</h4>
        <div className={styles['search-container']}>
          <div className={styles['search-box']}>
            <SearchIcon className={styles['search-icon']} />
            <input className={styles['search-input']} type="text" placeholder="검색할 상품을 입력해주세요" />
          </div>
          <Link to='/additem'><button className={styles['search-button']}>상품 등록하기</button></Link>
          <div className={styles['search-dropdown']}>
            <span
              className={styles['search-dropdown-selected']}
              onClick={() => { setIsDropdown(!isDropdown) }}
            >
              {
                responsiveAllProductCount !== 4 ? (
                  <>
                    {sortProduct}
                    <DropdownArrowDown
                      width={'24px'}
                      height={'24px'}
                      style={{
                        transition: 'transform 0.3s ease-out',
                        transform: isDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </>)
                  :
                  <SortIcon className={styles['sort-icon']} />
              }

            </span>
            {
              isDropdown &&
              <ul className={styles['search-dropdown-list']}>
                <li onClick={() => { setSortProduct('최신순'); setIsDropdown(!isDropdown) }}>최신순</li>
                <li onClick={() => { setSortProduct('좋아요순'); setIsDropdown(!isDropdown) }}>좋아요순</li>
              </ul>
            }
          </div>
        </div>
      </div>
    </div>

  );
};

export default AllProductsHeader;
