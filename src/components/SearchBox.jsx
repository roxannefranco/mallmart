import { useEffect, useState } from "react";
import styles from "./SearchBox.module.css";
import Icon from "./Icon";
import { apiUrl } from "../configs/api";
import ProductMini from "./ProductMini";

function SearchBox() {
  const [products, setProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [term, setTerm] = useState("");

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

  useEffect(() => {
    if (term.length) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [term]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInput}>
        <Icon name="search"></Icon>
        {/* changes state when input value changes */}
        <input
          placeholder="Start typing to search..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      {/** if open display */}
      {isOpen ? (
        <div className={styles.dropDown}>
          <ul>
            <li>
              {products
                .filter((product) => {
                  return (
                    product.title.toLowerCase().includes(term.toLowerCase()) ||
                    product.description
                      .toLowerCase()
                      .includes(term.toLowerCase())
                  );
                })
                .map((product, index) => {
                  return (
                    <ProductMini
                      key={index}
                      product={product}
                      resetBox={() => setTerm("")}
                    ></ProductMini>
                  );
                })}
            </li>
          </ul>
        </div>
      ) : null}
      {/* same as else */}
    </div>
  );
}

export default SearchBox;
