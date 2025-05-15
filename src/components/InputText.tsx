import classNames from "classnames"
import React from "react";

interface InputTextProps {
    textInput?: string | number | string[] | undefined;
    onInput: <T = string | number | Date>(newValue: T) => void;
    label?: string;
    type: string;
    isDisabled?: boolean;
    className?: string;
    classesNameInput?: string;
}


function InputText({ textInput, onInput, label, type, className, isDisabled, classesNameInput }: InputTextProps) {
    const classes = classNames(
        className,
        "relative w-[100%]"
    )

    const classesInput = classNames(
        classesNameInput,
        "border rounded-md p-1 mb-3 text-m border-gray-400 w-[100%]"
    )

    return (
        <div className={classes}>
            <label className='absolute text-gray-400 bg-white rounded-2xl bg-2 text-xs left-3 top-[-0.5rem]'>{label}</label>
            <input
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)}
                value={textInput}
                disabled={isDisabled}
                className={classesInput}
                type={type} />
        </div>
    )
}
export default InputText 