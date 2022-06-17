import React from 'react'
import TestimonialCard from './TestimonialCard/TestimonialCard'

import styles from './Testimonial.module.scss'

const Testimonial = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.wrapper__testimonial}>
      <div className={styles.wrapper__testimonial__title}>
        <h3>Properties</h3>
        <h1>testimonial Properties</h1>
      </div>
      <div className={styles.wrapper__testimonial__card}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className={styles.wrapper__testimonial__see}>
        <button>See All</button>
      </div>
    </div>
  </div>
  )
}

export default Testimonial