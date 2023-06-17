import styles from "./Cart.module.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { cartAtom } from "../cart/atoms";

function Cart() {
  // global state
  const [cart, setCart] = useAtom(cartAtom);

  // Change title
  useEffect(() => {
    document.title = "Mallmart - My Cart";
  }, []);

  // Remove one item at a time
  const removeItem = (index) => {
    const cartClone = cart.slice();

    if (cartClone[index].quantity > 1) {
      cartClone[index].quantity--;
    } else {
      cartClone.splice(index, 1);
    }

    setCart(cartClone);
  };

  return (
    <Layout>
      <div className={styles.cartWrapper}>
        <div className={styles.headTitle}>
          <Logo></Logo>
          <h1 className={styles.title}>My cart</h1>
        </div>
        {cart.length ? (
          <div>
            <div>
              {cart.map((product, index) => {
                return (
                  <div key={index} className={styles.cartItems}>
                    <img src={product.imageUrl} alt={product.title} />
                    <div className={styles.details}>
                      <h2>{product.title}</h2>
                      <div className={styles.priceDelete}>
                        <span className={styles.quantity}>
                          {product.quantity} x
                        </span>
                        {product.discountedPrice != product.price ? (
                          <span
                            className={`${styles.price} ${styles.discountedPrice}`}
                          >
                            {product.discountedPrice} kr
                            <span>{product.price} kr</span>
                          </span>
                        ) : (
                          <span className={styles.price}>
                            {product.price} kr
                          </span>
                        )}
                        <div
                          className={styles.trash}
                          onClick={() => removeItem(index)}
                        >
                          <Icon name="trash"></Icon>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.total}>
              <div className={styles.totalDetails}>
                <div className={styles.shipping}>Shipping</div>
                <div className={styles.shipping}>Discount</div>
                <div className={styles.grandTotal}>TOTAL</div>
              </div>
              <div className={styles.totalValues}>
                <div className={styles.shipping}>FREE</div>
                <div className={styles.discount}>
                  -
                  {cart
                    .reduce((totalDiscount, product) => {
                      if (product.discountedPrice != product.price) {
                        // has discount
                        return (
                          totalDiscount +
                          product.quantity *
                            (product.price - product.discountedPrice)
                        );
                      } else {
                        // no discout
                        return totalDiscount;
                      }
                    }, 0)
                    .toFixed(2)}{" "}
                  kr
                </div>
                <div className={styles.grandTotal}>
                  {cart
                    .reduce((totalPrice, product) => {
                      return (
                        totalPrice + product.quantity * product.discountedPrice
                      );
                    }, 0)
                    .toFixed(2)}{" "}
                  kr
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <Link to="/checkout" className={styles.firstButton}>
                Proceed to checkout
              </Link>
              <Link to="/" className={styles.secondButton}>
                Keep shopping
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.empty}>Your cart is empty.</div>
            <Link to="/" className={styles.secondButton}>
              Keep shopping
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
