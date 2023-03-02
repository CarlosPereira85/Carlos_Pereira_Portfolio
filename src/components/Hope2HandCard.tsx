import { FunctionComponent, useCallback } from "react";
import styles from "./Hope2HandCard.module.css";

const Hope2HandCard: FunctionComponent = () => {
  const onFrameContainer37Click = useCallback(() => {
    window.open("https://hope2hand.netlify.app/");
  }, []);

  const onFrameContainer39Click = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/Hope2Hand_Final_Project");
  }, []);

  return (
    <div className={styles.hope1Parent}>
      <img className={styles.hope1Icon} alt="" src="../hope-1@2x.png" />
      <div style={{  display:"flex"  }}>
      <div className={styles.hope2handParent}>
        <div className={styles.hope2hand}>Hope2Hand</div>
        <div className={styles.hope2handWasThe}>
          Hope2Hand was the final graduation project of the 1 year course run by
          DCI. It was great, I learned a lot.
        </div>
        <div className={styles.techStackContainer}>
          <span>Tech stack :</span>
          <span className={styles.reactJavascript}>
            {" "}
            React , JavaScript, Figma, Locofy, MongoDB, Node express / MERN
          </span>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent}>
            <div
              className={styles.groupParent}
              onClick={onFrameContainer37Click}
            >
              <img className={styles.groupIcon} alt="" src="../group1.svg" />
              <div className={styles.livePreview}>Live Preview</div>
            </div>
            <div
              className={styles.frameGroup}
              onClick={onFrameContainer39Click}
            >
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector5.svg"
                />
              </div>
              <div className={styles.livePreview}>View Code</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hope2HandCard;
