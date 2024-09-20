import BestItem from '../components/BestItem';
import Container from '../components/Container';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <Container>
      <BestItem className={styles.container} />
    </Container>
  );
}

export default HomePage;
