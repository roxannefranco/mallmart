import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { apiUrl } from "../configs/api";

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
      <Link to="/cart">Cart</Link>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h2>{product.title}</h2>
          </div>
        );
      })}
    </Layout>
  );
}

export default Home;
