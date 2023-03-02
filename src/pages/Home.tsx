import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ChatGPTContainer from "../components/ChatGPTContainer";
import Hope2HandCard from "../components/Hope2HandCard";
import UnsplashCard from "../components/UnsplashCard";
import styles from "./Home.module.css";
import { useRef } from "react";
import { useState } from "react";


import { Link } from 'react-scroll';
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();
  const navigatecontact = useNavigate();
  const navigateabout = useNavigate();
  
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  

  

  const onFrameContainer29Click = useCallback(() => {
    window.open("https://chatgptfront.onrender.com");
  }, []);

  const onFrameContainer31Click = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/chatback");
  }, []);

  const onFrameContainer53Clickgit = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/Chuck");
  }, []);
  const onFrameContainer53Click = useCallback(() => {
    window.open("https://api-chuck.onrender.com");
  }, []);

  const onFrameContainer69Click = useCallback(() => {
    window.open("https://tiagorouede.vercel.app/");
  }, []);

  const onFrameContainer71Click = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/TRouede");
  }, []);
  const onFrameContainer37Click = useCallback(() => {
    window.open("https://hope2hand.netlify.app/");
  }, []);

  const onFrameContainer39Click = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/Hope2Hand_Final_Project");
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);
  const onFrameContainer3Clickcontact = useCallback(() => {
    navigatecontact("/contact");
  }, [navigatecontact]);
  const onFrameContainer3Clickabout = useCallback(() => {
    navigatecontact("/about");
  }, [navigatecontact]);

  const onFrameContainer45Click = useCallback(() => {
    window.open("https://weather-app-ul62.onrender.com");
  }, []);

  const onFrameContainer47Click = useCallback(() => {
    window.open("https://github.com/CarlosPereira85/weather_app");
  }, []);
 


  return (
   
    <>
 
<Navbar />

    <div className={styles.home}>
   
      <div className={styles.menu}>
       
        
      </div>
      <img  className={styles.icon} alt="" src="../francesco-ungaro-jqKS0ET-wGE-unsplash.jpg" />
      <div className={styles.groupParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.laptopRemovebgPreview1Parent}>
            <img
              className={styles.laptopRemovebgPreview1Icon}
              alt=""
              src="../laptopremovebgpreview-1@2x.png"
            />
            <h2 className={styles.youHaveTheContainer}>
              <span className={styles.youHaveTheContainer1}>
                <p className={styles.hi}>
                  <span>Hi 👋,</span>
                </p>
                <p className={styles.hi}>
                  <span>My name is</span>
                </p>
                <p className={styles.hi}>
                  <span className={styles.carlospereira}>Carlos Pereira</span>
                </p>
                <p className={styles.iBuildThingsForWeb}>
                  <span>I build things for web</span>
                </p>
              </span>
            </h2>
          </div>
        </div>
        <div className={styles.ellipseWrapper}>
          <img className={styles.frameChild} alt="" src="../ellipse-1.svg" />
        </div>
      </div>
      <div className={styles.skillsParent}>
        <b className={styles.skills1}>Skills</b>
        <div  className={styles.technologiesIveBeen}>
          {" "}
          Technologies I’ve been working with recently
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vscodeIconsfileTypeHtmlParent}>
          <img
            className={styles.vscodeIconsfileTypeHtml}
            alt=""
            src="../vscodeiconsfiletypehtml.svg"
          />
          <img
            className={styles.vscodeIconsfileTypeCss}
            alt=""
            src="../vscodeiconsfiletypecss.svg"
          />
          <img
            className={styles.vscodeIconsfileTypeJsOffi}
            alt=""
            src="../vscodeiconsfiletypejsofficial.svg"
          />
          <img
            className={styles.logosreactIcon}
            alt=""
            src="../logosreact.svg"
          />
          <img
            className={styles.logosbootstrapIcon}
            alt=""
            src="../logosbootstrap.svg"
          />
          <div className={styles.image1Wrapper}>
            <img className={styles.image1Icon} alt="" src="../image-1@2x.png" />
          </div>
        </div>
        <div className={styles.vscodeIconsfileTypeTailwinParent}>
          <img
            className={styles.vscodeIconsfileTypeTailwin}
            alt=""
            src="../vscodeiconsfiletypetailwind.svg"
          />
          <div className={styles.logossassWrapper}>
            <div className={styles.logossass}>
              <img className={styles.vectorIcon2} alt="" src="../vector1.svg" />
            </div>
          </div>
          <img
            className={styles.vscodeIconsfileTypeVscode}
            alt=""
            src="../vscodeiconsfiletypevscode.svg"
          />
          <img
            className={styles.akarIconsgithubFill}
            alt=""
            src="../akariconsgithubfill.svg"
          />
          <img
            className={styles.nodejsOriginal1Icon}
            alt=""
            src="../nodejsoriginal-1.svg"
          />
          <div className={styles.locofyRemovebgPreview1Wrapper}>
            <img
              className={styles.locofyRemovebgPreview1Icon}
              alt=""
              src="../locofyremovebgpreview-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.vscodeIconsfileTypeHtmlGroup}>
          <img
            className={styles.vscodeIconsfileTypeHtml1}
            alt=""
            src="../vscodeiconsfiletypehtml1.svg"
          />
          <img
            className={styles.vscodeIconsfileTypeCss1}
            alt=""
            src="../vscodeiconsfiletypecss1.svg"
          />
          <img
            className={styles.vscodeIconsfileTypeJsOffi1}
            alt=""
            src="../vscodeiconsfiletypejsofficial1.svg"
          />
          <img
            className={styles.logosreactIcon1}
            alt=""
            src="../logosreact1.svg"
          />
          <img
            className={styles.logosbootstrapIcon1}
            alt=""
            src="../logosbootstrap1.svg"
          />
          <div className={styles.image1Container}>
            <img
              className={styles.image1Icon1}
              alt=""
              src="../image-11@2x.png"
            />
          </div>
        </div>
        <div className={styles.vscodeIconsfileTypeTailwinGroup}>
          <img
            className={styles.vscodeIconsfileTypeTailwin1}
            alt=""
            src="../vscodeiconsfiletypetailwind1.svg"
          />
          <div className={styles.logossassContainer}>
            <div className={styles.logossass1}>
              <img className={styles.vectorIcon3} alt="" src="../vector2.svg" />
            </div>
          </div>
          <img
            className={styles.vscodeIconsfileTypeVscode1}
            alt=""
            src="../vscodeiconsfiletypevscode1.svg"
          />
          <img
            className={styles.akarIconsgithubFill1}
            alt=""
            src="../akariconsgithubfill1.svg"
          />
          <img
            className={styles.nodejsOriginal1Icon1}
            alt=""
            src="../nodejsoriginal-11.svg"
          />
          <div className={styles.locofyRemovebgPreview1Container}>
            <img
              className={styles.locofyRemovebgPreview1Icon1}
              alt=""
              src="../locofyremovebgpreview-11@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.vscodeIconsfileTypeHtmlContainer}>
          <img
            className={styles.vscodeIconsfileTypeHtml2}
            alt=""
            src="../vscodeiconsfiletypehtml2.svg"
          />
          <img
            className={styles.vscodeIconsfileTypeCss2}
            alt=""
            src="../vscodeiconsfiletypecss2.svg"
          />
          <img
            className={styles.vscodeIconsfileTypeJsOffi2}
            alt=""
            src="../vscodeiconsfiletypejsofficial2.svg"
          />
          <img
            className={styles.logosreactIcon2}
            alt=""
            src="../logosreact2.svg"
          />
          <img
            className={styles.logosbootstrapIcon2}
            alt=""
            src="../logosbootstrap2.svg"
          />
          <div className={styles.image1Frame}>
            <img
              className={styles.image1Icon2}
              alt=""
              src="../image-12@2x.png"
            />
          </div>
        </div>
        <div className={styles.vscodeIconsfileTypeTailwinContainer}>
          <img
            className={styles.vscodeIconsfileTypeTailwin2}
            alt=""
            src="../vscodeiconsfiletypetailwind2.svg"
          />
          <div className={styles.logossassFrame}>
            <div className={styles.logossass2}>
              <img className={styles.vectorIcon4} alt="" src="../vector3.svg" />
            </div>
          </div>
          <img
            className={styles.vscodeIconsfileTypeVscode2}
            alt=""
            src="../vscodeiconsfiletypevscode2.svg"
          />
          <img
            className={styles.akarIconsgithubFill2}
            alt=""
            src="../akariconsgithubfill2.svg"
          />
          <img
            className={styles.nodejsOriginal1Icon2}
            alt=""
            src="../nodejsoriginal-12.svg"
          />
          <div className={styles.locofyRemovebgPreview1Frame}>
            <img
              className={styles.locofyRemovebgPreview1Icon2}
              alt=""
              src="../locofyremovebgpreview-12@2x.png"
            />
          </div>
        </div>
      </div>
      <div id="projects" className={styles.thingsIveBuilt}>Things I’ve built so far</div>
      <ChatGPTContainer
        chatGPTImageUrl="../chatgpt-1@2x.png"
        chatGPTText="ChatGPT"
        chatGPTDescription="This project was created recently. I have successfully accomplished the task of making a GPT chat talking and listening."
        chatGPTChuckText=" React, OpenAI"
        chatGPTGroupImageUrl="../group.svg"
        chatGPTVectorImageUrl="../vector8.svg"
        propGap="5px"
        propHeight="264.89px"
        propPadding="var(--padding-2xl) var(--padding-3xl)"
        propFlex="1"
        propTextAlign="center"
        propCursor="pointer"
        onFrameContainer29Click={onFrameContainer29Click}
        onFrameContainer31Click={onFrameContainer31Click}
      />
      <ChatGPTContainer
        chatGPTImageUrl="../weather-1@2x.png"
        chatGPTText="WeatherApp"
        chatGPTDescription="Project developed with React/ContextAPI, excellent components
        division and great learning.."
        chatGPTChuckText=" "
        chatGPTGroupImageUrl="../group.svg"
        chatGPTVectorImageUrl="../vector8.svg"
        propGap="5px"
        propHeight="264.89px"
        propPadding="var(--padding-2xl) var(--padding-3xl)"
        propFlex="1"
        propTextAlign="center"
        propCursor="pointer"
        onFrameContainer29Click={onFrameContainer45Click}
        onFrameContainer31Click={onFrameContainer47Click}
      />
      <ChatGPTContainer
        chatGPTImageUrl="../hope-1@2x.png"
        chatGPTText="Hope2Hnad"
        chatGPTDescription=" Hope2Hand was the final graduation project of the 1 year course run by
        DCI. It was great, I learned a lot.
