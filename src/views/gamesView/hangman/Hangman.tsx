import './Hangman.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FC, useEffect, useState } from 'react';
import { possibleWords } from './Words';
import { Nav } from '../../../components/nav/Nav';

type HangmanProps = {}

export const Hangman: FC<HangmanProps> = ({ }) => {

    const [word, setWord] = useState<string>('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * possibleWords.length);
        setWord(possibleWords[randomIndex]);
        console.log(possibleWords[randomIndex]);
    }, []);

    const getUniqueLetterCount = () => {
        let letters = new Set();
        for (let i = 0; i < word.length; i++) {
            letters.add(word.charAt(i));
        }
        return letters.size;
    }

    const uniqueLetterCount = getUniqueLetterCount();
    const [correctLetterCount, setCorrectLetterCount] = useState<number>(0);

    const [lives, setLives] = useState<number>(5);
    const [guess, setGuess] = useState<string>('');
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    
    const livesSection = () => {
        let hearts = [];
        for (let i = 0; i < lives; i++) {
            hearts.push(
                <span key={i} className='life-icon'>
                    <FontAwesomeIcon className='icon' icon={faHeart} size='3x' />
                </span>);
        }
        return hearts;
    }

    const resultSection = () => {
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

    useEffect(() => {
        if (lives === 0) {
            console.log('game over');
        }
    }, [lives]);

    useEffect(() => {
        if (correctLetterCount === uniqueLetterCount) {
            console.log('YOU WIN');
            setTimeout(() => {
                // alert('YOU WIN');
            }, 1000);
        }
    }, [correctLetterCount]);

    const makeGuess = () => {
        const letter = guess.charAt(0);
        if (guessedLetters.includes(letter)) {
            console.log('guess already made');
            setGuess('');
            return;
        } else if (word.includes(letter) && !guessedLetters.includes(letter)) {
            console.log('correct!');
            setCorrectLetterCount(correctLetterCount + 1);
        } else {
            console.log('wrong guess');
            setLives(lives - 1);
        }
        setGuessedLetters([...guessedLetters, letter]);
        setGuess('');
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
            <h1>HANGMAN</h1>
            <div className='lives-section'>
                {lives > 0
                    ? livesSection()
                    : <h1>GAME OVER: {word}</h1>
                }
            </div>
            <div className="correct-letters">
                {resultSection()}
            </div>
            <div className="guesser">
                <form className='guesser'>
                    <input
                        className='input-field'
                        type='text'
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                </form>
                <button className='submit-guess-btn' onClick={makeGuess} disabled={lives < 1}>Guess</button>
            </div>
            {guessedLetters.length > 0 &&
                <>
                    <div className="guessed-letters">
                        <h3>Guessed Letters:</h3>
                    </div>
                    <div className='letters'>
                        {guessedLetters.map((letter) => {
                            return <div className="chars" key={letter}>{letter}</div>
                        })}
                    </div>
                </>
            }
        </>
    )
}