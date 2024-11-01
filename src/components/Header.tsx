import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import avatarSvg from '@/src/assets/avatar.svg';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link
          href={'/'}
          className={styles.logoWrapper}
          aria-label="홈으로 이동"
        />
        <nav className={styles.nav}>
          <Link
            href={'/boards'}
            className={`link ${pathname === '/boards' ? styles.active : ''}`}
          >
            자유게시판
          </Link>
          <Link
            href={'/'}
            className={`link ${pathname === '/' ? styles.active : ''}`}
          >
            중고마켓
          </Link>
        </nav>
        <div className={styles.avatarWrapper}>
          <Image fill src={avatarSvg} alt="avatar" />
        </div>
      </div>
    </header>
  );
}
