import React, { useState, useEffect } from "react";
import styles from "./Careers.module.css";
import Banner from "../components/Banner";
import Images from "../common/Images";
import Icons from "../common/Icons";
import { Button } from "@mui/material";
import Paginations from "../components/Paginations";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../context/DataContext";

const Careers = () => {
  const careers = [
    {
      id: 1,
      jobCode: "CRS011",
      designation: "Bussiness Development Executive",
      location: "Bangalore",
      country: "India",
      date: "Dec 25, 2023",
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et rutrum cursus. Convallis id ipsum malesuada bibendum ornare sed tortor morbi. Nulla amet integer sagittis auctor. Nulla accumsan diam quis quis. Ut aliquam nisl a nibh posuere. Fames pretium sed risus praesent lacus sollicitudin. Tempus pellentesque justo felis varius purus. Faucibus nisl ut neque euismod. Velit enim dictum euismod ultrices justo.Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et rutrum cursus. Convallis id ipsum malesuada bibendum ornare sed tortor morbi. Nulla amet integer sagittis auctor. Nulla accumsan diam quis quis. Ut aliquam nisl a nibh posuere. Fames pretium sed risus praesent lacus sollicitudin. Tempus pellentesque justo felis varius purus. Faucibus nisl ut neque euismod. Velit enim dictum euismod ultrices justo.Lorem ipsum dolor sit amet consectetur. Metus nulla quisque et rutrum cursus. Convallis id ipsum malesuada bibendum ornare sed tortor morbi. Nulla amet integer sagittis auctor. Nulla accumsan diam quis quis. Ut aliquam nisl a nibh posuere. Fames pretium sed risus praesent lacus sollicitudin. Tempus pellentesque justo felis varius purus. Faucibus nisl ut neque euismod. Velit enim dictum euismod ultrices justo.",
      responsibility: "",
      basic_requirements: "",
      preferrred_requirements: "",
    },
    {
      id: 2,
      jobCode: "CRS012",
      designation: "Bussiness Development Associate",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 3,
      jobCode: "CRS013",
      designation: "Bussiness Development Executive",
      location: "Hyderabad",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 4,
      jobCode: "CRS014",
      designation: "Bussiness Development Executive",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 5,
      jobCode: "CRS011",
      designation: "Bussiness Development Executive",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 6,
      jobCode: "CRS011",
      designation: "Bussiness Development Executive",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 7,
      jobCode: "CRS011",
      designation: "Bussiness Development Executive",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 8,
      jobCode: "CRS011",
      designation: "Bussiness Development Executive",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 9,
      jobCode: "CRS011",
      designation: "Bussiness Development Executive",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
    {
      id: 10,
      jobCode: "CRS011",
      designation: "Data Analyst",
      location: "chennai",
      country: "India",
      date: "Dec 25, 2023",
    },
  ];

  const navigate = useNavigate();
  const { setSharedData } = useData();
  const { code } = useParams();

  const [getData, setGetData] = useState({
    jobTitle: "",
    location: "",
  });
  const [colorChange, setColorchange] = useState(false);
  const [data, setData] = useState(careers);
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const pageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    let dataToDisplay;

    if (filterData.length > 0) {
      dataToDisplay = filterData.slice(startIndex, endIndex);
    } else {
      dataToDisplay = careers.slice(startIndex, endIndex);
    }
    setData(dataToDisplay);
  };

  useEffect(() => {
    pageData();
  }, [filterData, currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const { jobTitle, location } = getData;

    const filteredData = careers.filter((career) => {
      const jobTitleMatch =
        !jobTitle ||
        career.designation.toLowerCase().includes(jobTitle.toLowerCase());
      const locationMatch =
        !location ||
        career.location.toLowerCase().includes(location.toLowerCase());

      return jobTitleMatch && locationMatch;
    });
    setFilterData(filteredData);

    setCurrentPage(1);
    setGetData({
      jobTitle: "",
      location: "",
    });
  };

  const handleView = (jobData, code) => {
    localStorage.setItem("jobId", code);
    setSharedData(jobData);
    navigate(`/careers/${code}`);
  };

  return (
    <>
      <Banner Image={Images.careersBanner} Title={"Careers"} />
      <div className={styles.careers_main}>
        <div
          className={
            colorChange ? styles.careers_filter_stick : styles.careers_filter
          }
        >
          <h4>Find Jobs</h4>
          <div className={styles.input_filter}>
            <input
              placeholder="search for job by title"
              type="text"
              max={20}
              className={styles.job_input}
              name={"jobTitle"}
              value={getData.jobTitle}
              onChange={handleChange}
            />
            <div className={styles.location_box}>
              <Icons.LocationIcon className={styles.location_icon} />
              <input
                placeholder="Location"
                type="text"
                max={15}
                name={"location"}
                value={getData.location}
                onChange={handleChange}
              />
            </div>
            <Icons.SearchIcon
              className={styles.search_icon}
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className={styles.careers_list}>
          {data.map((item) => (
            <div className={styles.list_cont} key={item.id}>
              <div className={styles.left_con}>
                <h4>{item.designation}</h4>
                <h6>
                  {item.location}, {item.country}
                </h6>
                <div className={styles.btnBox}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleView(item, item.jobCode)}
                    className={styles.btns}
                  >
                    View Jobs
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    // onClick={() => navigate("/aboutus")}
                    className={styles.btns}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
              <div className={styles.right_con}>
                <p>Posted {item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Paginations
          className={styles.pagin}
          activePage={currentPage}
          onPageChange={handlePageChange}
          itemCount={careers.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </>
  );
};

export default Careers;
