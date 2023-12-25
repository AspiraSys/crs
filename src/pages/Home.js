import React, { useState } from "react";
import SlidingCarousel from "../components/SlidingCarousel";
import Headers from "../components/Header";
import styles from "./Home.module.css";
import Images from "../common/Images";
import Cards from "../components/Cards";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "swiper/css";
import "swiper/css/pagination";
// import Com from "../components/Com";
// import { register } from "swiper/element/bundle";

// register();

const Home = () => {
  const serviceSec = [
    {
      id: 1,
      images: Images.home_service_overseas,
      content:
        "Our international recruitment services connect you with top global talent.We navigate borders, cultural nuances, and visa complexities to help you hire the best,fostering international success for your organisation.",
      navigate: "/services/recruitment",
    },
    {
      id: 2,
      images: Images.home_service_stocks,
      content:
        "Our stock services provide clients with strategic investment guidance, market expertise,And personalised portfolios. We aim to double your stock market investments through careful analysis And tailored strategies for financial growth.",
      navigate: "/services/stocks",
    },
    {
      id: 3,
      images: Images.home_service_domestic,
      content:
        "We excel in finding the right talent locally, matching your company`s needs With skilled professionals. Our tailored recruitment solutions ensure you build a high-performing team For sustainable growth.",
      navigate: "/services/recruitment",
    },
    {
      id: 4,
      images: Images.home_service_crypto,
      content:
        "We offer comprehensive cryptocurrency services, combining expert insights, strategic investment management, and cutting-edge technology to maximise your digital assets, doubling your investments for long-term financial success.",
      navigate: "/services/crypto",
    },
  ];

  const countRelation = [
    {
      id: 1,
      count: 50,
      title: "Client relationships",
    },
    {
      id: 2,
      count: 5000,
      title: "Candidates dataBase",
    },
    {
      id: 3,
      count: 1000,
      title: "Assessment per year",
    },
    {
      id: 4,
      count: 1000,
      title: "on Successful relationships",
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      name: "Alfaz",
      feedback:
        "Crystal Recruitment Solutions in Ambur is a truly exceptional recruitment company. Their professionalism and commitment to clients are remarkable. They don't charge any fees, and many of my friends have landed jobs at top MNCs in Chennai thanks to their help. I highly recommend them to anyone seeking a job in IT, ITES and overseas opportunities.",
      bg: "#58A3F2",
      picture: Images.men_1,
    },
    {
      id: 2,
      name: "Rameeza",
      feedback:
        "I want to express my heartfelt thanks for your exceptional support during my Sutherland recruitment process. Your guidance and professionalism were crucial to my success, and I am now happily employed at Sutherland. Your team's dedication truly made a difference.",
      bg: "#1EC198",
      picture: Images.women_1,
    },
    {
      id: 3,
      name: "Rithika",
      feedback:
        "Crystal Recruitment Solutions exceeded my expectations! Their team's professionalism, attention to detail, and commitment to finding the perfect fit for me were outstanding. They truly care about their candidates and go the extra mile to ensure success. I landed my dream job thanks to them!",
      bg: "#7E54B5",
      picture: Images.women_2,
    },
    {
      id: 4,
      name: "Ragu",
      feedback:
        "Now I got job in Sutherland with the Help of crystal recruitment solutions. Thanks for Carrying me there.",
      bg: "#58A3F2",
      picture: Images.men_2,
    },
    {
      id: 5,
      name: "Rooya Noorie",
      feedback:
        "My first experience with Crystal Recruitment Solution was excellent. Their team was attentive, professional, and made me feel valued. I'm grateful for their guidance and support throughout the process.",
      bg: "#1EC198",
      picture: Images.women_3,
    },
    {
      id: 6,
      name: "Sabeel",
      feedback:
        "Best place to get the job and people are taking good responsibility, They not only delivered outstanding results but also provided peace of mind by confirming they are not collecting any money from the candidate. Simply outstanding!",
      bg: "#7E54B5",
      picture: Images.men_3,
    },
  ];

  const companyLogo = [
    {
      id: 1,
      image: Images.c1,
      name: "Altruist",
    },
    {
      id: 2,
      image: Images.c2,
      name: "Ctsi",
    },
    {
      id: 3,
      image: Images.c3,
      name: "Miraj",
    },
    {
      id: 4,
      image: Images.c4,
      name: "Greet",
    },
    {
      id: 5,
      image: Images.c5,
      name: "Mowala",
    },
    {
      id: 6,
      image: Images.c6,
      name: "Sutherland",
    },
  ];

  const navigate = useNavigate();

  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <SlidingCarousel />
      <div className={styles.serviceSec}>
        <Headers title="Choose your Service" />
        <img
          src={Images.home_vector}
          alt="home_vector"
          className={styles.vector}
        />
        <div className={styles.cardsSec}>
          {serviceSec.map((item) => (
            <Cards
              Images={item.images}
              content={item.content}
              navigation={item.navigate}
              key={item.id}
            />
          ))}
        </div>
      </div>
      <div className={styles.discoverCont}>
        <h1>
          Discover <span>Our</span> Mission
        </h1>
        <div className={styles.mainDiscover}>
          <div className={styles.left}>
            <p>
              Our mission is to empower businesses and individuals alike.
              Through top-tier domestic and international recruitment, expert
              stock and crypto services, we strive to help our clients build
              exceptional teams, double their investments, and achieve
              unparalleled success on a global scale.
            </p>
            <div className={styles.btnCont}>
              <Button
                size="small"
                variant="contained"
                onClick={() => navigate("/aboutus")}
                className={styles.btns}
              >
                Know More
              </Button>
            </div>
          </div>

          <div className={styles.right}>
            <img src={Images.home_about} alt="Vision_Image" />
          </div>
        </div>
      </div>
      <div className={styles.countCont}>
        {countRelation.map((item) => (
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className={styles.countBox} key={item.id}>
              {counterOn && (
                <h4>
                  <CountUp start={0} end={item.count} duration={2} delay={0} />
                  {item.count >= 1000 ? <p>k+</p> : ""}
                </h4>
              )}
              <h6>{item.title}</h6>
            </div>
          </ScrollTrigger>
        ))}
      </div>
      <div className={styles.testimonalCont}>
        <Headers title="Testimonals" />
        <div className={styles.testimonalsCards}>
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
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
            }}
            className={`${styles.swiperTest} mySwiper`}
          >
            {testimonialsData.map((item) => (
              <SwiperSlide className={styles.slidersBox}>
                <div className={styles.cardOuter}>
                  <div className={styles.upperCard}>
                    <FormatQuoteIcon
                      className={styles.icon}
                      sx={{ color: `${item.bg}` }}
                    />
                    <h4>{item.feedback}</h4>
                  </div>
                  <div className={styles.lowerCard}>
                    <div className={styles.profilePic}>
                      <div className={styles.picLayer}>
                        <img src={item.picture} alt={item.name} />
                      </div>
                      <div className={styles.nameCont}>
                        <h5>{item.name}</h5>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="350"
                      height="147"
                      viewBox="0 0 324 100"
                      fill="none"
                    >
                      <path
                        d="M121.5 2.5C82 -4.50011 35.9249 4.46464 0 25.0421V147L324 146V23.3721C286.734 37.4481 239.316 36.7431 192.5 23.3721C173.5 59 121.5 44 121.5 2.5Z"
                        fill={item.bg}
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.companyCont}>
        <h1>
          We made their <span>dreams</span> come true
        </h1>
        <div className={styles.companyInner}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            Navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
            }}
            className={`${styles.swiperInner} mySwiper`}
          >
            {companyLogo.map((item) => (
              <SwiperSlide className={styles.slidersBox}>
                <div className={styles.companyLogo} key={item.id}>
                  <img src={item.image} alt={item.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
