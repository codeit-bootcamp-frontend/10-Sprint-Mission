import React from 'react';
import styles from './CommentItem.module.css';

const elapsedTime = (date:string) => {
	const start = new Date(date);
	const end = new Date();

	const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
	if (seconds < 60) return '방금 전';

	const minutes = seconds / 60;
	if (minutes < 60) return `${Math.floor(minutes)}분 전`;

	const hours = minutes / 60;
	if (hours < 24) return `${Math.floor(hours)}시간 전`;

	const days = hours / 24;
	return `${Math.floor(days)}일 전`;
};

interface Comment {
    id:number;
    writer:Writer;
    content:string;
    createdAt:string;
    updatedAt:string;
  }

interface Writer {
    image: string;
    nickname:string;
    id:number;
}
  
const CommentItem:React.FC<{ item: Comment }> = ({item}) => {
    
  return (
    <>
        <div className={styles.commentItemContainer}>
            <div className={styles.commentItemBox}>
                <div className={styles.commentText}>{item.content}</div>
                <div className={styles.writerInfo}>
                    <div className={styles.profileBox}>
                        <img className={styles.profileImg} src={item.writer.image} alt='프로필 이미지'></img>
                        <div className={styles.profileTextBox}>
                            <p className={styles.userName}>{item.writer.nickname}</p>
                            <p className={styles.updatedAt}>{elapsedTime(item.updatedAt)}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <hr></hr>
        </div>
    </>
  )
}

export default CommentItem