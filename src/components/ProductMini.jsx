import styles from "./ProductMini.module.css";
import { Link } from "react-router-dom";

function ProductMini(props) {
  const product = props.product;
  const resetBox = props.resetBox;

  return (
    <Link
      to={"/product/" + product.id}
      onClick={resetBox}
      className={styles.cardMini}
    >
      <img src={product.imageUrl} alt="{product.title}" />
      <div className={styles.textBox}>
        <h2>{product.title}</h2>
        <div className={styles.description}>
          <span>{product.description}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductMini;
