import React from 'react'
import styles from './Banner.module.css'

const Banner = ({Image, Title}) => {
  return (
    <>
    <div className={styles.bannerCont}>
        <div className={styles.imgBox}>
          <img src={Image} alt={Title} />
        </div>
        <div className={styles.title}>
          <h2>{Title}</h2>
        </div>
    </div>
    </>
  )
}

export default Banner
