import React, { useState, useEffect } from 'react';
import styles from './Pricing.module.scss';
import CONSTANTS from '../../../constants';

const Pricing = (props) => {
  const {
    priceInfo: {
      title,
      subTitle,
      beforeItems,
      items,
      afterItems,
      price: { amount, currncy },
    },
    priceColor,
    isOpen: { isOpen },
    onClick,
  } = props;
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  const colorBorderMB =
    width < CONSTANTS.MIN_WIDTH_PRICING ? priceColor : '#fff';
  const colorBorderDT =
    width > CONSTANTS.MIN_WIDTH_PRICING ? priceColor : '#fff';
  return (
    <article
      className={styles.container}
      style={{ borderColor: colorBorderMB }}
    >
      <div className={styles.header} style={{ borderColor: colorBorderDT }}>
        <h2 style={{ color: priceColor }}>{title}</h2>
        {width > CONSTANTS.MIN_WIDTH_PRICING && (
          <p className={styles.subTitle}>{subTitle}</p>
        )}
        <p style={{ color: priceColor }}>
          {currncy}
          {amount}
        </p>
        {width < CONSTANTS.MIN_WIDTH_PRICING && (
          <button onClick={onClick} style={{ color: priceColor }}>
            {!isOpen ? '▼' : '▲'}
          </button>
        )}
      </div>
      <div>
        {(isOpen || width > CONSTANTS.MIN_WIDTH_PRICING) &&
          beforeItems.map(({ content, tooltip }, index) => (
            <p className={styles.content} key={index}>
              {content}
              {(tooltip || width > CONSTANTS.MIN_WIDTH_PRICING) && (
                <span className={styles.tooltip}>
                  {width > CONSTANTS.MIN_WIDTH_PRICING && tooltip}
                </span>
              )}
            </p>
          ))}
        {(isOpen || width > CONSTANTS.MIN_WIDTH_PRICING) &&
          items.map(({ content, tooltip }, index) => (
            <li key={index} className={styles.content_items}>
              {content}
              {(tooltip || width > CONSTANTS.MIN_WIDTH_PRICING) && 
                <span className={styles.tooltip}>
                  {width > CONSTANTS.MIN_WIDTH_PRICING && tooltip}
                </span>
              }
            </li>
          ))}
        {(isOpen || width > CONSTANTS.MIN_WIDTH_PRICING) &&
          afterItems.map(({ content, tooltip }, index) => (
            <p key={index} className={styles.content}>
              {content}
              {(tooltip || width > CONSTANTS.MIN_WIDTH_PRICING) && (
                <span className={styles.tooltip}>
                  {width > CONSTANTS.MIN_WIDTH_PRICING && tooltip}
                </span>
              )}
            </p>
          ))}
      </div>
      {(isOpen || width > CONSTANTS.MIN_WIDTH_PRICING) && (
        <button className={styles.btn} style={{ backgroundColor: priceColor }}>
          ✔ Start
        </button>
      )}
    </article>
  );
};

export default Pricing;
