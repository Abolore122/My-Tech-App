import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.partnerLogosParent, className].join(" ")}>
      <div className={styles.partnerLogos}>
        <div className={styles.image137Wrapper}>
          <img
            className={styles.image137Icon}
            loading="lazy"
            alt=""
            src="/image 137.png"
          />
        </div>
        <div className={styles.image138Wrapper}>
          <img
            className={styles.image137Icon}
            loading="lazy"
            alt=""
            src="/image 138.png"
          />
        </div>
        <div className={styles.image139Wrapper}>
          <img
            className={styles.image137Icon}
            loading="lazy"
            alt=""
            src="/image 139.png"
          />
        </div>
        <div className={styles.image140Parent}>
          <img className={styles.image140Icon} alt="" src="/image 140.png" />
          <img
            className={styles.image141Icon}
            loading="lazy"
            alt=""
            src="/image 141.png"
          />
        </div>
      </div>
      <div className={styles.image142Wrapper}>
        <img
          className={styles.image137Icon}
          loading="lazy"
          alt=""
          src="/image 142.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
