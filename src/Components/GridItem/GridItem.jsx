import React from 'react';
import { levels } from '../../helpers/imc';
import styles from './GridItem.module.css';
import upImage from '../../Assets/up.png';
import downImage from '../../Assets/down.png';

export const GridItem = props => {
  return (
    <div className={styles.main} style={{ backgroundColor: props.item.color }}>
      <div className={styles.gridIcon}>
        {props.item.icon === 'up' && <img src={upImage} />}
        {props.item.icon === 'down' && <img src={downImage} />}
      </div>
      <div className={styles.gridTitle}>{props.item.title}</div>
      {props.item.yourImc && (
        <div className={styles.yourImc}>
          Seu IMC é de {props.item.yourImc.toFixed(2)} kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        IMC está entre <strong>{props.item.imc[0]}</strong> e{' '}
        <strong>{props.item.imc[1]}</strong>
      </div>
    </div>
  );
};

export default GridItem;
