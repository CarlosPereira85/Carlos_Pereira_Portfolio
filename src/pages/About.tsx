import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onFrameContainer6Clickcontact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <img className={styles.vectorIcon} alt="" src="../vector12.svg" />
    <Navbar/>
      <div className={styles.menu}>
        <img className={styles.vectorIcon1} alt="" />
        <img className={styles.vectorIcon2} alt="" src="../vector13.svg" />
      </div>
      <b className={styles.easySteps}>About Me</b>
      <p className={styles.dynamicAndTeamOrientedContainer}>
        <span className={styles.dynamicAndTeamOriented}>
          Dynamic and team-oriented, I am able to handle challenging tasks,
          accepting mistakes as part of the learning process and striving to
          achieve the final goal.
        </span>
        <span className={styles.dynamicAndTeamOriented}>&nbsp;</span>
        <span className={styles.dynamicAndTeamOriented}>
          In addition to my technical skills, I possess strong communication and
          collaboration skills that allow me to work effectively in team
          environments. I enjoy working with cross-functional teams and am
          always eager to learn new technologies and techniques.
        </span>
      </p>
      <img className={styles.cv1Icon} alt="" src="../cv-1@2x.png" />
      <img className={styles.cv1Icon1} alt="" src="../cv-11@2x.png" />
    </div>
  );
};

export default About;
