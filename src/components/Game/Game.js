import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LoseBanner from '../LoseBanner/LoseBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('running');

  const validatedGuesses = guesses.map(guess => checkGuess(guess, answer));
  function handleSubmitGuess(guess) {
    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess);
    if (guess === answer) {
      setGameState('won');
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lose');
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameState={gameState} handleSubmitGuess={handleSubmitGuess} />
      {gameState === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameState === 'lose' && <LoseBanner answer={answer} />}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