"
        chatGPTChuckText=" React , JavaScript, Figma, Locofy, MongoDB, Node express / MERN "
        chatGPTGroupImageUrl="../group.svg"
        chatGPTVectorImageUrl="../vector8.svg"
        propGap="5px"
        propHeight="264.89px"
        propPadding="var(--padding-2xl) var(--padding-3xl)"
        propFlex="1"
        propTextAlign="center"
        propCursor="pointer"
        onFrameContainer29Click={onFrameContainer37Click}
        onFrameContainer31Click={onFrameContainer39Click}
      />
      
      
 
   
      <ChatGPTContainer
        chatGPTImageUrl="chuck-1@2x.png"
        chatGPTText="Chuck Norris"
        chatGPTDescription=" The famous Chuck Norris jokes, but with a twist. I used the API of the famous 
        site icndb.com."
        chatGPTChuckText=", React "
        chatGPTGroupImageUrl="../group.svg"
        chatGPTVectorImageUrl="../vector8.svg"
        propGap="47px"
        propHeight="314px"
        propFlex="unset"
        propWidth="305px"
        propFlexShrink="0"
        propTextAlign="left"
        propCursor="unset"
         
        onFrameContainer29Click={onFrameContainer53Click}
        
       
      />
      <UnsplashCard />
      <ChatGPTContainer
        chatGPTImageUrl="../tr-1@2x.png"
        chatGPTText="TR"
        chatGPTDescription="One of my first HTML/CSS design. From there I guess I have improved a bit :)"
        chatGPTChuckText=" HTML , CSS"
        chatGPTGroupImageUrl="../group3.svg"
        chatGPTVectorImageUrl="../vector8.svg"
        propGap="unset"
        propHeight="520px"
        propPadding="var(--padding-2xl) var(--padding-3xl) var(--padding-2xl) 0px"
        onFrameContainer29Click={onFrameContainer69Click}
        onFrameContainer31Click={onFrameContainer71Click}
      />
      <div className={styles.beSureToTakeALoWrapper}>
        <div className={styles.beSureToContainer}>
          <span>{`Designed and built by `}</span>
          <span className={styles.carlospereira}>{`CarlosPereira `}</span>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Home;
