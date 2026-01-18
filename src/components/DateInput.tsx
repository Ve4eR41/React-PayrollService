import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import { useState } from "react";
registerLocale('ru', ru)

interface DateInputProps {
    dateDefault: Date;
    className?: string;
    wrapperClassName?: string;
}

export function DateInput({ dateDefault, className, wrapperClassName }: DateInputProps) {
    const [date, setDate] = useState<Date | null>(dateDefault);


    return <DatePicker
        wrapperClassName={wrapperClassName}
        locale="ru"
        showTimeSelect dateFormat="dd.MM.YYYY HH:mm"
        selected={date}
        timeCaption="Время"
        timeIntervals={1}
        placeholderText="Выберите дату и время"
        className={className || 'w-32 rounded-full text-center hover:bg-green-100'}
        onChange={(date) => setDate(date)} />
}