import styles from "./Header.module.css";
import Icon from "./Icon";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useAtom } from "jotai";
import { cartAtom } from "../cart/atoms";

function Header() {
  // global state
  const [cart, setCart] = useAtom(cartAtom);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <div className={styles.searchCart}>
          <SearchBox></SearchBox>
          <Link to="/cart" className={styles.cartLink}>
            <span>
              {cart.length
                ? `(${cart.reduce((sumTotal, product) => {
                    return sumTotal + product.quantity;
                  }, 0)})`
                : null}
            </span>
            <Icon name="cart"></Icon>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
