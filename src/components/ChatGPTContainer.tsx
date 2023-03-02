import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./ChatGPTContainer.module.css";

type ChatGPTContainerType = {
  chatGPTImageUrl?: string;
  chatGPTText?: string;
  chatGPTDescription?: string;
  chatGPTChuckText?: string;
  chatGPTGroupImageUrl?: string;
  chatGPTVectorImageUrl?: string;

  /** Style props */
  propGap?: Property.Gap;
  propHeight?: Property.Height;
  propPadding?: Property.Padding;
  propFlex?: Property.Flex;
  propWidth?: Property.Width;
  propFlexShrink?: Property.FlexShrink;
  propTextAlign?: Property.TextAlign;
  propCursor?: Property.Cursor;

  /** Action props */
  onFrameContainer29Click?: () => void;
  onFrameContainer31Click?: () => void;
  onFrameContainer45Click?: () => void;
  onFrameContainer47Click?: () => void;
  onFrameContainer37Click?: () => void;
  
  onFrameContainer39Click?: () => void;
  
};

const ChatGPTContainer: FunctionComponent<ChatGPTContainerType> = ({
  chatGPTImageUrl,
  chatGPTText,
  chatGPTDescription,
  chatGPTChuckText,
  chatGPTGroupImageUrl,
  chatGPTVectorImageUrl,
  propGap,
  propHeight,
  propPadding,
  propFlex,
  propWidth,
  propFlexShrink,
  propTextAlign,
  propCursor,
  onFrameContainer29Click,
  onFrameContainer31Click,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const chatgpt1IconStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      flexShrink: propFlexShrink,
    };
  }, [propFlex, propWidth, propFlexShrink]);

  const techStackContainerStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const frameDiv3Style: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.chatgpt1Parent} style={frameDivStyle}>
      <img
        className={styles.chatgpt1Icon}
        alt=""
        src={chatGPTImageUrl}
        style={chatgpt1IconStyle}
      />
      <div className={styles.frameParent} style={frameDiv1Style}>
        <div className={styles.chatgptParent} style={frameDiv2Style}>
          <div className={styles.chatgpt}>{chatGPTText}</div>
          <div className={styles.thisProjectWas}>{chatGPTDescription}</div>
          <div
            className={styles.techStackContainer}
            style={techStackContainerStyle}
          >
            <span>Tech stack :</span>
            <span className={styles.reactOpenai}>{chatGPTChuckText}</span>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div
              className={styles.groupParent}
              onClick={onFrameContainer29Click}
            >
              <img
                className={styles.groupIcon}
                alt=""
                src={chatGPTGroupImageUrl}
              />
              <div className={styles.livePreview}>Live Preview</div>
            </div>
            <div
              className={styles.frameContainer}
              onClick={onFrameContainer31Click}
              style={frameDiv3Style}
            >
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src={chatGPTVectorImageUrl}
                />
              </div>
              <div className={styles.livePreview}>View Code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTContainer;
