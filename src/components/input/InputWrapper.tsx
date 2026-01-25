import classNames from "classnames";
import { ReactNode } from "react";



interface InputWrapperProps {
    children: ReactNode;
    className?: string;
    classesNameInput?: string;
    label: string;
}



export default function InputWrapper({ children, className, classesNameInput, label }: InputWrapperProps) {
    const classes = classNames(className, "relative w-[100%]")
    const classesInput = classNames(classesNameInput, "border rounded-md p-1 mb-3 text-m border-gray-400 w-[100%]")


    return (
        <div className={classes}>
            <div className={classesInput}>
                <label className='z-2  absolute text-gray-400 bg-white rounded-2xl bg-2 text-xs left-3 top-[-0.5rem]'>{label}</label>
                {children}
            </div>
        </div>
    )
}