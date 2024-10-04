import React from "react";
import { addFav } from "../redux/actions/Fav";
import { connect } from "react-redux";
import styles from "./book.module.css";

function Book({ title, subTitle, author, date, rating, link, Fav, ele, thumb }) {
  return (
    <div className={styles.bookCard}>
      <img src={`${thumb}`} alt="" className={styles.bookImg} />
      <div className={styles.bookInfo}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
        <div className={styles.bookDetails}>
          <p className={styles.date}>{date}</p>
          {rating && (
            <div className={styles.rating}>
              <span className={styles.ratingText}>Rating:</span>
              <span className={styles.ratingValue}>{rating}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.favButton}`} onClick={() => Fav(ele)}>
          <span className={styles.buttonIcon}>♥</span> Favorite
        </button>
        <a style={{ textDecoration: "none" }} href={link} target="_blank" rel="noopener noreferrer">
          <button className={`${styles.button} ${styles.readButton}`}>
            <span className={styles.buttonIcon}>👁</span> Read
          </button>
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  Fav: (ele) => dispatch(addFav(ele)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
