/* eslint-disable react/prop-types */
import Nav from './components/Nav';
import styles from './App.module.css';
import './App.font.css';
import { useLocation } from 'react-router-dom';

function App({ children }) {
  const location = useLocation();
  return (
    <>
      <Nav className={styles.nav} pathname={location.pathname} />
      <div className={styles.body}>{children}</div>
    </>
  );
}

export default App;
