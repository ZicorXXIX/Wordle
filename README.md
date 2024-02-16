# Wordle Clone

This repository contains the source code for a Wordle clone built using React. The project is designed to recreate the popular online word game Wordle, where users have 6 attempts to guess a 5-letter word.

## Getting Started

This project is created with Parcel, a modern JS build tool, and is intended to be run locally on your computer using Node.js and NPM.

### Prerequisites

- Node.js and NPM installed on your local machine.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Start the development server by running `npm run dev`.

## Project Structure

The project is divided into several components and utilities, each with a specific role in the game's functionality.

### Components

- `GuessInput`: A component for the user to input their guess.
- `GuessResults`: A component to display the user's previous guesses.
- `Guess`: A component to represent each individual guess.
- `GameOverBanner`: A component to display the game over banner with the result of the game.
- `Keyboard`: (Stretch goal) A component to display a visual keyboard.

### Utilities

- `range`: A utility function to generate arrays of a specified length.
- `NUM_OF_GUESSES_ALLOWED`: A constant to define the number of allowed guesses.

### Helpers

- `checkGuess`: A helper function to validate the user's guess against the correct answer.

## Demonstration

Here's a GIF showing the initial state of the game:

![Initial Game State](./docs/wordle-demo.gif)

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Josh Comeau for the Joy of React course structure.
- The Wordle game creators for inspiring this project.
