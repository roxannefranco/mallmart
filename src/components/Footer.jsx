import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo></Logo>
      <span>All rights reserved @ 2023</span>
    </footer>
  );
}

export default Footer;
