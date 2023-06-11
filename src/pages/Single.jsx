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

  return (
    <Layout>
      {product != null ? (
        <div className={styles.container}>
          <div>
            <img
              src={product.imageUrl}
              alt="{product.title}"
              className={styles.singleImage}
            />
          </div>
          <div className="{styles.details}">
            <h1 className={styles.title}>{product.title}</h1>
            <span className={styles.description}>{product.description}</span>
            <p className={styles.price}>{product.price} kr</p>
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
