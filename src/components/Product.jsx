import styles from "./Product.module.css";

function Product(props) {
  const product = props.product;
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt="product image" />
      <div className={styles.textBox}>
        <h2>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price} kr</p>
      </div>
    </div>
  );
}

export default Product;
