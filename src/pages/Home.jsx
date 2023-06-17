import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Product from "../components/Product";
import Loader from "../components/Loader";
import { apiUrl } from "../configs/api";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = useState([]);

  // fetch products once
  useEffect(() => {
    // Change title
    document.title = "Mallmart";

    // first create async function
    const getProducts = async () => {
      const response = await fetch(apiUrl);
      const json = await response.json();

      setProducts(json);
    };

    // call function created above
    getProducts();
    // since array of dependencies is empty it runs once
  }, []);

  return (
    <Layout>
      {products.length ? (
        <div className="center-content">
          <div className={styles.products}>
            {products.map((product, index) => {
              return <Product key={index} product={product}></Product>;
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}{" "}
    </Layout>
  );
}

export default Home;
