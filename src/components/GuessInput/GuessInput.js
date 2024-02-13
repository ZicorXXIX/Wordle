import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          onChange={e => {
            console.log(e.target.value);
            setGuess(event.target.value.toUpperCase());
          }}
          value={guess}
          pattern="[a-zA-Z]{5}"
          title="Enter a 5 letter Word"
          required
        />
      </form>
    </div>
  );
}

export default GuessInput;
