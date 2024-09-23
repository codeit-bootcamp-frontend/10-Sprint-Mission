import { Link } from 'react-router-dom';
import styles from './BackButton.module.css';
import { ReactComponent as Back } from 'assets/imgs/ic_back.svg';

const BackButton = () => {
  
  return (
    <div className={styles['container']}>
      <Link to='/items'><button className={styles['back-button']}>목록으로 돌아가기<Back /></button></Link>
    </div>
  );
};
export default BackButton;