import useTypingInput from "../hooks/useTypingInput";
import { useTypingStore } from "../stores/useTypingStore";

const TextInput = ({ text }: { text: string }) => {
    const {typed, setTyped, raceComplete, error} = useTypingInput({ words: text.split(" ") });
    const raceStartAt = useTypingStore((state) => state.raceStartAt);

    const startRace = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (raceStartAt === null) {
            useTypingStore.getState().setRaceStartAt();
        }

        setTyped(e.target.value);
    };

    return (
        <input 
        value={typed}
        onChange={startRace}
        autoFocus
        disabled={raceComplete}
        onPaste={(e) => e.preventDefault()}
            className={`${error ? "bg-red-300" : "bg-white"} w-full border border-gray-200 rounded-sm p-[2px] text-lg focus:outline-none focus:border-black`} type="text" 
        />
    );
};

export default TextInput;