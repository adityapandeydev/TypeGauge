import { useState, useEffect } from "react";
import { useTypingStore } from "../stores/useTypingStore";

type TypingError = {
    state: false;
} | {
    state: true;
    at: number;
}

const useTypingInput = ({words} : {words: string[]}) => {
    const totalWords = words.length;

    const [index, setIndex] = useState(0);
    const [typed, setTyped] = useState("");
    const [error, setError] = useState<TypingError>({state: false});
    const [alreadyTypedWords, setAlreadyTypedWords] = useState(0);

    const updateCorrectMark = useTypingStore((state) => state.updateCorrectMark);
    const updateIncorrectMark = useTypingStore((state) => state.updateIncorrectMark);

    const raceComplete = index >= totalWords;

    useEffect(() => {
        if(raceComplete) {
            return;
        }

        const currentWord = words[index];
        const typedLength = typed.length;

        const totalCharTyped = alreadyTypedWords + typedLength;

        if (typed === " ") {
            setTyped("");
            return;
        }

        if(error.state) {
            if(error.at >= typedLength) {
                setError({ state: false });
                updateCorrectMark(totalCharTyped);
                return;
            }
            updateIncorrectMark(totalCharTyped);
            return;
        }

        if(index === totalWords - 1) {
            if(currentWord[currentWord.length - 1] === typed[currentWord.length - 1]) {
                setTyped("");
                setIndex((prev) => prev + 1);
                useTypingStore.getState().setCurrentSpeed();
                useTypingStore.getState().setCompletePercentage(100);
                useTypingStore.getState().raceOver("completed");
                return;
            }
        }

        if(typed[currentWord.length] === " ") {
            setAlreadyTypedWords(prev => prev + typedLength);
            setTyped("");
            setIndex(prev => prev + 1);
            useTypingStore.getState().setCurrentSpeed();
            useTypingStore.getState().setCompletePercentage(((index + 1) / totalWords) * 100);
            return;
        }

        if (typed[typedLength - 1] !== currentWord[typedLength - 1]) {
            setError({ state: true, at: typedLength - 1});
            useTypingStore.getState().updateMistakeWords(currentWord);
            updateIncorrectMark(totalCharTyped);
            return;
        }

        updateCorrectMark(totalCharTyped);
    }, [typed]);
    return { typed, setTyped, raceComplete, error: error.state };
};

export default useTypingInput;