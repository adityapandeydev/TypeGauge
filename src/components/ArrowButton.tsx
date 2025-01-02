import { useTypingStore } from "../stores/useTypingStore";

type ArrowButtonProps = {
    children: React.ReactNode;
    className?: string;
};

const ArrowButton = ({children, className}: ArrowButtonProps) => {
    const correctlyTyped = useTypingStore((state) => state.mark.correctlyTyped);

    if (correctlyTyped > 11) return null;
    return (
        <div className={className}>
            <div className="relative overflow-y-clip w-28 flex justify-end">
                <div className="px-2 h-8 bg-green-500 grid place-items-center rounded-l-md text-white text-sm">
                    {children}
                </div>

                <div className="absolute top-0 right-0 -translate-x-full bg-green-500 -z-10 w-6 h-14 rotate-45 origin-bottom-right rounded-tr-sm" />
            </div>
        </div>
    );
};

export default ArrowButton;