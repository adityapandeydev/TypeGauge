import RaceOn from "./components/RaceOn";
import RaceTrack from "./components/RaceTrack";
import TypingArea from "./components/TypingArea";

const App = () => {
  return (
    <div className="bg-lightGray grid justify-center items-start pt-20 min-h-screen">
      <div className="w-[800px] p-10 space-y-6 rounded-md bg-white drop-shadow-xl">
        <RaceOn />

        <RaceTrack />

        <TypingArea />
      </div>
    </div>
  );
};

export default App;