import styles from "./Review.module.css";
import Icon from "./Icon";
import Stars from "./Stars";

// Extract "review" from the props argument
function Review({ review }) {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.clientReview}>
        <span>{review.username}</span>
        <Stars rating={review.rating}></Stars>
      </div>
      <p>{review.description}</p>
    </div>
  );
}

export default Review;
