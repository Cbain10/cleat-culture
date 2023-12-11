import './Hangman.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FC, useEffect, useState } from 'react';
import { possibleWords } from './Words';
import { Nav } from '../../../components/nav/Nav';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

type HangmanProps = {}

export const Hangman: FC<HangmanProps> = ({ }) => {

    const getUniqueLetterCount = () => {
        let letters = new Set();
        for (let i = 0; i < word.length; i++) {
            letters.add(word.charAt(i));
        }
        return letters.size;
    }

    const getRandomWord = () => {
        return possibleWords[Math.floor(Math.random() * possibleWords.length)];
    }

    const [word, setWord] = useState<string>(getRandomWord());
    const [correctLetterCount, setCorrectLetterCount] = useState<number>(0);
    const [lives, setLives] = useState<number>(5);
    const [guess, setGuess] = useState<string>('');
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [correctGuess, setCorrectGuess] = useState<boolean>(false);
    const [repeatLetter, setRepeatLetter] = useState<boolean>(false);

    const uniqueLetterCount = getUniqueLetterCount();

    const handleGameOver = (message: string, timeout: number) => {
        setTimeout(() => {
            alert(message);
            restartGame();
        }, timeout);
    }

    const restartGame = () => {
        setGuessedLetters([]);
        setCorrectLetterCount(0);
        setWord(getRandomWord());
        setLives(5);
        setGuess('');
    }

    useEffect(() => {
        if (lives === 0) handleGameOver("Game over - YOU LOSE", 1000);
        if (correctLetterCount && correctLetterCount === uniqueLetterCount) handleGameOver('YOU WIN!', 600);
    }, [lives, correctLetterCount]);

    const makeGuess = () => {
        const letter = guess.charAt(0).toLowerCase();
        if (guessedLetters.includes(letter)) {
            setRepeatLetter(true);
            setGuess('');
            return;
        } else if (word.includes(letter) && !guessedLetters.includes(letter)) {
            setCorrectLetterCount(correctLetterCount + 1);
            setCorrectGuess(true);
            setRepeatLetter(false);
        } else {
            setRepeatLetter(false);
            setLives(lives - 1);
            setCorrectGuess(false);
        }
        setGuessedLetters([...guessedLetters, letter]);
        setGuess('');
    }

    const displayGuessedLetters = () => {
        const arr: any[] = guessedLetters.map(letter => {
            if (word.includes(letter)) {
                return <span>{letter}</span>
            } else {
                return <span className='highlight-text'>{letter}</span>
            }
        });
        return arr;
    }

    const handleEnter = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            makeGuess();
        }
    }

    return (
        <>
            <Nav />
            <div className='hangman-container'>
                <h1 className='hangman-title'>HANGMAN</h1>
                <div className='lives-section'>
                    {lives > 0
                        ? livesSection(lives)
                        : <h1>GAME OVER: {word}</h1>
                    }
                </div>
                <div className="correct-letters">
                    {resultSection(word, guessedLetters)}
                </div>
                <form className='guesser'>
                    <input
                        className='input-field'
                        size={1}
                        type='text'
                        value={guess}
                        autoFocus
                        onChange={(e) => { if (e.target.value.length <= 1) setGuess(e.target.value) }}
                        onKeyDown={handleEnter}
                    />
                    {!!guessedLetters.length &&
                        <span className='test-floater'>
                            {repeatLetter
                                ? <span className='highlight-text'>Already guessed letter</span>
                                : <>{correctGuess ? <CheckIcon fontSize='large' color='success'/> : <ClearIcon fontSize='large' className='highlight-text' />}</>
                            }
                        </span>
                    }
                </form>
                <div className='btn-container'>
                    <button className='btn' onClick={makeGuess} disabled={lives < 1}>Guess</button>
                    <button className='btn highlight-text' onClick={restartGame} disabled={lives < 1}>Restart</button>
                </div>
                <div className="guessed-letters">
                    <h3>Guessed Letters:</h3>
                </div>
                <div className='letters'>
                    {displayGuessedLetters().map((letter) => {
                        return <div className="chars" key={letter}>{letter}</div>
                    })}
                </div>
            </div>
        </>
    )
}

const resultSection = (word: string, guessedLetters: string[]) => {
    let lines = [];
    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.includes(word[i])) {
            lines.push(
                <span className='correct-letter' key={i}>
                    {word[i]}
                </span>
            )
        } else {
            lines.push(
                <span className='line-icon' key={i}>
                    <FontAwesomeIcon icon={faMinus} size='2x' />
                </span>
            )
        }
    }
    return lines;
}

const livesSection = (lives: number) => {
    let hearts = [];
    for (let i = 0; i < lives; i++) {
        hearts.push(
            <span key={i} className='life-icon'>
                <FontAwesomeIcon className='icon' icon={faHeart} size='3x' />
            </span>);
    }
    return hearts;
}

/*
    TODO
        *color constant!
*/