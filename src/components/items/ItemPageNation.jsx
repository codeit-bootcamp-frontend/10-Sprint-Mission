import styles from './ItemPageNation.module.css';
import { ReactComponent as PageArrowLeft } from 'assets/imgs/arrow_left.svg';
import { ReactComponent as PageArrowRight } from 'assets/imgs/arrow_right.svg';


const ItemPageNation = ({
  pageNumber = 1,
  setPageNumber,
  totalPage = 1,
  maxVisiblePage = 5,
}) => {
  
  const getVisiblePages = () => {
    const startPage = Math.max(1, pageNumber - Math.floor(maxVisiblePage / 2));
    const endPage = Math.min(totalPage, startPage + maxVisiblePage - 1);

    if (endPage - startPage < maxVisiblePage - 1) {
      return Array.from({ length: maxVisiblePage }, (_, i) => i + startPage).filter((page) => page <= totalPage);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage);
  };


  return (
      <div className={styles['pagination']}>
        <span 
          onClick={() => setPageNumber(prev => Math.max(1, prev - 1))} 
          role="button"
          style={{ 
            cursor: pageNumber === 1 ? 'not-allowed' : 'pointer',
            opacity: pageNumber === 1 ? '0.3' : '1',
            transition: 'opacity 0.3s ease-out'
          }}
        ><PageArrowLeft /></span>
        {
          getVisiblePages().map((page) => (
            <span 
              key={page} 
              onClick={() => { setPageNumber(page) }}
              onMouseEnter={(e) => e.target.style.backgroundColor = pageNumber !== page ? '#e5e7eb' : '#2f80ed'}
              onMouseLeave={(e) => e.target.style.backgroundColor = pageNumber !== page ? '#fff' : '#2f80ed'}
              style={{
                color: pageNumber === page ? '#f9fafb' : '#6b7280', 
                backgroundColor: pageNumber === page ? '#2f80ed' : '#fff', 
                border: pageNumber === page ? '' : '1px solid #e5e7eb',
              }}
            >{page}</span>
          ))
        }
        <span 
          onClick={() => setPageNumber(prev => Math.min(totalPage, prev + 1))} 
          role="button" 
          style={{ 
            cursor: pageNumber === totalPage ? 'not-allowed' : 'pointer',
            opacity: pageNumber === totalPage ? '0.3' : '1',
            transition: 'opacity 0.3s ease-out'
          }}
        ><PageArrowRight /></span>
      </div>
  );
};
export default ItemPageNation;