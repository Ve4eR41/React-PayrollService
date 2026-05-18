import { HTMLInputTypeAttribute, ReactNode, useEffect, } from "react";
import { RxCross2 } from "react-icons/rx";
import Input from "../../input/Input";

export interface FormSettingsProps {
    disabled?: boolean;
    title?: string;
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    onSub: () => void;
}

interface InputSettings<K> {
    name: string;
    type: HTMLInputTypeAttribute | 'DateInput';
    transform?: (value: K) => string | number;
    required?: boolean;
}

export interface FormBaseProps<T extends object> {
    data: T;
    inputsSettings: Partial<{ [K in keyof T]: InputSettings<T[K]> }>
    onChange: (key: keyof T, value: T[keyof T]) => void;
    children?: ReactNode;
    formSettings: FormSettingsProps
}

export default function FormBaseV2<T extends object>({ children, formSettings, data, inputsSettings, onChange }: FormBaseProps<T>) {
    const { visibleToggle, isVisible, disabled, onSub, title } = formSettings;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isVisible) return;
            if (event.key === 'Escape') visibleToggle(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => { window.removeEventListener('keydown', handleKeyDown); };
    }, [isVisible, visibleToggle]);

    const handleInputChange = (key: keyof T, value: T[keyof T], transform?: (value: T[keyof T]) => T[keyof T]) => {
        const finalValue = transform ? transform(value) : value;
        onChange(key, finalValue);
    };

    const renderInput = (key: keyof T, settings: InputSettings<T[keyof T]>) => {
        const { name, type,  transform } = settings;
        const value = data[key];

        switch (type) {
            case 'checkbox':
                return (
                    <Input
                        key={String(key)}
                        label={name}
                        onInput={(v) => handleInputChange(key, v, transform)}
                        textInput={Boolean(value)}
                        type="checkbox"
                    />
                );

            case 'DateInput':
                return (
                    <div key={String(key)} className="flex flex-col mb-3">
                        <label className="mb-1 text-sm font-medium">{name}</label>
                        <input
                            type="date"
                            value={value as string || ''}
                            onChange={(e) => handleInputChange(key, e.target.value, transform)}
                            disabled={disabled}
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                );

            case 'textarea':
                return (
                    <div key={String(key)} className="flex flex-col mb-3">
                        <label className="mb-1 text-sm font-medium">{name}</label>
                        <textarea
                            value={value as string || ''}
                            onChange={(e) => handleInputChange(key, e.target.value, transform)}
                            disabled={disabled}
                            className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                        />
                    </div>
                );

            default:
                return (
                    <Input
                        key={String(key)}
                        label={name}
                        onInput={(v) => handleInputChange(key, v, transform)}
                        textInput={value as string | number}
                        type={type}
                    />
                );
        }
    };




    const inputs = (Object.entries(inputsSettings) as [keyof T, InputSettings<T[keyof T]>][])
        .map(([key, settings]) => renderInput(key, settings));




    return (
        <div className={"fixed inset-0 bg-gray-800/25 flex items-center justify-center z-10 " + (isVisible ? "visible" : "hidden")}
            onClick={() => visibleToggle(false)}>

            <form className={'bg-white relative px-4 py-6 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-60 max-w-100'}
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    if (disabled) return;
                    e.preventDefault();
                    onSub();
                }}
                onClick={(e) => e.stopPropagation()}
            >

                <h3 className="text-xl mb-2 relative">
                    {title}
                    <RxCross2
                        size={18}
                        className="hover:text-green-500 cursor-pointer absolute right-0 top-0"
                        onClick={() => visibleToggle(false)}
                    />
                </h3>

                {inputs}

                {children}

            </form>
        </div>
    );
}