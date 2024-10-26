import Image from "next/image";
import medalIcon from "@/public/ic_medal.svg";
import styles from "./Badge.module.css";

const Badge = () => {
  return (
    <div className={styles.badge}>
      <Image src={medalIcon} className={styles.medal} alt="메달 아이콘" />
      Best
    </div>
  );
};

export default Badge;
