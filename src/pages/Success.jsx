import styles from "./Success.module.css";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

function Success() {
  return (
    <Layout>
      <div className={styles.successWrapper}>
        <Icon name="check"></Icon>
        <h1 className={styles.title}>Success! Your order has been placed.</h1>
        <div className={styles.order}>Your order number is XX000.</div>
        <div className={styles.order}>
          Tracking information has been sent to your e-mail.
        </div>
        <Link to="/" className={styles.firstButton}>
          Back to shop
        </Link>
      </div>
    </Layout>
  );
}

export default Success;
