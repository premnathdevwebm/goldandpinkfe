import { useState, useEffect } from "react";
import styles from "./HeartPump.module.css";

const HeartPump = () => {
    const [isPumping, setIsPumping] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setIsPumping(() => true);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className={styles.gridcontainer}>
      <div className={styles.fullwidthColumn}>
          <div className={`${styles.heart} ${isPumping ? styles.pumping : ""}`}>
            <img src="/heart.png" width={350} height={350} alt="company" />
          </div>
      </div>
    </div>
  );
};

export default HeartPump;
