import styles from "./Header.module.css";
import Icon from "./Icon";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Link to="/cart">
          <Icon name="cart"></Icon>
        </Link>
      </div>
    </header>
  );
}

export default Header;
