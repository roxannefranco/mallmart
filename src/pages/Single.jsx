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
      <h1>{product.title}</h1>
    </Layout>
  );
}

export default Single;
