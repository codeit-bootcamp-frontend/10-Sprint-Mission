import Image from 'next/image';
import styles from './BestBoardCard.module.css';
import medalSvg from '@/src/assets/ic_medal.svg';
import heardSvg from '@/src/assets/ic_heart.svg';

export default function BestBoardCard() {
  return (
    <div className={styles.bestBoardCardContainer}>
      <div className={styles.bestBoardBadge}>
        <Image src={medalSvg} alt="medal" width={16} height={16} />
        <span className={styles.bestText}>Best</span>
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.contentTitle}>
          맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?
        </h4>
        <div className={styles.contentImgWrapper}>
          <Image
            src={medalSvg}
            alt="medal"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <span>총명한판다</span>
        <div className={styles.likeCountWrapper}>
          <Image src={heardSvg} alt="heardIcon" width={16} height={16} />
          <span>9999+</span>
        </div>
        <span>2024. 04. 16</span>
      </div>
    </div>
  );
}
