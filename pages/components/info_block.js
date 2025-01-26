import styles from "./info_block.module.css";
import React from "react";

const InfoBlock = ({ items = [], className }) => {
  if (!Array.isArray(items)) {
    console.error("Expected 'items' to be an array but got:", typeof items);
    return null;  // Return null or fallback UI if 'items' is not an array
  }

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
