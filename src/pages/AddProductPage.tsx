import AddProductForm from "features/AddProduct/components/AddProductForm";
import styles from "./AddProductPage.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.wrapper}>
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;
