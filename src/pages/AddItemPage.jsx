import './AddItemPage.css';
import ItemForm from '../components/item/ItemForm';

function AddItemPage() {
  return (
    <div className="AddItemPage">
      <div className="max-container">
        <ItemForm />
      </div>
    </div>
  );
}

export default AddItemPage;
