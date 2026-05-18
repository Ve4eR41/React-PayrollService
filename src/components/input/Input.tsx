import classNames from "classnames"
import React, { HTMLInputTypeAttribute } from "react";
import { DateInput } from "./DateInput";
import InputWrapper from "./InputWrapper";

interface InputTextProps<T> {
    textInput?: T;
    onInput: (v: T) => void;
    label?: string;
    type: HTMLInputTypeAttribute | 'DateInput';
    disabled?: boolean;
    className?: string;
    classesNameInput?: string;
}



export default function Input<T>({ textInput, onInput, label, type, disabled, classesNameInput }: InputTextProps<T>) {
    // const classes = classNames(className, "relative w-[100%]")
    const classesInput = classNames(classesNameInput, " rounded-md text-m border-gray-400 w-[100%]")


    const input = (() => {
        if (type === 'DateInput') return <DateInput
            disabled={disabled}
            onInput={onInput as (v: Date) => void}
            dateDefault={textInput as Date}
            className={classesInput}
            wrapperClassName={classesInput} />

        else return <input
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e.target.value as T)}
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
