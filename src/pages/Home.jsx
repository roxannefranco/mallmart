import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";
import Categories from "../components/Categories";
import { apiUrl } from "../configs/api";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = useState([]);

  // fetch products once
  useEffect(() => {
    // first create async function
    const getProducts = async () => {
      const response = await fetch(apiUrl);
      const json = await response.json();

      setProducts(json);
    };

    // call function created above
    getProducts();
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <div className={styles.categoriesProducts}>
        <div className={styles.categories}>
          <Categories items={products}></Categories>
        </div>
        <div className={styles.products}>
          {products.map((product, index) => {
            return <Product key={index} product={product}></Product>;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
