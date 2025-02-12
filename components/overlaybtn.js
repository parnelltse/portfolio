import { useState } from "react";
import styles from "./overlaybtn.module.css"; // Adjust the import to your actual styles file

const OverlayBtn = ({ title, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.obssesed}>
      {/* Apply the className prop to the button */}
      <button className={`${styles.btn} ${className}`} onClick={toggleOverlay}>
        {title}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h2>{title}</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
            <button className={styles.closeButton} onClick={toggleOverlay}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlayBtn;
