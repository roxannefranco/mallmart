import styles from "./Checkout.module.css";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Checkout() {
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
            <div className={styles.discount}>-80 kr</div>
            <div className={styles.grandTotal}>1600 kr</div>
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
