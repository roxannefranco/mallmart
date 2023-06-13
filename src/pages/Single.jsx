import styles from "./Single.module.css";
import Layout from "../components/Layout";
import Stars from "../components/Stars";
import Review from "../components/Review";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrl } from "../configs/api";

function Single() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [hasDiscount, setDiscount] = useState(false);

  // fetch single product
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`${apiUrl}/${id}`);
      const json = await response.json();

      setProduct(json);
    };

    getProduct();
    // since array of dependencies is empty it runs once
  }, [id]);

  useEffect(() => {
    if (product != null) {
      document.title = `Mallmart - ${product.title}`;

      // checks if prices are diferent and if so means it has discount
      const d = product.price != product.discountedPrice;
      // percentage calculation
      const p = Math.round(
        ((product.price - product.discountedPrice) * 100) / product.price
      );

      setPercentage(p);
      setDiscount(d);
    }
  }, [product]);

  return (
    <Layout>
      {product != null ? (
        <div className={styles.container}>
          <div className={styles.image}>
            <img
              src={product.imageUrl}
              alt="{product.title}"
              className={styles.singleImage}
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{product.title}</h1>
            <span className={styles.description}>{product.description}</span>

            <div className={styles.priceContainer}>
              {hasDiscount ? (
                <div className={`${styles.price} ${styles.discountedPrice}`}>
                  {product.discountedPrice} kr
                  <span className={styles.percentage}>-{percentage}%</span>
                  <span className={styles.old}>{product.price} kr</span>
                </div>
              ) : (
                <p className={styles.price}>{product.price} kr</p>
              )}
            </div>

            <button className={styles.buttonMain}>Add to cart</button>
            <div className={styles.reviews}>
              <div className={styles.rating}>{product.rating}</div>
              <div>
                <Stars rating={product.rating} avg={true}></Stars>
                <div>{product.reviews.length} reviews</div>
              </div>
            </div>

            {product.reviews.map((review, index) => {
              return <Review key={index} review={review}></Review>;
            })}
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </Layout>
  );
}

export default Single;
