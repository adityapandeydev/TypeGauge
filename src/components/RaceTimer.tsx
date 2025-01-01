import { useEffect, useState } from "react";
import formatTime from "../utils/formatTime";
import { useTypingStore } from "../stores/useTypingStore";

const RaceTimer = () => {
    const [time, setTime] = useState(120);

    useEffect(() => {
        if(time <= 0) {
            useTypingStore.getState().raceOver();
            return;
        }

        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return <p>{formatTime(time)}</p>;
};

export default RaceTimer;