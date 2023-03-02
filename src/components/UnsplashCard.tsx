import { FunctionComponent, useCallback } from "react";
import styles from "./UnsplashCard.module.css";

const UnsplashCard: FunctionComponent = () => {
  const onFrameContainer61Click = useCallback(() => {
    window.open("https://unsplash-jqqo.onrender.com");
  }, []);
  const onFrameContainer61Clickgit = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/Unsplash");
  }, []);

  return (
    <div className={styles.unsplash1Parent}>
      <img className={styles.unsplash1Icon} alt="" src="../unsplash-1@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.unsplashParent}>
          <div className={styles.unsplash}>Unsplash</div>
          <div className={styles.anotherGoodWorkContainer}>
            <p className={styles.anotherGoodWork}>
              Another good work comped by Joseoh Obina and that gave us the
              opportunity to teach us through him
            </p>
            <p className={styles.dci}>DCI</p>
          </div>
          <div className={styles.techStackContainer}>
            <span>Tech stack :</span>
            <span className={styles.htmlJavascript}>
              {" "}
              HTML , JavaScript, SASS, React
            </span>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div
              className={styles.groupParent}
              onClick={onFrameContainer61Click}
            >
              <img className={styles.groupIcon} alt="" src="../group4.svg" />
              <div className={styles.livePreview}>Live Preview</div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector8.svg"
                />
              </div>
              <div  onClick={onFrameContainer61Clickgit}className={styles.livePreview}>View Code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsplashCard;
