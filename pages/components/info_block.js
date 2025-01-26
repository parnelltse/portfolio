import styles from "./info_block.module.css";
import React from "react";

const InfoBlock = ({ items, className }) => {
  return React.createElement(
    'div',
    { className: `${styles.container} ${className}` },
    items.map((item, index) => {
      return React.createElement(
        'div',
        { key: index },
        React.createElement('h3', { className: styles.title }, item.title),
        React.createElement('p', { className: styles.bodyText }, item.bodyText)
      );
    })
  );
};

export default InfoBlock;
