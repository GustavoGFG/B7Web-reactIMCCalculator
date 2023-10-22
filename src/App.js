import styles from './App.module.css';
import powered from './Assets/powered.png';
import leftArrowImage from './Assets/leftarrow.png';
import { React, useState } from 'react';
import { levels, calculateImc } from './helpers/imc.js';
import { GridItem } from './Components/GridItem/GridItem';

function App() {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const handleCalculateIMC = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
      setHeightField('');
      setWeightField('');
    } else {
      alert('Preencha todos os campos.');
    }
  };

  const handleBackButton = () => {
    for (let level of levels) {
      if (level.yourImc) {
        delete level.yourImc;
      }
    }
    setToShow(null);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powered} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
            value={heightField !== 0 ? heightField : ''}
            onChange={e => {
              setHeightField(parseFloat(e.target.value));
            }}
          />

          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
            value={weightField !== 0 ? weightField : ''}
            onChange={e => {
              setWeightField(parseFloat(e.target.value));
            }}
          />

          <button onClick={handleCalculateIMC}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => {
                return <GridItem key={key} item={item} />;
              })}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div onClick={handleBackButton} className={styles.rightArrow}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
