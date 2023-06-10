import styles from "./Review.module.css";
import Icon from "./Icon";
import Stars from "./Stars";

function Review(props) {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.clientReview}>
        <span>{props.review.username}</span>
        <Stars></Stars>
      </div>
      <p>{props.review.description}</p>
    </div>
  );
}

export default Review;
