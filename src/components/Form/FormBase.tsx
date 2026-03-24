import { ReactNode, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export interface FormSettingsProps {
    disabled?: boolean;
    title?: string;
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    onSub: () => void;
}
export interface FormBaseProps {
    children?: ReactNode;
    formSettings: FormSettingsProps
}


export default function FormBase({ children, formSettings }: FormBaseProps) {
    const { visibleToggle, isVisible, disabled, onSub, title } = formSettings;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isVisible) return;

            if (event.key === 'Escape') visibleToggle(false);

        };
        window.addEventListener('keydown', handleKeyDown);
        return () => { window.removeEventListener('keydown', handleKeyDown); };
    },);



    return (
        <div onClick={() => { }}
            className={" fixed inset-0 bg-gray-800/25 flex items-center justify-center z-10 " + (isVisible ? "visible" : "hidden")}>
            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => { if (disabled) return; e.preventDefault(); visibleToggle(false); onSub() }}
                className={'bg-white relative p-4 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-60 max-w-100 '}>

                <h3 className="text-xl mb-2 relative">
                    {title}
                    <RxCross2 size={18} className="hover:text-green-500 cursor-pointer absolute right-0 top-0" onClick={() => { visibleToggle(false) }} />
                </h3>

                {children}

            </form></div>
    )
}

