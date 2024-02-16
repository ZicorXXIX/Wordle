import React from 'react';
import { KEYS } from '../../data';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];
    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANK = {
      correct: 1,
      misplace: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANK[status];
    const newStatusRank = STATUS_RANK[status];

    if (newStatusRank < currentStatusRank) {
      stausObj[letter] = status;
    }
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  const statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map(letter => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter] || ''}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
