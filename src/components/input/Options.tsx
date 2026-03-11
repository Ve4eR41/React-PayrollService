import { useState } from "react";
import InputWrapper from "./InputWrapper";



interface OptionsProps {
    callback: (e: string | number | number) => void;
    value: string | number;
    label?: string;
    classesNameInput?: string;
    valueClassName?: string;
    options: (string | number)[] | { [key: string | number]: string | number | boolean };
    disabled?: boolean
}




export default function Options({ callback, value, options, label, classesNameInput, valueClassName, disabled }: OptionsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const visible = isVisible ? "" : "hidden"
    const toggel = () => { if (!disabled) setIsVisible(!isVisible) }

    const optionsValues = Array.isArray(options) ? options.map(item => [item, item]) : Object.entries(options)
    const optionsList = optionsValues.map(([k, el]) => { return (<div onClick={() => { toggel(); callback(k) }} className="hover:bg-green-100 border-t-1 first:border-t-0 border-green-300 cursor-pointer py-1">{el}</div>) })

    return (
        <InputWrapper classesNameInput={classesNameInput} label={label}>
            <div onClick={toggel} className={"h-6 cursor-pointer select-none" + valueClassName}>{value}</div>
            <div className={visible + " text-black border-1 border-green-500 absolute bg-white z-50 w-full left-0 mt-2 p-2 rounded select-none"}> {optionsList} </div>
        </InputWrapper>
    )
}