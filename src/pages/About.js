import React from "react";
import styles from "./About.module.css";
import Images from "../common/Images";
import Headers from "../components/Header";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Banner from "../components/Banner";

const About = () => {
  
  const gallery = [
    {
      id: 1,
      image: Images.gallery_image_1,
    },
    {
      id: 2,
      image: Images.gallery_image_2,
    },
    {
      id: 3,
      image: Images.gallery_image_3,
    },
    {
      id: 4,
      image: Images.gallery_image_4,
    },
    {
      id: 5,
      image: Images.gallery_image_5,
    },
    {
      id: 6,
      image: Images.gallery_image_6,
    },
    {
      id: 7,
      image: Images.gallery_image_7,
    },
    {
      id: 8,
      image: Images.gallery_image_8,
    },
    {
      id: 9,
      image: Images.gallery_image_9,
    },
    {
      id: 10,
      image: Images.gallery_image_10,
    },
    {
      id: 11,
      image: Images.gallery_image_11,
    },
    {
      id: 12,
      image: Images.gallery_image_12,
    },
    {
      id: 13,
      image: Images.gallery_image_13,
    },
    {
      id: 14,
      image: Images.gallery_image_14,
    },
    {
      id: 15,
      image: Images.gallery_image_15,
    },
  ];

  const Team = [
    {
      id: 1,
      name: "Shuaib",
      designation : "Director",
      image: ""
    },
    {
      id: 2,
      name: "Adil",
      designation : "Associate Director",
      image: ""
    },
    {
      id: 3,
      name: "Mohamed Ibrahim",
      designation : "Director of Operations",
      image: ""
    },
    {
      id: 4,
      name: "Aayaz Basha",
      designation : "Senior Consultant",
      image: ""
    },
    {
      id: 5,
      name: "Mohammed Maseeullah",
      designation : "Senior Consultant",
      image: ""
    },
    {
      id: 6,
      name: "Mohammed Ashraf",
      designation : "Senior. Consultant",
      image: ""
    },
    {
      id: 7,
      name: "Mohammed Hassan",
      designation : "Portfolio Manager",
      image: ""
    },
    {
      id: 8,
      name: "Adnan Qurishi",
      designation : "Manager - FSS ",
      image: ""
    },
    {
      id: 9,
      name: "Usama P",
      designation : "Vertical Lead",
      image: ""
    },
    {
      id: 10,
      name: "Waseem Ahmed",
      designation : "Client Relationship Executive",
      image: ""
    },
    {
      id: 11,
      name: "Alfaz",
      designation : "Senior Associate",
      image: ""
    },
    {
      id: 12,
      name: "Nihad Ahmed",
      designation : "BDE & Talent Acquisition ",
      image: ""
    },
    {
      id: 13,
      name: "Hiba Aamina",
      designation : "Talent Acquisition Specialist",
      image: ""
    },
    {
      id: 14,
      name: "Umme Aiman ",
      designation : "Talent Acquisition Specialist ",
      image: ""
    },
  ]

  return (
    <>
      <Banner Image={Images.about_banner} Title={"About Us"} />
      <div className={styles.visionCont}>
        {/* <div className={styles.headingBox}> */}
        <Headers title="Our Vision" />
        {/* </div> */}
        <div className={styles.mainCont}>
          <div className={styles.leftCont}>
            <div className={styles.objCont}>
              <img src={Images.about_women} alt="about_women" />
              <div className={styles.imgCont}>
                <p>
                  Your Trust, <br />
                  Our
                  <br /> Commitment to Excellence
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightCont}>
            <p>
              Our vision is to be a globally recognized leader, driving
              innovation in talent solutions, stock, and crypto services. We aim
              to empower clients by delivering exceptional value, fostering
              growth, and positively impacting the financial landscape.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.galleryCont}>
        <Headers title="Our Gallery" />
        <div className={styles.galleryPic}>
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            className={`${styles.swiperTest} mySwiper`}
          >
            {gallery.map((item) => (
              <SwiperSlide className={styles.swiperBox}>
                <div className={styles.imgBox} key={item.id}>
                  <img src={item.image} alt="image_gallery" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.crs_animat}>
        <img src={Images.f_logo} alt="logo_animate" />
        {/* <video autoPlay loop className={styles.pic}>{Images.logo_animateion}</video>     */}
      </div>
      <div className={styles.teamCont}>
        <div className={styles.head}>
          <h1>
            Time to <span>Meet</span> Our Team
          </h1>
        </div>
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
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className={`${styles.swiperTeamCont} mySwiper`}
        >
          {Team.map((item) => (
            <SwiperSlide className={styles.swiperteam}>
              <div className={styles.teamBox} key={item.id}>
                <div className={styles.leftImg}>
                  <img src={Images.women_2} alt={item.name} />
                </div>
                <div className={styles.rightBox}>
                  <h3>{item.name}</h3>
                  <h4>{item.designation}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className={styles.teamBox}>
          <div className={styles.leftImg}>
            <img src={Images.women_2} alt='team_Image' />
          </div>
          <div className={styles.rightBox}>
            <h2>Ibrahim</h2>
            <h4>Director</h4>
          </div>
        </div>    */}
      </div>
    </>
  );
};

export default About;
