import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} max-container`}>
        <Link
          href={'/'}
          className={styles.logoWrapper}
          aria-label="홈으로 이동"
        />
        <nav className={styles.nav}>
          <Link href={'/boards'}>자유게시판</Link>
          <Link href={'/'}>중고마켓</Link>
        </nav>
        <div className={styles.avatarWrapper}>
          <Image fill src="/images/avatar.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
}
