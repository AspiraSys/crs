import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Images from "../common/Images";
import styles from "./SlidingCarousel.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SlidingCarousel = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item>
          <img src={Images.slider1} alt="slider1" className={styles.slides} />
          {/* <Carousel.Caption> */}
          <div className={styles.contentBox}>
            <h1>Connecting</h1>
            <h4>World Class Talent</h4>
            <div className={styles.btnBox}>
              <Button
                variant="contained"
                className={styles.btn}
                onClick={() => navigate("/services/recruitment")}
              >
                Know More
              </Button>
            </div>
          </div>
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img src={Images.slider2} alt="slider2" className={styles.slides} />
          <div className={styles.contentBoxLeft}>
            <h1>Investing</h1>
            <h4>for success</h4>
            <div className={styles.btnBox}>
              <Button
                variant="contained"
                className={styles.btn}
                onClick={() => navigate("/services/stocks")}
              >
                Know More
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Images.slider3} alt="slider3" className={styles.slides} />
          <div className={styles.contentBox}>
            <h1 className={styles.thirdCont}>Building Careers,</h1>
            <h4>Your Way</h4>
            <div className={styles.btnBox}>
              <Button
                variant="contained"
                className={styles.btn}
                onClick={() => navigate("/services/recruitment")}
              >
                Know More
              </Button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Images.slider4} alt="slider4" className={styles.slides} />
          <div className={styles.contentBoxLeft}>
            <h1>Crypto Insights,</h1>
            <h4>Real Returns</h4>
            <div className={styles.btnBox}>
              <Button
                variant="contained"
                className={styles.btn}
                onClick={() => navigate("/services/stocks")}
              >
                Know More
              </Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SlidingCarousel;
