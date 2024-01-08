import React, { useState, useEffect } from "react";
import styles from "./CareersView.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import Button from "@mui/material/Button";
import Icons from "../common/Icons";

const CareersView = () => {
  const { data } = useData();

  const [jobDescrip, setJobDescrip] = useState(data);
  const [stickChange, setStickChange] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("data start of effect", data);
    if (Array.isArray(data)) {
      setJobDescrip(data);
    } else {
      console.log("Data is not available yet or not an array");
    }
  }, [data]);

  console.log("data after effct", jobDescrip);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setStickChange(true);
    } else {
      setStickChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <div className={stickChange ? styles.stickTopCont : styles.topCont}>
        <div className={styles.titleCont}>
          {/* {Array.isArray(jobDescrip) && jobDescrip.map((item) => ( */}
          <div className={styles.arrow}>
            <h5>Bussiness Development Executive</h5>
            <h6>CRS0101 &nbsp; | &nbsp;Chennai</h6>
          </div>
          {/* )) */}
          {/* } */}
        </div>
        <div className={styles.applyCont}>
          <Button variant="contained" className={styles.btn}>
            Apply know
          </Button>
        </div>
      </div>
      <div className={styles.mainCont}>
        <div className={styles.subMain}>
          <Icons.ArrowBack
            className={styles.icons}
            onClick={() => navigate("/careers/jobs")}
          />
          <div className={styles.descripCont}>
            <h4>Description</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et
              rutrum cursus. Convallis id ipsum malesuada bibendum ornare sed
              tortor morbi. Nulla amet integer sagittis auctor. Nulla accumsan
              diam quis quis. Ut aliquam nisl a nibh posuere. Fames pretium sed
              risus praesent lacus sollicitudin. Tempus pellentesque justo felis
              varius purus. Faucibus nisl ut neque euismod. Velit enim dictum
              euismod ultrices justo.Lorem ipsum dolor sit amet consectetur.
              Metus nulla quisque et rutrum cursus. Convallis id ipsum malesuada
              bibendum ornare sed tortor morbi. Nulla amet integer sagittis
              auctor. Nulla accumsan diam quis quis. Ut aliquam nisl a nibh
              posuere. Fames pretium sed risus praesent lacus sollicitudin.
              Tempus pellentesque justo felis varius purus. Faucibus nisl ut
              neque euismod. Velit enim dictum euismod ultrices justo.Lorem
              ipsum dolor sit amet consectetur. Metus nulla quisque et rutrum
              cursus. Convallis id ipsum malesuada bibendum ornare sed tortor
              morbi. Nulla amet integer sagittis auctor. Nulla accumsan diam
              quis quis. Ut aliquam nisl a nibh posuere. Fames pretium sed risus
              praesent lacus sollicitudin. Tempus pellentesque justo felis
              varius purus. Faucibus nisl ut neque euismod. Velit enim dictum
              euismod ultrices justo.Lorem ipsum dolor sit amet consectetur.
              Metus nulla quisque et rutrum cursus. Convallis id ipsum malesuada
              bibendum ornare sed tortor morbi. Nulla amet integer sagittis
              auctor. Nulla accumsan diam quis quis. Ut aliquam nisl a nibh
              posuere. Fames pretium sed risus praesent lacus sollicitudin.
              Tempus pellentesque justo felis varius purus. Faucibus nisl ut
              neque euismod. Velit enim dictum euismod ultrices justo.Lorem
              ipsum dolor sit amet consectetur. Metus nulla quisque et rutrum
              cursus. Convallis id ipsum malesuada bibendum ornare sed tortor
              morbi. Nulla amet integer sagittis auctor. Nulla accumsan diam
              quis quis. Ut aliquam nisl a nibh posuere. Fames pretium sed risus
              praesent lacus sollicitudin. Tempus pellentesque justo felis
              varius purus. Faucibus nisl ut neque euismod. Velit enim dictum
              euismod ultrices justo.
            </p>
            <h4>Key Responsibilites</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et
                rutrum cursus. ConvallisLorem ipsum dolor sit amet consectetur.
                Metus nulla quisque et rutrum cursus. Convallis{" "}
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et
                rutrum cursus. ConvallisLorem ipsum dolor sit amet consectetur.
                Metus nulla quisque et rutrum cursus. Convallis{" "}
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et
                rutrum cursus. ConvallisLorem ipsum dolor sit amet consectetur.
                Metus nulla quisque et rutrum cursus. Convallis{" "}
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et
                rutrum cursus. ConvallisLorem ipsum dolor sit amet consectetur.
                Metus nulla quisque et rutrum cursus. Convallis{" "}
              </li>
            </ul>
            <h4>Prefered Requirements</h4>
            <ul>
              <li>7+ years of engineering experience </li>
              <li>3+ years of engineering team management experience</li>
              <li>
                8+ years of leading the definition and development of multi tier
                web services experience
              </li>
              <li>
                Knowledge of engineering practices and patterns for the full
                software/hardware/networks development life cycle, including
                coding standards, code reviews, source control management, build
                processes, testing, certification, and livesite operations.{" "}
              </li>
              <li>
                Experience partnering with product or program management teams{" "}
              </li>
              <li>
                Experience designing or architecting (design patterns,
                reliability and scaling) of new and existing systems
              </li>
            </ul>
            <h4>Basic Qualification</h4>
            <ul>
              <li>
                Experience in communicating with users, other technical teams,
                and senior leadership to collect requirements, describe software
                product features, technical designs, and product strategy
              </li>
              <li>
                Experience in recruiting, hiring, mentoring/coaching and
                managing teams of Software Engineers to improve their skills,
                and make them more effective, product software engineers
              </li>
            </ul>
          </div>
          <div className={styles.detailJobCont}>
            <div className={styles.detailCont}>
              <h5>Job Details</h5>
            </div>
            <div className={styles.detailCont}>
              <Icons.LocationIcon className={styles.iconsDet} />
              <p>Chennai, India</p>
            </div>
            <div className={styles.detailCont}>
              <Icons.TechSuit className={styles.iconsDet} />
              <p>On-site</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersView;
