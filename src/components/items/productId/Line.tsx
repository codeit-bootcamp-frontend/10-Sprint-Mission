import React from 'react';
import styles from './Line.module.css';

interface LineProps {
  marginTop?: number;
  marginBottom?: number;
}

const Line: React.FC<LineProps> = ({
  marginTop = 0,
  marginBottom = 0
}) => {
  return (
    <hr style={{ marginTop: marginTop, marginBottom: marginBottom }} className={styles['line']} />
  );
};

export default Line;
