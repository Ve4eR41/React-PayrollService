import classNames from "classnames";
import { ReactNode } from "react";



interface InputWrapperProps {
    children: ReactNode;
    className?: string;
    classesNameInput?: string;
    label?: string;
}



export default function InputWrapper({ children, className, classesNameInput, label }: InputWrapperProps) {
    const classes = classNames(className, "relative w-[100%]")
    const classesInput = classNames("border rounded-md p-1 mb-3 text-m border-gray-400 w-[100%]", classesNameInput)


    return (
        <div className={classes}>
            <div className={classesInput}>
                {label && <label className='z-2 select-none absolute text-gray-400 rounded-2xl text-xs left-3 top-[-0.5rem]'>
                    <div className="w-[110%] h-0.5 z-1 bg-white absolute left-[-5%] top-2 rounded-full"></div>
                    <span className="z-2 relative">{label}</span>
                </label>}
                {children}
            </div>
        </div>
    )
}
