import { useTypingStore } from "../stores/useTypingStore";
import RaceTimer from "./RaceTimer";

const RaceOn = () => {
    const raceCompleted = useTypingStore((state) => state.raceCompleted);
    const raceStartAt = useTypingStore((state) => state.raceStartAt);
    return (
        <div className="text-2xl flex justify-between">
            <div className="text-race">
                <p>The Race is on! Type the text below:</p>
            </div>

            <div>
                {!raceCompleted && raceStartAt !== null && <RaceTimer />}
            </div>
        </div>
    );
};

export default RaceOn;