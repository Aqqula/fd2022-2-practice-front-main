import React from 'react';
import CONSTANTS from '../../constants';
import styles from './Advantages.module.sass';
import advantages from './advantages.json';

const Advantages = () => {
  const renderCard = ({ imgPath, imgAlt, title, content },i) => (
    <article key={i} className={styles.card}>
      <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${imgPath}`} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
  return (
    <section className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>{advantages.map(renderCard)}</div>
    </section>
  );
};

export default Advantages;
