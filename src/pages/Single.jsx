import styles from "./Single.module.css";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrl } from "../configs/api";

function Single() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // fetch single product
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`${apiUrl}/${id}`);
      const json = await response.json();

      setProduct(json);
    };

    getProduct();
    // since array of dependencies is empty it runs once
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <img
          src={product.imageUrl}
          alt="{product.title}"
          className={styles.singleImage}
        />
        <div>
          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.description}>{product.description}</span>
          <p className={styles.price}>{product.price} kr</p>
          <button className={styles.buttonMain}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export default Single;
