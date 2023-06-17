import styles from "./Footer.module.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContacts}>
          <div>Got a question?</div>
          <Link to="/contacts">
            <span>Contact us</span>
          </Link>
        </div>

        <span>All rights reserved @ 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
