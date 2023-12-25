import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import Images from "../common/Images";
import Button from "@mui/material/Button";

const Contactus = () => {
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cont = [
    {
      id: 1,
      title: "corporates",
    },
    {
      id: 2,
      title: "candidates",
    },
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    setActiveItem(cont[0]);
  }, [cont]);

  return (
    <>
      <div className={styles.contactCont}>
        <div className={styles.banner}>
          <img src={Images.contactBanner} alt="contact_banner" />
        </div>
        <div className={styles.contactForm}>
          <div className={styles.heading}>
            {cont.map((item) => (
              <h5
                key={item.id}
                className={
                  item === activeItem ? styles.listActive : styles.notActive
                }
                onClick={() => handleClick(item)}
              >
                {item.title}
              </h5>
            ))}
          </div>
          {activeItem && (
            <div className={styles.form}>
              <div className={styles.left}>
                <img
                  src={
                    activeItem.title === "corporates"
                      ? Images.contactCorporate
                      : Images.contactCandidate
                  }
                  alt={activeItem.title}
                />
              </div>
              <div className={styles.right}>
                <h4>
                  Request a{" "}
                  <span style={{ fontWeight: "bold" }}>Call back</span>
                </h4>
                <div className={styles.formInp}>
                  <div className={styles.inputBox}>
                    <input placeholder="your name" type="text" maxLength={20} />
                    <input
                      placeholder="phone number"
                      type="number"
                      maxLength={10}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <input placeholder="your e-mail" type="email" />
                    {activeItem.title === "candidates" ? (
                      <input type="file" className={styles.files} />
                    ) : (
                      <input placeholder="company name" type="text" />
                    )}
                  </div>
                  <div className={styles.inputBox}>
                    <textarea placeholder="Message" rows={4}></textarea>
                  </div>
                  <div className={styles.inputBox}>
                    <Button variant="contained" className={styles.btn}>
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contactus;
