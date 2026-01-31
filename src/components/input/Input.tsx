import classNames from "classnames"
import React, { HTMLInputTypeAttribute } from "react";
import { DateInput } from "./DateInput";

interface InputTextProps {
    textInput?: string | number | string[] | Date | undefined;
    onInput: (e: Date | string | number) => void;
    label?: string;
    type: HTMLInputTypeAttribute | 'DateInput' | 'Options';
    isDisabled?: boolean;
    className?: string;
    classesNameInput?: string;
}



function Input({ textInput, onInput, label, type, className, isDisabled, classesNameInput }: InputTextProps) {
    const classes = classNames(className, "relative w-[100%]")
    const classesInput = classNames(classesNameInput, "border rounded-md p-1 mb-3 text-m border-gray-400 w-[100%]")


    const input = (() => {
        if (type === 'DateInput') return <DateInput
            onInput={onInput}
            dateDefault={textInput as Date}
            className={classesInput}
            wrapperClassName={classesInput} />

        else return <input
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)}
            value={textInput as string | number | string[] | undefined}
            disabled={isDisabled}
            className={classesInput}
            type={type} />
    })()



    return (
        <div className={classes}>
            <label className='z-1  absolute text-gray-400 bg-white rounded-2xl bg-2 text-xs left-3 top-[-0.5rem]'>{label}</label>
            {input}
        </div>
    )
}
export default Input 