import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import facebookIcon from "@/public/ic_facebook.svg";
import twitterIcon from "@/public/ic_twitter.svg";
import youtubeIcon from "@/public/ic_youtube.svg";
import instagramIcon from "@/public/ic_instagram.svg";

const Home = () => {
  return (
    <>
      <section className={styles.banner}>
        <div
          className={`${styles.bannerContainer} ${styles.bannerContainerTop}`}
        >
          <div className={`${styles.intro} ${styles.introTop}`}>
            <h2>
              일상의 모든 물건을
              <br className={styles.responsiveBr} />
              거래해 보세요
            </h2>
            <Link href="/items">구경하러 가기</Link>
          </div>
          <div className={`${styles.bannerTopImg} ${styles.img}`}></div>
        </div>
      </section>
      <section className={styles.card}>
        <div className={`${styles.cardContainer} ${styles.cardLight}`}>
          <div className={styles.cardContent}>
            <div className={`${styles.cardImg} ${styles.img}`}></div>
            <div className={styles.cardInfo}>
              <span>Hot item</span>
              <strong>
                인기 상품을 <br className={styles.responsiveBr} />
                확인해 보세요
              </strong>
              <p>
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.cardContainer} ${styles.cardLeft}`}>
          <div className={styles.cardContent}>
            <div className={`${styles.cardImg} ${styles.img}`}></div>
            <div className={styles.cardInfo}>
              <span>Search</span>
              <strong>
                구매를 원하는 <br className={styles.responsiveBr} />
                상품을 검색 하세요
              </strong>
              <p>
                구매하고 싶은 물픔은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.cardContainer} ${styles.cardLight}`}>
          <div className={styles.cardContent}>
            <div className={`${styles.cardImg} ${styles.img}`}></div>
            <div className={styles.cardInfo}>
              <span>Register</span>
              <strong>
                판매를 원하는 <br className={styles.responsiveBr} />
                상품을 등록하세요
              </strong>
              <p>
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.banner}>
        <div
          className={`${styles.bannerContainer} ${styles.bannerContainerBottom}`}
        >
          <div className={`${styles.intro} ${styles.introBottom}`}>
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
          </div>
          <div className={`${styles.bannerBottomImg} ${styles.img}`}></div>
        </div>
      </section>
      <footer className={styles.footerContainer}>
        <div className={styles.footerInfo}>©codeit - 2024</div>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className={styles.footerSocial}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebookIcon} alt="facebook" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <Image src={twitterIcon} alt="x" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={youtubeIcon} alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagramIcon} alt="instagram" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
