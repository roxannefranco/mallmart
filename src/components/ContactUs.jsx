import styles from "./ContactUs.module.css";
import { Link } from "react-router-dom";
import Icon from "./Icon";

function ContactUs() {
  return (
    <Link to="/contacts">
      <div className={styles.buttonContainer}>
        <div className={styles.contactButton}>
          <Icon name="message"></Icon>
          <span>Contact us</span>
        </div>
      </div>
    </Link>
  );
}

export default ContactUs;
