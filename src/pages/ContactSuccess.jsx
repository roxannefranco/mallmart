import styles from "./Success.module.css";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

function ContactSuccess() {
  // Change title
  useEffect(() => {
    document.title = "Mallmart - Success";
  }, []);

  return (
    <Layout>
      <div className={styles.successWrapper}>
        <Icon name="check"></Icon>
        <h1 className={styles.title}>Success! Your message has been sent.</h1>
        <div className={styles.order}>
          We will reply as quickly as possible.
        </div>
        <Link to="/" className={styles.firstButton}>
          Back to shop
        </Link>
      </div>
    </Layout>
  );
}

export default ContactSuccess;
