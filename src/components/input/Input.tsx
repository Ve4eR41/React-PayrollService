import classNames from "classnames"
import React, { HTMLInputTypeAttribute } from "react";
import { DateInput } from "./DateInput";
import InputWrapper from "./InputWrapper";

interface InputTextProps {
    textInput?: string | number | string[] | Date | undefined;
    onInput: (e: Date | string | number) => void;
    label?: string;
    type: HTMLInputTypeAttribute | 'DateInput' | 'Options';
    disabled?: boolean;
    className?: string;
    classesNameInput?: string;
}



export default function Input({ textInput, onInput, label, type, className, disabled, classesNameInput }: InputTextProps) {
    const classes = classNames(className, "relative w-[100%]")
    const classesInput = classNames(classesNameInput, " rounded-md text-m border-gray-400 w-[100%]")


    const input = (() => {
        if (type === 'DateInput') return <DateInput
            disabled={disabled}
            onInput={onInput}
            dateDefault={textInput as Date}
            className={classesInput}
            wrapperClassName={classesInput} />

        else return <input
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value)}
            value={typeof textInput === 'number' ? `${textInput}`.replace(/^0+(?=\d)/, '') : textInput as string | number | string[] | undefined}
            disabled={disabled}
            className={classesInput}
            type={type} />
    })()



    return (
        <InputWrapper label={label} classesNameInput={classesNameInput}>
            {input}
        </InputWrapper>
    )
}
