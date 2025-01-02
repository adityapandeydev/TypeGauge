import { useTypingStore } from "../stores/useTypingStore";
import ArrowButton from "./ArrowButton";
import TextInput from "./TextInput";
import TextToBeTyped from "./TextToBeTyped";
const TypingArea = () => {
    const text = useTypingStore((state) => state.text);
    return (
        <div className="bg-lighterGray space-y-4 px-2 py-5 border border-gray-300 rounded-md text-xl font-mono font-light">
            <div className="relative">
                <ArrowButton className="absolute top-0 -left-40 animate-scaling">type this</ArrowButton>
                <TextToBeTyped text={text} />
            </div>

            <div className="relative">
                <ArrowButton className="absolute top-0 -left-40 animate-scaling">here</ArrowButton>
                <TextInput text={text} />
            </div>
        </div>
    );
};

export default TypingArea;