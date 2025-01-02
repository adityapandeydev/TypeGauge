import { useTypingStore } from "../stores/useTypingStore";
import { FullResult } from "../stores/useTypingStore";
import formatTime from "../utils/formatTime";

const Result = () => {
    const result = useTypingStore((state) => state.result);
    return (
        <div className="space-y-4">
            <button onClick={useTypingStore.getState().startNewRace} className="bg-greenA hover:bg-greenB px-8 py-2 text-white rounded-lg">
                New Race
            </button>

            <div className="bg-result p-6 rounded-md text-gray-200">
                <h3 className="text-2xl font-bold pb-3 mb-3 border-b border-gray-500">Result</h3>

                {
                    result.state !== "completed" ? (
                        <p>{result.message}</p>
                    ) : (
                        <ShowResult result={result} />
                    )
                }
            </div>
        </div>
    );
};

export default Result;

const ShowResult = ({result} : {result: FullResult}) => {
    const { speed, accuracy, time, mistakeWords } = result;
    return (
        <div className="flex gap-10 items-start">
            <div className="flex-1 grid grid-cols-2 gap-4">
                <p>Your Speed:</p>
                <p>{speed}</p>
                <p>Accuracy:</p>
                <p>{accuracy}</p>
                <p>Time:</p>
                <p>{formatTime(time)}</p>
            </div>

            <div className="flex-1">
                <h5 className="underline font-semibold text-xl mb-2">
                    Mistake words
                </h5>

                <div className="grid grid-cols-2 gap-1 items-start">
                    {mistakeWords.map((word, index) => (
                        <p key={word + index} className="text-red-300 text-lg">{word}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};