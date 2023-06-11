import styles from "./Stars.module.css";
import Icon from "./Icon";

function Stars({ rating, avg }) {
  const frontStars = [];

  // Always loops 5 times (for each star position)
  for (let i = 0; i <= 4; i++) {
    // checks if the rating is less than the star position I'm trying to draw
    // and if the rating is bigger than last position
    // meaning is in the middle, so, I display half a star
    if (rating < i + 1 && rating > i) {
      frontStars.push(<Icon key={i} name="half-star"></Icon>);

      // Checks if rating is bigger than the star position I'm trying to draw
      // and if it is, means that I can display a full star
    } else if (rating >= i + 1) {
      frontStars.push(<Icon key={i} name="star"></Icon>);
    }
  }

  // Checks if avg is defined and its true to display different colors
  const colorStyle = avg != null && avg == true ? styles.avg : "";

  return (
    <div className={`${styles.stars} ${colorStyle}`} data-rating={rating}>
      <div className={styles.bgStars}>
        <Icon name="star"></Icon>
        <Icon name="star"></Icon>
        <Icon name="star"></Icon>
        <Icon name="star"></Icon>
        <Icon name="star"></Icon>
      </div>
      <div className={styles.frontStars}>
        {frontStars.map((star) => {
          return star;
        })}
      </div>
    </div>
  );
}

export default Stars;
