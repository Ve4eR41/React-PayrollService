import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru)

interface DateInputProps {
    onInput: (e: string | number | Date) => void;
    dateDefault: Date;
    className?: string;
    wrapperClassName?: string;
}

export function DateInput({ onInput, dateDefault, className, wrapperClassName }: DateInputProps) {


    return <DatePicker
        wrapperClassName={wrapperClassName}
        locale="ru"
        showTimeSelect dateFormat="dd.MM.YYYY HH:mm"
        selected={dateDefault}
        timeCaption="Время"
        timeIntervals={1}
        placeholderText="Выберите дату и время"
        className={className || 'w-24 rounded text-center hover:bg-green-100'}
        onChange={(e) => { if(e) onInput(e) }} />
}