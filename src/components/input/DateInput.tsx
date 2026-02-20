import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import classNames from "classnames";
registerLocale('ru', ru)

interface DateInputProps {
    onInput: (e: string | number | Date) => void;
    dateDefault: Date;
    className?: string;
    wrapperClassName?: string;
    disabled?: boolean;
}

export function DateInput({ onInput, dateDefault, className, wrapperClassName, disabled }: DateInputProps) {
    const classes = classNames(className, 'w-24 rounded  hover:bg-green-100')

    return <DatePicker
        disabled={disabled}
        className={classes}
        wrapperClassName={wrapperClassName}
        locale="ru"
        showTimeSelect dateFormat="dd.MM.YYYY HH:mm"
        selected={dateDefault}
        timeCaption="Время"
        timeIntervals={1}
        calendarClassName='z-50'
        placeholderText="Выберите дату и время"
        onChange={(e) => { if (e) onInput(e) }} />
}