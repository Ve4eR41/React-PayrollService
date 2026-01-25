import { useState } from "react";
import InputWrapper from "./InputWrapper";



interface OptionsProps {
    callback: (e: string | number) => void;
    value: string | number;
    label: string;
    otions: (string | number)[];
}



export default function Options({ callback, value, otions, label }: OptionsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const visible = isVisible ? "" : "hidden"
    const toggel = () => { setIsVisible(!isVisible) }

    const optionsList = otions.map(el => { return (<div onClick={() => { toggel(); callback(el) }} className="hover:bg-green-100 border-t-1 border-green-100 cursor-pointer py-1">{el}</div>) })

    return (
        <InputWrapper label={label}>
            <div onClick={toggel} className="h-6 cursor-pointer">{value}</div>
            <div className={visible + " border-1 border-green-100 absolute bg-white z-50 w-full left-0 mt-2 p-2 rounded"}> {optionsList} </div>
        </InputWrapper>
    )
}