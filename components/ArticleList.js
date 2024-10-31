import Link from 'next/link';
import styles from '@/styles/ArticleList.module.css';
import Medal from '@/image/ic_medal.svg';
import Heart from '@/image/ic_heart.svg';

export default function ArticleList({ articles = [] }) {
  return (
    <ul className={styles.articleList}>
      {articles.map((article) => (
        <li key={article.id}>
          <Link className={styles.article} href={`/boards/${article.id}`}>
            <div className={styles.topBanner}>
              <Medal />
              <h4 className={styles.best}>Best</h4>
            </div>
            <div className={styles.insideSection}>
              <div className={styles.firstSection}>
                <h3 className={styles.articleContent}>{article.content}</h3>
                <img
                  className={styles.articleImage}
                  src={article.image}
                  width="50"
                  height="50"
                  alt={article.title}
                />
              </div>
              <div className={styles.secondSection}>
                <div className={styles.firstLikeSection}>
                  <span className={styles.articleNickname}>
                    {article.writer.nickname}
                  </span>
                  <div className={styles.likeSection}>
                    <Heart />
                    {article.likeCount}
                  </div>
                </div>
                <span className={styles.articleUpdate}>
                  {article.updatedAt.split('T')[0]}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
