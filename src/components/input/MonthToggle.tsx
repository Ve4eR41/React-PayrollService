import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

interface MonthToggleProsps {
    goToPreviousMonth: () => void
    goToNextMonth: () => void
    selectedDate: Date
}

export default function MonthToggle({ goToPreviousMonth, goToNextMonth, selectedDate }: MonthToggleProsps) {

    const activeMonth = selectedDate.toLocaleString('ru', { month: "long", year: "numeric" })

    return (
        <div className="flex items-center justify-center mb-2">
            <BiArrowFromRight onClick={goToPreviousMonth} className="ButtonIcon" size={20} />
            <h3 className="text-center mx-4 text-xl">Данные за {activeMonth}</h3>
            <BiArrowFromLeft onClick={goToNextMonth} className="ButtonIcon" size={20} />
        </div>
    )
}