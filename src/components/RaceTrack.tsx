import { useTypingStore } from "../stores/useTypingStore";
import Car from "./Car";
import CurrentSpeed from "./CurrentSpeed";
const RaceTrack = () => {
    const raceCompleted = useTypingStore((state) => state.raceCompleted);
    return (
        <div className="flex justify-between gap-5 text-gray-600">
            <div className="flex-1 border-b border-dashed border-orange-300 flex justify-end">
                <Car />
            </div>

            <div className="w-16 shrink-0 text-end whitespace-nowrap font-semibold relative">
                {raceCompleted && <p className="absolute text-xs top-0 right-0 -translate-y-full">Done!</p>}
                <CurrentSpeed />
            </div>
        </div>
    );
};

export default RaceTrack;