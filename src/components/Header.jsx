import styles from "./Header.module.css";
import Icon from "./Icon";
import Logo from "./Logo";

function Header() {
  return (
    <header className={styles.header}>
      <Icon name="search"></Icon>
      <Logo></Logo>
      <Icon name="cart"></Icon>
    </header>
  );
}

export default Header;
