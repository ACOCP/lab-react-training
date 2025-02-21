import React, { useState } from 'react';

import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import emptyDice from '../assets/images/dice-empty.png';

const Dice = () => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [currentDice, setCurrentDice] = useState(dice1);

  const rollDice = () => {
    setCurrentDice(emptyDice); 

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentDice(diceImages[randomIndex]);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h1>Dice Roller</h1>
      <div onClick={rollDice} style={styles.diceContainer}>
        <img src={currentDice} alt="Dice" style={styles.diceImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  diceContainer: {
    cursor: 'pointer',
    marginTop: '20px',
  },
  diceImage: {
    width: '120px',
    height: '120px',
  },
};

export default Dice;
