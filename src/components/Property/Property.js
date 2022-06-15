import React from "react";
import styles from "./Property.module.scss";
import PropertyCard from "./PropertyCard/PropertyCard";

const Property = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__property}>
        <div className={styles.wrapper__property__title}>
          <h3>Our Property</h3>
          <h1>Latest Property</h1>
        </div>
        <div className={styles.wrapper__property__card}>
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <div className={styles.wrapper__property__see}>
          <button>See All</button>
        </div>
      </div>
    </div>
  );
};

export default Property;
