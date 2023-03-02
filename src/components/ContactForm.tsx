import { FunctionComponent } from "react";
import styles from "./ContactForm.module.css";

const ContactForm: FunctionComponent = () => {
  return (
    <div className={styles.contactMeParent}>
      <div className={styles.contactMe}>Contact Me</div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.nameParent}>
            <div className={styles.name}>Name</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.nameParent}>
            <div className={styles.name}>Email Address</div>
            <input
              className={styles.email1}
              type="text"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className={styles.messageParent}>
          <div className={styles.name}>Message</div>
          <textarea
            className={styles.email2}
            placeholder="Enter your message"
          />
        </div>
      </div>
      <div className={styles.searchFlightsButtonParent}>
        <button className={styles.searchFlightsButton}>
          <div className={styles.button}>Send message</div>
        </button>
        <div className={styles.wrapper}>
          <div className={styles.div}>+49 1621609196</div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
