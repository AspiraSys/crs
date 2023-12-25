import React from "react";
import styles from "./Footer.module.css";
import Images from "../common/Images";
import Icons from "../common/Icons";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="text-center text-lg-start b text-muted">
      <section className="text-light p-1">
        <div className="container text-md-start mt-5">
          <div className="row mt-3">
            <div
              className={`col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ${styles.footer_logo}`}
            >
              <div className={styles.imgs}>
                <img
                  src={Images.crs_f}
                  alt="crs_logo"
                  onClick={() => navigate("/")}
                />
              </div>
              <h4>Crystal Recruitment Solutions</h4>
              <p className={styles.footerCont}>
                Crystal Recruitment Solutions, 2nd floor Ambur Trade Centre M.C.
                Road, Ambur Thirupathur Dist, TamilNadu 635802
              </p>
              <p className={styles.footerCont}>
                <Icons.CallIcon className={`me-3 ${styles.icons}`} />
                7708501139
              </p>
              <p className={styles.footerCont}>
                <Icons.Email className={`me-3 ${styles.icons}`} />
                info@crspvtltd.com
              </p>
            </div>

            <div
              className={`col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ${styles.first}`}
            >
              <h6 className="text-uppercase fw-bold mb-4">About us</h6>
              <p>
                <Link to={"/aboutus"} className={styles.text_reset}>
                  Why Crystal Recruitment
                </Link>
              </p>
              <p>
                <Link to={"/aboutus"} className={styles.text_reset}>
                  Mission Vision
                </Link>
              </p>
              <p>
                <Link to={"/aboutus"} className={styles.text_reset}>
                  Our Gallery
                </Link>
              </p>
            </div>

            <div
              className={`col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ${styles.second}`}
            >
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <Link
                  to={"/services/recruitment"}
                  className={styles.text_reset}
                >
                  Overseas Recruitment
                </Link>
              </p>
              <p>
                <Link
                  to={"/services/recruitment"}
                  className={styles.text_reset}
                >
                  Domestic Recruitment
                </Link>
              </p>
              <p>
                <Link to={"/services/crypto"} className={styles.text_reset}>
                  Crypto Service
                </Link>
              </p>
              <p>
                <Link to={"/services/stocks"} className={styles.text_reset}>
                  Stock Market Service
                </Link>
              </p>
            </div>

            <div
              className={`col-md-4 col-lg-3 col-xl-3 mx-6 mb-md-0 mb-5 ${styles.third}`}
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                onClick={() => navigate("/careers")}
              >
                Carrers
              </h6>
              <h6
                className="text-uppercase fw-bold mb-4"
                onClick={() => navigate("/contact")}
              >
                Contact us
              </h6>
              <div className={styles.social_media}>
                <div>
                  <Link
                    to={
                      "https://www.linkedin.com/company/98774700/admin/notifications/all/"
                    }
                    className={`me-4 ${styles.text_reset}`}
                  >
                    <Icons.LinkedIn className={styles.icons} />
                  </Link>
                </div>
                <div>
                  <Link
                    to={
                      "https://instagram.com/crystal_recruitment_solutions?igshid=OGQ5ZDc2ODk2ZA"
                    }
                    className={`me-4 ${styles.text_reset}`}
                  >
                    <Icons.Instagram className={styles.icons} />
                  </Link>
                </div>
                <div>
                  <Link
                    to={
                      "https://x.com/CrystalRec50459?t=eDoW5Tn0bnFBanyUazL0UA&s=09"
                    }
                    className={`me-4 ${styles.text_reset}`}
                  >
                    <Icons.Twitter className={styles.icons} />
                  </Link>
                </div>
                <div>
                  <Link
                    to={"https://www.facebook.com/CrystalRecruitmentSolutions"}
                    className={`me-4 ${styles.text_reset}`}
                  >
                    <Icons.FaceBook className={styles.icons} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`${styles.another_footer} container d-flex text-light border-top pb-3 mb-3 text-center p-4`}
      >
        <div className={styles.conditions}>
          <h6 className="text-uppercase fw-bold mb-4">Terms of Services</h6>
          <h6 className="text-uppercase fw-bold mb-4">Privacy policy</h6>
          <h6 className="text-uppercase fw-bold mb-4">Cookies Policy</h6>
          <h6 className="text-uppercase fw-bold mb-4">Disclaimer</h6>
        </div>
        <p className={styles.rights}>
          @2023 Crystal Recruitment Solutions.All rights reserved
        </p>
      </div>
      <div className={`container ${styles.cond}`}>
        <p className={`text-light my-auto ${styles.footNote}`}>
          Please note that Crystal Recruitment Solutions does not practice
          charging a placement fee from any job seeker across profiles. Word of
          caution to the fraudulent news and information, if anyone demands any
          kind of charges from you, in the name of Crystal Recruitment Solutions
          Consulting.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
