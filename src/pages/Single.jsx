import styles from "./Single.module.css";
import Layout from "../components/Layout";
import Stars from "../components/Stars";
import Review from "../components/Review";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiUrl } from "../configs/api";
import { useAtom } from "jotai";
import { cartAtom } from "../cart/atoms";
import ContactUs from "../components/ContactUs";

function Single() {
  const { id } = useParams();

  // global state
  const [cart, setCart] = useAtom(cartAtom);

  // local state
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

  const addToCart = () => {
    // check if product is already in cart
    const inCart = cart.find((p) => {
      return p.id == product.id;
    });

    // if not in cart
    if (!inCart) {
      const currentProduct = product;
      currentProduct.quantity = 1;
      setCart([...cart, currentProduct]);
    }
    // if in cart
    else {
      const cartClone = cart.slice();
      const cartProductIndex = cartClone.findIndex((p) => {
        return p.id == product.id;
      });

      // Add one more to quantity
      inCart.quantity++;
      cartClone[cartProductIndex] = inCart;
      setCart(cartClone);
    }
  };

  return (
    <Layout>
      {product != null ? (
        <div className={styles.container}>
          <div className={styles.image}>
            <img
              src={product.imageUrl}
              alt={product.title}
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

            <button className={styles.buttonMain} onClick={addToCart}>
              Add to cart
            </button>
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
        <Loader />
      )}
      <ContactUs></ContactUs>
    </Layout>
  );
}

export default Single;
