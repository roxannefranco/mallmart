import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function Product(props) {
  const product = props.product;
  return (
    <Link to={"/product/" + product.id} className={styles.card}>
      <img src={product.imageUrl} alt="product image" />
      <div className={styles.textBox}>
        <h2>{product.title}</h2>
        <p className={styles.description}>
          <span>{product.description}</span>
        </p>
        <p className={styles.price}>{product.price} kr</p>
      </div>
    </Link>
  );
}

export default Product;
