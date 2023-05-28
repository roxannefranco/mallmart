import styles from "./Header.module.css";
import Icon from "./Icon";

function Header() {
  return (
    <header className={styles.header}>
      <Icon name="search"></Icon>

      <Icon name="cart"></Icon>
    </header>
  );
}

export default Header;
