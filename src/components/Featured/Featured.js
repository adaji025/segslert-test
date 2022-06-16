import React from 'react'
import FeaturedCard from './FeaturedCard/FeaturedCard'
import styles from './Featured.module.scss'

const Featured = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__featured}>
        <div className={styles.wrapper__featured__title}>
          <h3>Properties</h3>
          <h1>Featured Properties</h1>
        </div>
        <div className={styles.wrapper__featured__card}>
          <FeaturedCard />
          <FeaturedCard />
        </div>
        <div className={styles.wrapper__featured__see}>
          <button>See All</button>
        </div>
      </div>
    </div>
  )
}

export default Featured