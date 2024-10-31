import Link from 'next/link';
import styles from '@/styles/BehindList.module.css';
import Heart from '@/image/ic_heart.svg';
import Profile from '@/image/ic_profile.svg';

export default function BehindList({ articles = [] }) {
  return (
    <ul className={styles.articleList}>
      {articles.map((article) => (
        <li key={article.id}>
          <Link className={styles.article} href={`/boards/${article.id}`}>
            <div className={styles.insideSection}>
              <div className={styles.firstSection}>
                <h3 className={styles.articleContent}>{article.content}</h3>
                <br />
                <img
                  className={styles.articleImage}
                  src={article.image}
                  width="50"
                  height="50"
                  alt={article.title}
                />
              </div>
              <div className={styles.secondSection}>
                <div className={styles.firstContain}>
                  <Profile className={styles.profileIcon} />
                  <span className={styles.articleNickname}>
                    {article.writer.nickname}
                  </span>
                  <span className={styles.articleUpdate}>
                    {article.updatedAt.split('T')[0]}
                  </span>
                </div>
                <div className={styles.likeSection}>
                  <Heart />
                  {article.likeCount}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
