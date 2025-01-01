import { useMemo, useState, useEffect } from "react";

type TypingError = {
    state: false;
} | {
    state: true;
    at: number;
}

const useTypingInput = ({text} : {text: string}) => {
    const { words, totalWords } = useMemo(() => {
        const words = text.split(" ");
        const totalWords = words.length;
        return { words, totalWords};
    }, [text]);

    const [index, setIndex] = useState(0);
    const [typed, setTyped] = useState("");
    const [error, setError] = useState<TypingError>({state: false});

    const raceComplete = index >= totalWords;

    useEffect(() => {
        if(raceComplete) {
            return;
        }

        const currentWord = words[index];
        const typedLength = typed.length;

        console.log(index, currentWord);
        if (typed === " ") {
            setTyped("");
            return;
        }

        if(error.state) {
            if(error.at >= typedLength) {
                setError({ state: false })
            }
            return;
        }

        if(index === totalWords - 1) {
            if(currentWord[currentWord.length - 1] === typed[currentWord.length - 1]) {
                setTyped("");
                setIndex((prev) => prev + 1);
                console.log("Race is complete... ");
                return;
            }
        }

        if(typed[currentWord.length] === " ") {
            setTyped("");
            setIndex(prev => prev + 1);
            return;
        }

        if(typed[typedLength - 1] !== currentWord[typedLength - 1]) {
            setError({ state: true, at: typedLength - 1});
        }
    }, [typed]);
    return { typed, setTyped, raceComplete };
}

export default useTypingInput;