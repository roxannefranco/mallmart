import styles from "./ProductMini.module.css";
import { Link } from "react-router-dom";

function ProductMini(props) {
  const product = props.product;
  return (
    <Link to="/product" className={styles.cardMini}>
      <img src={product.imageUrl} alt="product image" />
      <div className={styles.textBox}>
        <h2>{product.title}</h2>
        <p className={styles.description}>
          <span>{product.description}</span>
        </p>
      </div>
    </Link>
  );
}

export default ProductMini;
