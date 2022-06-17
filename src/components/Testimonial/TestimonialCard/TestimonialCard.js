import React from 'react'
import styles from './TestimonialCard.module.scss'

import pp from '../../../assets/images/pp.jpeg'

const TestimonialCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.card__image}>
            <img src={pp} alt="" />
            <h2>Adaji Mukhtar</h2>
            <p>@see_serious</p>
            <p>Its been a long established fact that render will be distracted by readable</p>
        </div>
    </div>
  )
}

export default TestimonialCard