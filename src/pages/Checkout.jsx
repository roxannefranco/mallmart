import styles from "./Checkout.module.css";
import { useEffect } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useAtom } from "jotai";
import { cartAtom } from "../cart/atoms";

function Checkout() {
  // global state
  const [cart, setCart] = useAtom(cartAtom);

  // Change title
  useEffect(() => {
    document.title = "Mallmart - Checkout";
  }, []);

  return (
    <Layout>
      <div className={styles.checkoutWrapper}>
        <div className={styles.headTitle}>
          <Logo></Logo>
          <h1 className={styles.title}>Checkout</h1>
        </div>
        <div className={styles.shippingDetails}>SHIPPING DETAILS</div>

        <div className={styles.shippingContainer}>
          <div className={styles.info}>Roxanne Franco</div>
          <div className={styles.info}>Olanordmansveg 123</div>
          <div className={styles.info}>5252 Sandsli</div>
          <div className={styles.info}>Norway</div>
        </div>

        <div className={styles.paymentDetails}>PAYMENT DETAILS</div>
        <div>
          <input
            className={styles.infoCard}
            placeholder="4534 5555 5555 5555"
          />
        </div>
        <div className={styles.cardInfo}>
          <input
            className={`${styles.infoCard} ${styles.date}`}
            placeholder="06/28"
          />
          <input
            className={`${styles.infoCard} ${styles.code}`}
            placeholder="123"
          />
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
        <Link to="/success" className={styles.firstButton}>
          Confirm and pay
        </Link>
      </div>
    </Layout>
  );
}

export default Checkout;
