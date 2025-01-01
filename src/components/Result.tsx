import { useTypingStore } from "../stores/useTypingStore";

const Result = () => {
    return (
        <div>
            <button onClick={useTypingStore.getState().startNewRace} className="bg-greenA hover:bg-greenB px-8 py-2 text-white rounded-lg">
                New Race
            </button>
        </div>
    )
};

export default Result;