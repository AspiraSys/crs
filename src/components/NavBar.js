import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Images from "../common/Images";
import { useNavigate } from "react-router-dom";
import Icons from "../common/Icons";
import Drawers from "./Drawers";

const NavBar = () => {
  const navigate = useNavigate();

  const navBar = [
    {
      id: 1,
      name: "About Us",
      navigate: "aboutus",
      active: false,
    },
    {
      id: 2,
      name: "Services",
      navigate: "",
      active: false,
    },
    {
      id: 3,
      name: "Careers",
      navigate: "careers",
      active: false,
    },
    {
      id: 4,
      name: "Contact",
      navigate: "contact",
      active: false,
    },
  ];

  const additionalOptions = [
    { name: "Recruitment", action: () => navigate("/services/recruitment") },
    { name: "Crypto", action: () => navigate("/services/crypto") },
    { name: "Stocks", action: () => navigate("/services/stocks") },
  ];

  const [nav, setNav] = useState(navBar);
  const [drawer, setDrawer] = useState(false);

  const handleNav = (item) => {
    if (item.name === "Services") {
      const updatedNav = nav.map((navItem) => ({
        ...navItem,
        active: navItem.id === item.id,
      }));
      setNav(updatedNav);
      console.log("item", item);
    } else {
      const updatedNav = nav.map((navItem) => ({
        ...navItem,
        active: navItem.id === item.id,
      }));

      setNav(updatedNav);
      navigate(`${item.navigate}`);
    }
  };

  const handleHome = () => {
    const updatedNav = nav.map((navItem) => ({
      ...navItem,
      active: false,
    }));

    setNav(updatedNav);
    navigate("/");
  };

  const handleDrawer = () => {
    setDrawer((pre) => !pre);
  };

  return (
    <>
      <div className={styles.navCont}>
        <div>
          <Drawers
            data={navBar}
            options={additionalOptions}
            drawerSlide={drawer}
          />
        </div>
        <div className={styles.logoBox}>
          <img src={Images.logoTag} alt="true" onClick={handleHome} />
        </div>

        <div className={styles.navLinks}>
          {nav.map((item) => (
            <div
              className={`${item.active ? styles.activeNav : styles.navButton}`}
              key={item.id}
              onClick={() => handleNav(item)}
            >
              {item.name === "Services" ? (
                <>
                  <div className={styles.dropDown}>
                    <button
                      className={
                        item.active ? styles.serviceAct : styles.serviceBtn
                      }
                    >
                      Services
                      <Icons.DownArrow className={styles.icon} />
                    </button>
                    <div className={styles.drop_content}>
                      {additionalOptions.map((item, idx) => (
                        <div
                          onClick={item.action}
                          className={styles.links}
                          key={idx}
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <p>{item.name}</p>
              )}
            </div>
          ))}
        </div>
        <div className={styles.hamburgerBox}>
          <label className={styles.hamburger}>
            <input type="checkbox" onClick={handleDrawer} />
            <svg viewBox="0 0 32 32">
              <path
                className={styles.line}
                id={styles.lineTopBottom}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
