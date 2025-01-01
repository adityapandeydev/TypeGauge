import { create } from "zustand";
import textData from "../assets/data/textData";
import getText from "../utils/getText";

export type Mark = {
    correctlyTyped: number;
    totalCharTyped: number;
};

type TypingStore = {
    text: string;
    raceCompleted: boolean;
    mark: Mark;
    raceStartAt: null | number;
    setRaceStartAt: () => void;
    raceOver: () => void;
    startNewRace: () => void;
    updateCorrectMark: (totalCharTyped: number) => void;
    updateIncorrectMark:(totalCharTyped: number) => void;
};

export const useTypingStore = create<TypingStore>()((set) => ({
    text: getText(textData),
    raceCompleted: false,
    mark: { correctlyTyped: 0, totalCharTyped: 0 },
    raceStartAt: null,
    setRaceStartAt: () => set({ raceStartAt: Date.now() }),

    raceOver: () => set({ raceCompleted: true }),

    startNewRace: () => set({ text: getText(textData), raceCompleted: false, raceStartAt: null, mark: { correctlyTyped: 0, totalCharTyped: 0 } }),

    updateCorrectMark: (totalCharTyped) => set({mark: {correctlyTyped: totalCharTyped, totalCharTyped}}),

    updateIncorrectMark: (totalCharTyped) => set((state) => ({mark: {...state.mark, totalCharTyped}})),
}));