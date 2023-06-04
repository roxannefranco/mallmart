import styles from "./SearchBox.module.css";
import Icon from "./Icon";

function SearchBox() {
  return (
    <div className={styles.searchInput}>
      <Icon name="search"></Icon>
      <input placeholder="Start typing to search..." />
    </div>
  );
}

export default SearchBox;
