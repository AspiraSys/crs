import React from "react";
import styles from "./Crypto.module.css";
import Headers from "../components/Header";
import Images from "../common/Images";
import { Button } from "@mui/material";

const Crypto = () => {
  return (
    <>
      <div className={styles.crypto_banner}>
        <img src={Images.banner_crypto} alt='crypto_banner'/>
        <h2>Crypto<span>Insights</span></h2>
      </div>
      <div className={styles.sec_one}>
        <Headers title={"Why Crypto ?"} />
        <div className={styles.main}>
          <div className={styles.leftSec}>
            <div className={styles.imgBox}>
              <img src={Images.crypto_vision} alt="why crypto?" />
            </div>
          </div>
          <div className={styles.rightSec}>
            <p>
              Crypto, short for cryptocurrency, is a digital or virtual form of
              currency secured by cryptography. It offers clients numerous
              benefits such as decentralization, security, lower transaction
              fees, accessibility, and investment potential, making it an
              attractive option for diversifying portfolios and conducting
              secure and efficient financial transactions.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sec_two}>
        <Headers title={"Why we Need to Invest In Crypto?"} />
        <div className={styles.main}>
          <div className={styles.leftSec_one}>
            <p>
              Investing in crypto diversifies portfolios, reduces risk, and
              offers high potential returns. It's accessible, decentralized, and
              aligns with the evolving digital economy. A strategic choice for
              future-focused investors.
            </p>
          </div>
          <div className={styles.rightSec_one}>
            <div className={styles.imgBox_two}>
              <img src={Images.crypto_invest} alt="Invest Crypto?" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sec_three}>
        <Headers title={"What are we Providing?"} />
        <div className={styles.main}>
          <div className={styles.leftSec}>
            <div className={styles.imgBox_three}>
              <img
                src={Images.crypto_providing}
                className={styles.img_three}
                alt="providing crypto?"
              />
            </div>
            <div className={styles.cont}>
              <p>
                In Crypto <br /> We Trust, <br /> for Wealth <br /> We hustle
              </p>
            </div>
          </div>
          <div className={styles.rightSec}>
            <p>
              We offer comprehensive financial services, including expert
              portfolio management, diverse investment options, and tailored
              financial consulting. Our goal is to empower clients, helping them
              build wealth, achieve their financial goals, and secure their
              financial future, in a shariya compliant manner.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.sec_four}>
        <div className={styles.main_cont}>
          <div className={styles.left_form}>
            <input placeholder="Enter your Name" max={20} type="text" />
            <input placeholder="Enter your valid email address" type="email" />
            <textarea placeholder="enter your message" rows={6}></textarea>
            <div className={styles.btnBox}>
              <Button
                size="small"
                variant="contained"
                onClick={() => alert("hi")}
                className={styles.btns}
              >
                <p>Crypto</p>
                <p>Engage</p>
              </Button>
            </div>
          </div>
          <div className={styles.right_form}>
            <div className={styles.right_cont}>
              <p>Navigate Wealth Choose the Crypto Path</p>
            </div>
            <div className={styles.imgBox_right_cont}>
              <img src={Images.crypto_service} alt="crypto_service" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
