import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";
import SearchBox from "../components/SearchBox";
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
      <div className="center-content">
        <SearchBox></SearchBox>
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
