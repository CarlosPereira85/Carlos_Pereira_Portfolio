import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.projectsParent}>
      <div className={styles.projects}>Projects</div>
    </div>
  );
};

export default FrameComponent1;
