import React from "react";
import styles from "./Stocks.module.css";
import Images from "../common/Images";
import { Button } from "@mui/material";
import Header from "../components/Header";
import Icons from "../common/Icons";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Stocks = () => {
  const happy_customers = [
    {
      id: 1,
      name: "Khalid bin Waleed",
      feedback:
        "Invested in CRS, and I'm thrilled! The stock's performance exceeded expectations. Customer service? Top-notch. I'd recommend to anyone looking for a reliable investment platform.",
      location: "Chennai",
    },
    {
      id: 2,
      name: "Abu Hurayrah",
      feedback:
        "Diving into stocks with CRS was a game-changer. Their expert advice and user-friendly interface made my trading journey smooth. I've seen remarkable growth in my portfolio!",
      location: "Hydrabad",
    },
    {
      id: 3,
      name: "Abu Sufiyan",
      feedback:
        "Navigating the stock market seemed daunting until I joined CRS. Their insightful analytics and timely alerts have boosted my confidence, and my returns speak volumes!",
      location: "Mumbai",
    },
    {
      id: 4,
      name: "Abu Darda",
      feedback:
        "GHI Securities transformed my approach to CRS. Their comprehensive research tools and responsive support team have been instrumental in my portfolio's success. Truly satisfied!",
      location: "Chennai",
    },
    {
      id: 5,
      name: "Aboozar Gafari",
      feedback:
        "I've found the perfect partner for my stock ventures. Transparent fees, expert guidance, and consistent growth make them stand out. My investment goals are within reach, thanks to them.",
      location: "Bangalore",
    },
  ];

  return (
    <>
      <div className={styles.stock_banner}>
        <img src={Images.stocks_banner} alt="stocks" />
        <h2>
          Stocks <span>Insights</span>
        </h2>
      </div>
      <div className={styles.sec_one}>
        <div className={styles.left}>
          <h4>Equi Pulse</h4>
          <h6>Powering your portfolio</h6>
        </div>
        <div className={styles.right}>
          <div className={styles.design_cont}></div>
          <div className={styles.formCont}>
            <img src={Images.stock_1} alt="sec_one_image" />
            <div className={styles.innerForm}>
              <input placeholder="enter your name" type="text" max={20} />
              <input
                placeholder="enter your valid email address"
                type="email"
              />
              <textarea placeholder="Enter your message" rows={6}></textarea>
              <div className={styles.btnBox}>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => alert("hi")}
                  className={styles.btns}
                >
                  <p>Secure Trade</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buzzCont}>
        <div className={styles.leftBuzz}>
          <Header title={"What the buzz About Stocks?"} />
          <p>
            The buzz around stocks stems from their potential for substantial
            returns and wealth accumulation. Easy online access, IPOs, and
            emerging technologies like block chain and AI add excitement and
            opportunity to stock market discussions, drawing more investors to
            explore these avenues for financial growth.
          </p>
        </div>
        <div className={styles.rightBuzz}>
          <img src={Images.stock_buzz} alt="stock_buz_two" />
        </div>
      </div>
      <div className={styles.sec_three}>
        <Header
          title={"One Platform for Seamless User Experience"}
          className={styles.head}
        />
        <div className={styles.outer_box}>
          <div className={styles.box}>
            <div className={styles.inner_box}>
              <img src={Images.stock_icon2} alt="experience_icon" />
            </div>
            <p>Quick Account Opening Process</p>
          </div>
          <div className={styles.box}>
            <div
              className={styles.inner_box}
              style={{ flexDirection: "column", gap: 10 }}
            >
              <div className={styles.starBox}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icons.StarIcon key={index} className={styles.icon} />
                ))}
              </div>
              <Icons.LockIcon />
            </div>
            <p>Robust & Secure Platform</p>
          </div>
          <div className={styles.box}>
            <div className={styles.inner_box}>
              <span className={styles.cont1}>
                1.5 lakhs+ <br /> <span className={styles.cont2}>Indians</span>
              </span>
            </div>
            <p>All over India</p>
          </div>
          <div className={styles.box}>
            <div className={styles.inner_box}>
              <img src={Images.stock_icon2} alt="experience_icon" />
              <p>5+</p>
            </div>
            <p>Years of Trust</p>
          </div>
          <div className={styles.box}>
            <div className={styles.inner_box}>
              <img src={Images.stock_icon1} alt="experience_icon" />
            </div>
            <p>Semaless Digital Platform</p>
          </div>
        </div>
      </div>
      <div className={styles.feedback_cont}>
        <Header title={"Happy Customer"} />
        <div className={styles.feedback_main}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            Navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            className={`${styles.swiperTest} mySwiper`}
          >
            {happy_customers.map((item) => (
              <SwiperSlide className={styles.swiperBox}>
                <div key={item.id} className={styles.feedback_box}>
                  <h6>{item.feedback}</h6>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="340"
                    height="193"
                    viewBox="0 0 340 193"
                    fill="none"
                    className={styles.boxFeed}
                  >
                    <path d="M0 0V193L29 164H380V0H0Z" fill="#AD9551" />
                  </svg>
                  <p>
                    ~&nbsp;{item.name} - <span>{item.location}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Stocks;
