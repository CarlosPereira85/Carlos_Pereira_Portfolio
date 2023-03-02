import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.contactParent}>
      <div className={styles.contact}>Contact</div>
    </div>
  );
};

export default FrameComponent;
