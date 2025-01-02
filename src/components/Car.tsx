import { useTypingStore } from "../stores/useTypingStore";

const Car = () => {
    const completePercentage = useTypingStore((state) => state.completePercentage)
    return (
        <div style={{ transform: `translateX(${(completePercentage * 5.20) - 520}px)` }} className="flex gap-1 pb-2">
            <p>(you)</p>
            <img width={60} src="/car1.png" alt="" />
        </div>
    );
};

export default Car;