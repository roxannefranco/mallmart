import styles from "./Stars.module.css";
import Icon from "./Icon";

function Stars(props) {
  return (
    <div className={styles.stars} data-rating={Math.round(props.rating)}>
      <Icon name="star"></Icon>
      <Icon name="star"></Icon>
      <Icon name="star"></Icon>
      <Icon name="star"></Icon>
      <Icon name="star"></Icon>
    </div>
  );
}

export default Stars;
