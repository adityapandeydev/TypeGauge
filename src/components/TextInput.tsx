import useTypingInput from "../hooks/useTypingInput";

const TextInput = ({ text }: { text: string }) => {

    const {typed, setTyped, raceComplete} = useTypingInput({ text });

    return (
        <input 
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        autoFocus
        disabled={raceComplete}
        onPaste={(e) => e.preventDefault()}
            className="w-full border border-gray-200 rounded-sm p-[2px] text-lg focus:outline-none focus:border-black" type="text" 
        />
    );
}

export default TextInput;