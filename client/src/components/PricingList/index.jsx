import React, { useState } from 'react';
import Pricing from './Pricing';
import dataList from './data.json';
import styles from './PricingList.module.scss';

const priceColors = ['#e0b48d', '#e8b954', '#555', '#28d2d0'];
const initialState = dataList.map((price) => ({
  id: price.id,
  isOpen: price.id === 1 ? false : true,
}));

const PricingList = () => {
  const [priceOpen, setPriceOpen] = useState(initialState);
  const handleClick = (id) => {
    setPriceOpen(
      priceOpen.map((elem) => ({
        ...elem,
        isOpen: elem.id === id ? !elem.isOpen : false,
      }))
    );
  };
  const mapDataList = (price, i) => (
    <Pricing
      onClick={() => handleClick(price.id)}
      key={price.id}
      priceInfo={price}
      priceColor={priceColors[i]}
      isOpen={priceOpen[i]}
    />
  );
  return (
  <section className={styles.main}>
    <h2 className={styles.heading}>Pricing for your <span>Logo</span></h2>
    <section className={styles.container}>
      {dataList.map(mapDataList)}
    </section>
  </section>
  );
};

export default PricingList;
