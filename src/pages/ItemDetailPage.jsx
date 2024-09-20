import { useParams } from 'react-router-dom';
import './ItemDetailPage.css';

export default function ItemDetailPage() {
  const { itemId } = useParams();

  return <div className="ItemDetailPage">ItemDetailPage {itemId}</div>;
}
