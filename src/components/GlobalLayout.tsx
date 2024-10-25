import { ReactNode } from 'react';
import Header from './Header';
import styles from './GlobalLayout.module.css';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={'max-container'}>{children}</div>
      </main>
    </>
  );
}
