import { create } from "zustand";
import textData from "../assets/data/textData";

type TypingStore = {
    text: string;
};

export const useTypingStore = create<TypingStore>()((set) => ({
    text: textData[Math.floor(Math.random() * textData.length)],
}));