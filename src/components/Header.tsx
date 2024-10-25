import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} max-container`}>
        <Link href={'/'}>
          <div className={styles.logoWrapper}>
            <Image fill src="/images/logo_lg.png" alt="logo" />
          </div>
        </Link>
        <nav className={styles.nav}>
          <Link href={'/'}>자유게시판</Link>
          <Link href={'/'}>중고마켓</Link>
        </nav>
        <div className={styles.avatarWrapper}>
          <Image fill src="/images/avatar.svg" alt="avatar" />
        </div>
      </div>
    </header>
  );
}
