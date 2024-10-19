import './AddItemPage.css';
import ItemForm from '../components/item/ItemForm';

function AddItemPage() {
  return (
    <main className="AddItemPage">
      <div className="max-container">
        <ItemForm />
      </div>
    </main>
  );
}

export default AddItemPage;
