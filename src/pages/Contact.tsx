import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import styles from "./Contact.module.css";
import Navbar from "../components/Navbar";

const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    window.open("https://github.com/CarlosPereira85");
  }, []);

  const onEntypoSociallinkedinWithCiIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/carlos-pereira-0b847b235/");
  }, []);

  const onLeftContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
    <Navbar/>
    <div className={styles.contact}>
      <div className={styles.responsiveFormComponentParent}>
        <div className={styles.responsiveFormComponent}>
          <div className={styles.contactParent}>
            <div className={styles.contact1}>Contact</div>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="../vector10.svg"
                onClick={onVectorIconClick}
              />
              <img
                className={styles.entypoSociallinkedinWithCiIcon}
                alt=""
                src="../entyposociallinkedinwithcircle.svg"
                onClick={onEntypoSociallinkedinWithCiIconClick}
              />
            </div>
            <div className={styles.left} onClick={onLeftContainerClick}>
              <img
                className={styles.atomIconLeft}
                alt=""
                src="../atom--icon--left.svg"
              />
            </div>
          </div>
          <ContactForm />
        </div>
        <div className={styles.desktop5}>
          <img className={styles.vectorIcon1} alt="" src="../vector11.svg" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
