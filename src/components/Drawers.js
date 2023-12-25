import React, { useState } from "react";
import styles from "./Drawer.module.css";
import Images from "../common/Images";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Drawers = (props) => {
  const navigate = useNavigate();

  const { data, options, drawerSlide } = props;

  const [nav, setNav] = useState(data);

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

  return (
    <>
      <div className={`${styles.drawerBox} ${drawerSlide ? styles.open : ""}`}>
        <div className={styles.logoBox}>
          <img src={Images.logoTag} alt="crs_logo" onClick={handleHome} />
        </div>
        <div className={styles.navLists}>
          {nav.map((item) => (
            <React.Fragment key={item.id}>
              {item.name === "Services" ? (
                <div key={item.id} className={styles.accorBox}>
                  <Accordion
                    key={item.id}
                    sx={{ background: "transparent", boxShadow: "none" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{ padding: "0px 8px" }}
                    >
                      <Typography
                        className={
                          item.active ? styles.listActive : styles.listAct
                        }
                      >
                        Services
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.optionBox}>
                      {options.map((item, idx) => (
                        <Typography
                          key={idx}
                          className={styles.listing}
                          onClick={item.action}
                        >
                          {item.name}
                        </Typography>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              ) : (
                <p
                  key={item.id}
                  onClick={() => handleNav(item)}
                  className={item.active ? styles.listActive : styles.list}
                >
                  {item.name}
                </p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Drawers;
