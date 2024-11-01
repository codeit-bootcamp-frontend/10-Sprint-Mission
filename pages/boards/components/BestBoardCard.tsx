import Image from 'next/image';
import styles from './BestBoardCard.module.css';
import medalSvg from '@/src/assets/ic_medal.svg';
import heardSvg from '@/src/assets/ic_heart.svg';
import type { Board } from '@/src/apis/boardTypes';

interface BestBoardCardProps
  extends Pick<
    Board,
    'title' | 'image' | 'writer' | 'likeCount' | 'createdAt'
  > {}

export default function BestBoardCard({
  title,
  image,
  writer,
  likeCount,
  createdAt,
}: BestBoardCardProps) {
  return (
    <div className={styles.bestBoardCardContainer}>
      <div className={styles.bestBoardBadge}>
        <Image src={medalSvg} alt="medal" width={16} height={16} />
        <span className={styles.bestText}>Best</span>
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.contentTitle}>{title}</h4>
        <div className={styles.contentImgWrapper}>
          <Image src={image} alt="medal" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <span>{writer.nickname}</span>
        <div className={styles.likeCountWrapper}>
          <Image src={heardSvg} alt="heardIcon" width={16} height={16} />
          <span>{likeCount}</span>
        </div>
        <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
