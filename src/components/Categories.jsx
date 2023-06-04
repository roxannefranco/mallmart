import styles from "./Categories.module.css";
import { apiUrl } from "../configs/api";

function Categories(props) {
  const items = props.items;

  // get all tags
  let tags = [];

  // push all tags from all products into tags variable
  items.map((item) => {
    tags = [...tags, ...item.tags];
  });

  // remove duplicates https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
  tags = [...new Set(tags)];

  return (
    <ul className={styles.tags}>
      <button>All</button>
      {tags.map((tag, index) => {
        // https://flexiple.com/javascript/javascript-capitalize-first-letter/
        return (
          <li key={index}>
            <button>{tag.charAt(0).toUpperCase() + tag.slice(1)}</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
