import React, { useState, useEffect } from 'react';
import styles from './Pricing.module.scss';

const Pricing = (props) => {
  const {
    priceInfo: { title, subTitle, beforeItems },
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
  return (
    <article onClick={onClick}>
      <div style={{ border: '10px solid #fff', borderColor: priceColor }}>
        <h2>{title}</h2>
        {width > 772 && <p>{subTitle}</p>}
        {isOpen &&
          beforeItems.map(({ content, tooltip }, i) => (
            <p className={styles.content} key={i} data-tooltip={tooltip}>
              {content} <span>{width > 772 && tooltip}</span>
            </p>
          ))}
      </div>
    </article>
  );
};

export default Pricing;
