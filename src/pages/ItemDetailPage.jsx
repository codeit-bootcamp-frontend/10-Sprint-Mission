import { useNavigate, useParams } from 'react-router-dom';
import './ItemDetailPage.css';
import ItemDetails from '../components/item/ItemDetails';
import Enquiry from '../components/item/Enquiry';
import PrimaryRoundButton from '../components/PrimaryRoundButton';
import returnIcon from '../assets/ic_return.svg';
import Comments from '../components/item/Comments';

export default function ItemDetailPage() {
  const { itemId } = useParams();
  const nav = useNavigate();

  const handleReturnListOnClick = () => {
    nav('/items');
  };

  return (
    <main className="ItemDetailPage">
      <div className="max-container">
        <ItemDetails itemId={itemId} />
        <Enquiry />
        <Comments itemId={itemId} />
        <div className="return-btn-wrapper">
          <PrimaryRoundButton onClick={handleReturnListOnClick}>
            목록으로 돌아가기
            <img src={returnIcon} alt="돌아가기 아이콘" />
          </PrimaryRoundButton>
        </div>
      </div>
    </main>
  );
}
