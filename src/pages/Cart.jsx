import styles from "./Cart.module.css";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Layout>
      <div className={styles.cartWrapper}>
        <div className={styles.headTitle}>
          <Logo></Logo>
          <h1 className={styles.title}>My cart</h1>
        </div>
        <div>
          <div className={styles.cartItems}>
            <img
              src="https://api.noroff.dev/images/online-shop/1-perfume-white.jpg"
              alt=""
            />
            <div className={styles.details}>
              <h2>Vanilla Perfume</h2>
              <div className={styles.priceDelete}>
                <span>2 x</span>
                <span>800 kr</span>
                <Icon name="trash"></Icon>
              </div>
            </div>
          </div>
          <div className={styles.cartItems}>
            <img
              src="https://api.noroff.dev/images/online-shop/1-perfume-white.jpg"
              alt=""
            />
            <div className={styles.details}>
              <h2>Vanilla Perfume</h2>
              <div className={styles.priceDelete}>
                <span>2 x</span>
                <span>800 kr</span>
                <Icon name="trash"></Icon>
              </div>
            </div>
          </div>
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
        <div className={styles.buttons}>
          <Link to="/checkout" className={styles.firstButton}>
            Proceed to checkout
          </Link>
          <Link to="/" className={styles.secondButton}>
            Keep shopping
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
