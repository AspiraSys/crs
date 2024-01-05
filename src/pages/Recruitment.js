import React from "react";
import styles from "./Recruitment.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Images from "../common/Images";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icons from "../common/Icons";

const Recruitment = () => {
  const TimeLineChart = [
    {
      id: 1,
      image: Images.vector_1,
      steps: "Meeting with CRS",
    },
    {
      id: 2,
      image: Images.vector_2,
      steps: "resume and guidance",
    },
    {
      id: 3,
      image: Images.vector_3,
      steps: "Scheduling Interview in a company",
    },
    {
      id: 4,
      image: Images.vector_4,
      steps: "Get Your Job offer",
    },
    {
      id: 5,
      image: Images.vector_5,
      steps: "Become Successful candidate of CRS",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.recruitCont}>
        <div className={styles.banner}>
          <img src={Images.banner_recruit} alt="banner_recruit" />
        </div>
        <div className={styles.contentBox}>
          <p>Dreams Take flight here</p>
          <h5>
            <Typewriter
              words={["International", "Domestic"]}
              loop
              cursor
              cursorStyle="|"
              cursorColor="#AD9551"
              typeSpeed={150}
              deleteSpeed={200}
              delaySpeed={1200}
            />
          </h5>
        </div>
        <div className={styles.rightImg}>
          <img src={Images.recruit_vector} alt="vector_image" />
        </div>
      </div>
      <div className={styles.visionCont}>
        <div className={styles.leftCont}>
          <img src={Images.crs_og} alt="crs_logo" />
        </div>
        <div className={styles.rightCont}>
          <h2>Why Us?</h2>
          <h3>
            Our experienced team offers tailored solutions and global
            connections, prioritizing your career success. We have a proven
            track record of helping candidates secure their dream jobs. Trust in
            our transparent and dedicated approach to propel your career
            forward. Choose us for a partnership committed to your professional
            growth and advancement.
          </h3>
        </div>
      </div>
      <div className={styles.aceCont}>
        <h1>Ace Steps</h1>
        <div className={styles.timeLineCont}>
          <VerticalTimeline className={styles.timeInner}>
            {TimeLineChart.map((item) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={item.steps}
                dateClassName={styles.titleCont}
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.steps}
                  className={styles.vectorImg}
                />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className={styles.bottomRecruit}>
        <img src={Images.bottom_recruit} alt="bottom_recruit" />
        <div className={styles.bottomCont}>
          <div className={styles.bottomHead}>
            <h4>Contact Us</h4>
          </div>
          <div className={styles.bottomContact}>
            <div className={styles.contactBox}>
              <Icons.Email className={`me-3 ${styles.icons}`} />
              <h3>info@crspvtltd.com</h3>
            </div>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate("/contact")}
              className={styles.btns}
            >
              Reach Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
