import React from "react";
import styles from "./Blog.module.scss";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__blog}>
        <div className={styles.wrapper__blog__title}>
          <h3>Our blog</h3>
          <h1>Latest blog</h1>
        </div>
        <div className={styles.wrapper__blog__card}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className={styles.wrapper__blog__see}>
          <button>See All</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
