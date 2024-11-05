import Image from 'next/image';
import styles from './BoardCard.module.css';
import type { Board } from '@/src/apis/boardTypes';
import heartSvg from '@/src/assets/ic_heart.svg';
import avatarSvg from '@/src/assets/avatar.svg';

export default function BoardCard({
  title,
  image,
  writer,
  createdAt,
  likeCount,
}: Board) {
  return (
    <div className={styles.boardCard}>
      <div className={styles.contentContainer}>
        <p className={styles.title}>{title}</p>
        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt="게시판 첨부이미지"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.infoWrapper}>
          <Image src={avatarSvg} alt="avatar" width={24} height={24} />
          <span className={styles.nickname}>{writer.nickname}</span>
          <span className={styles.date}>
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className={styles.likeCountWrapper}>
          <Image src={heartSvg} alt="heardIcon" width={16} height={16} />
          <span>{likeCount}</span>
        </div>
      </div>
    </div>
  );
}
