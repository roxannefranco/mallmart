import styles from "./Header.module.css";
import Icon from "./Icon";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Icon name="search"></Icon>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Link to="/cart">
        <Icon name="cart"></Icon>
      </Link>
    </header>
  );
}

export default Header;
