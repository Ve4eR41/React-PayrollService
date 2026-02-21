import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

interface MonthToggleProsps {
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
    selectedDate: Date
}

export default function MonthToggle({ setSelectedDate, selectedDate }: MonthToggleProsps) {

    const activeMonth = selectedDate.toLocaleString('ru', { month: "long", year: "numeric" })

    const goToPreviousMonth = () => {
        const prevMonth = new Date(selectedDate);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setSelectedDate(prevMonth);
    }

    const goToNextMonth = () => {
        const nextMonth = new Date(selectedDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setSelectedDate(nextMonth);
    }


    return (
        <div className="flex items-center justify-center mb-2">
            <BiArrowFromRight onClick={goToPreviousMonth} className="ButtonIcon" size={20} />
            <h3 className="text-center mx-4 text-xl">Данные за {activeMonth}</h3>
            <BiArrowFromLeft onClick={goToNextMonth} className="ButtonIcon" size={20} />
        </div>
    )
}