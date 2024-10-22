import { ChangeEvent, useRef } from 'react';
import styles from './Inquire.module.css';

const Inquire = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) {
      if(buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    } else {
      if(buttonRef.current) {
        buttonRef.current.disabled = true;
      }
    }
  }

  return (
    <div className={styles['container']}>
      <p className={styles['inquire-title']}>문의하기</p>
      <textarea
        onChange={onChange}
        className={styles['inquire-text']}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <button ref={buttonRef} className={styles['inquire-button']} disabled>등록</button>
    </div>
  );
};

export default Inquire;
