import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.spaceDiv}></div>
      <div className={styles.leftSide}>
        <img src="images/panda-logo.svg" />
        <div className={styles.navigateUi}>
          <div>자유게시판</div>
          <div>중고마켓</div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <img src="images/user-icon.svg" />
      </div>
      <div className={styles.spaceDiv}></div>
    </div>
  );
}

export default Nav;
