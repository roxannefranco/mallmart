import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import Icon from "./Icon";
import { apiUrl } from "../configs/api";
import ProductMini from "./ProductMini";

function SearchBox() {
  const [products, setProducts] = useState([]);
  const [isOpen, setOpen] = useState([]);

  // runs everytime dependencies change
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(apiUrl);
      const json = await response.json();

      setProducts(json);
    };
    getProducts();
    // since array of dependencies is empty it runs only once
  }, []);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInput}>
        <Icon name="search"></Icon>
        <input placeholder="Start typing to search..." />
      </div>
      <div className={styles.dropDown}>
        <ul>
          <li>
            {products.map((product, index) => {
              return <ProductMini key={index} product={product}></ProductMini>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBox;
