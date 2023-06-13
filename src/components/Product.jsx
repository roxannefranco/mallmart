import styles from "./Product.module.css";
import Icon from "./Icon";
import { Link } from "react-router-dom";

function Product(props) {
  const product = props.product;

  // checks if prices are diferent and if so means it has discount
  const hasDiscount = product.price != product.discountedPrice;
  // percentage calculation
  const percentage = Math.round(
    ((product.price - product.discountedPrice) * 100) / product.price
  );

  return (
    <Link to={"/product/" + product.id} className={styles.card}>
      {hasDiscount ? (
        <div className={styles.percentage}>-{percentage}%</div>
      ) : null}

      {/*show rating if its not 0*/}
      {product.rating > 0 ? (
        <div className={styles.rating}>
          {product.rating}
          <Icon name="star"></Icon>
        </div>
      ) : null}

      <div className={styles.imgContainer}>
        <div>
          <span>View product</span>
        </div>
        <img src={product.imageUrl} alt="{product.title}" />
      </div>

      <div className={styles.textBox}>
        <h2>{product.title}</h2>
        <p className={styles.description}>
          <span>{product.description}</span>
        </p>
        {hasDiscount ? (
          <p className={`${styles.price} ${styles.discountedPrice}`}>
            {product.discountedPrice} kr
            <span>{product.price} kr</span>
          </p>
        ) : (
          <p className={styles.price}>{product.price} kr</p>
        )}
      </div>
    </Link>
  );
}

export default Product;
