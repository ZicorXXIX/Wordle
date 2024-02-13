import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => (
          <p className="guess" key={index}>
            {guess}
          </p>
        ))}
      </div>
    </div>
  );
}

export default GuessResults;
