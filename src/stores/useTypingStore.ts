import { create } from "zustand";
import textData from "../assets/data/textData";

type TypingStore = {
    text: string;
    raceCompleted: boolean;
    raceOver: () => void;
    startNewRace: () => void;
};

export const useTypingStore = create<TypingStore>()((set) => ({
    text: textData[Math.floor(Math.random() * textData.length)].split(" ").slice(0, 5).join(" "),
    raceCompleted: false,

    raceOver: () => set({ raceCompleted: true }),

    startNewRace: () => set({ text: textData[Math.floor(Math.random() * textData.length)].split(" ").slice(0, 5).join(" "), raceCompleted: false }),
}));