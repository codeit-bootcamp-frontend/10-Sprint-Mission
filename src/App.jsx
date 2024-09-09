/* eslint-disable react/prop-types */
import Nav from './components/Nav';
import styles from './App.module.css';
import './App.font.css';

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
    </>
  );
}

export default App;
