import { useState } from "react";
import InputWrapper from "./InputWrapper";



interface OptionsProps {
    callback: (e: string | number) => void;
    value: string | number;
    label?: string;
    classesNameInput?: string;
    options: (string | number)[];
}



export default function Options({ callback, value, options: otions, label ,classesNameInput}: OptionsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const visible = isVisible ? "" : "hidden"
    const toggel = () => { setIsVisible(!isVisible) }

    const optionsList = otions.map(el => { return (<div onClick={() => { toggel(); callback(el) }} className="hover:bg-green-100 border-t-1 first:border-t-0 border-green-300 cursor-pointer py-1">{el}</div>) })

    return (
        <InputWrapper classesNameInput={classesNameInput} label={label}>
            <div onClick={toggel} className="h-6 cursor-pointer ">{value}</div>
            <div className={visible + " text-black border-1 border-green-500 absolute bg-white z-50 w-full left-0 mt-2 p-2 rounded"}> {optionsList} </div>
        </InputWrapper>
    )
}