import { useRef, useState } from 'react';
import styles from './InquireItem.module.css';
import { ReactComponent as EllipsisIcon } from 'assets/imgs/ic_ellipsis.svg';

interface InquireItemProps {
  setCommentData: React.Dispatch<React.SetStateAction<string[]>>;
  commentData: string[];
  content: string;
  userNickname: string;
  userImage?: string;
  updateAt: string;
}

const InquireItem: React.FC<InquireItemProps> = ({
  setCommentData,
  commentData,
  content,
  userNickname,
  userImage = 'assets/imgs/user_icon.svg',
  updateAt,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [patchComment, setPatchComment] = useState(content);
  const [isPatchClicked, setIsPatchClicked] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const timeDifferenceFromNow = (pastTime: string): string => {
    const now = new Date();
    const pastDate = new Date(pastTime);

    const diffInMs = now.getTime() - pastDate.getTime();

    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) {
      return "방금 전";
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInDays}일 전`;
    }
  }

  const handlePatch = () => {
    setIsDropdownOpen(false);
    setIsPatchClicked(true);
  }

  const handleDelete = () => {
    setIsDropdownOpen(false);
    setCommentData(commentData.filter((comment: any) => comment.content !== content));
  }

  const handlePatchComment = () => {
    setIsPatchClicked(false);
    if (textAreaRef.current) {
      setPatchComment(textAreaRef.current.value);
    }
  }

  const handleCancelPatch = () => {
    setIsPatchClicked(false);
  }

  return (
    <div ref={containerRef} className={styles['container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['content']}>
          {isPatchClicked ? 
          <div className={styles['patch-container']}>
            <textarea
              ref={textAreaRef}
              className={styles['patch-text']}
              placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
              value={patchComment}
              onChange={(e) => setPatchComment(e.target.value)}
            />
            <div className={styles['patch-content']}>
              <span className={styles['patch-cancel']} onClick={handleCancelPatch}>취소</span>
              <button className={styles['patch-button']} onClick={handlePatchComment}>
                수정완료
              </button>
            </div>
          </div>
          :
          <>
            {patchComment} 
            <span className={styles['ellipsis']} onClick={() => setIsDropdownOpen(!isDropdownOpen)}><EllipsisIcon /></span>
          </>
          }
        </div>
        {isDropdownOpen && (
          <div className={styles['dropdown']}>
            <span onClick={handlePatch} className={styles['dropdown-item']}>수정하기</span>
            <span onClick={handleDelete} className={styles['dropdown-item']}>삭제하기</span>
          </div>
        )}
      </div>
      <div className={styles['user-info']}>
        <img className={styles['user-image']} src={userImage} alt="user" />
        <div className={styles['user-info-content']}>
          <p className={styles['user-nickname']}>{userNickname}</p>
          <p className={styles['updateAt']}>{timeDifferenceFromNow(updateAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default InquireItem;
