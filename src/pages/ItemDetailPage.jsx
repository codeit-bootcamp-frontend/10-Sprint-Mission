import { useParams } from 'react-router-dom';
import './ItemDetailPage.css';
import ItemDetails from '../components/item/ItemDetails';

export default function ItemDetailPage() {
  const { itemId } = useParams();

  return (
    <main className="ItemDetailPage">
      <div className="max-container">
        <ItemDetails itemId={itemId} />
      </div>
    </main>
    // <div className="ItemDetailPage">
    //   ItemDetailPage {itemId}
    //   <TagCard index="1" name="test1" />
    //   <TagCard index="2" name="test2" />
    //   <TagCard index="3" name="test3" />
    //   <PrimaryRoundButton onClick={handleReturnListOnClick}>
    //     목록으로 돌아가기
    //     <img src={returnIcon} alt="돌아가기 아이콘" />
    //   </PrimaryRoundButton>
    // </div>
  );
}
