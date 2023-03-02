import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.skillsParent}>
      <div className={styles.skills}>Skills</div>
    </div>
  );
};

export default FrameComponent2;
