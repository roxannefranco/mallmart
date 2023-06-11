import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Logo></Logo>
        <span>All rights reserved @ 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
