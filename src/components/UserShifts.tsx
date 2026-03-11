import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import Panel from "./Panel"
import { useState } from "react";
import FormCreateShift from "./Form/FormCreateShift";
import Shift from "./Shift";
import Error from "./Error";
import MonthToggle from "./input/MonthToggle";


interface UserShiftsProps {
    className?: string,
    selectedDate: Date,
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    shifts: {
        timeStart: Date,
        timeEnd: Date,
        shopName: string,
        revenue: number,
        cheks: number,
        id: number,
    }[] | undefined
}

function UserShifts({ shifts, setSelectedDate, selectedDate }: UserShiftsProps) {
    const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);

    if (!shifts) return <Error />

    const summary = { workTime: 0, revenue: 0, cheks: 0, q: 0, }

    const printShifts = shifts
        .slice()
        .sort((a, b) => a.timeStart.getTime() - b.timeStart.getTime())
        .map(shift => {
            summary.q += 1
            summary.cheks += shift.cheks
            summary.revenue += shift.revenue
            summary.workTime += shift.timeEnd.getTime() - shift.timeStart.getTime();
            return (<Shift key={shift.id} data={shift}></Shift>)
        })



    return (
        <Panel className={"border-0 relative"}>

            <MonthToggle setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

            <Panel className="flex justify-around gap-4 my-4 text-xs sm:text-[16px] ">
                <span className="bg-green rounded-full py-1 px-3">📆Смен: {summary.q}</span>
                <span className="bg-green rounded-full py-1 px-3">⌛Отработанно: {Math.round(summary.workTime / (1000 * 60 * 60))}ч.</span>
                <span className="bg-green rounded-full py-1 px-3">💲Выркучка: {summary.revenue}</span>
                <span className="bg-green rounded-full py-1 px-3">📄Чеков: {summary.cheks}</span>
            </Panel>

            {printShifts}

            <Button className="text-center m-0 rounded w-full" onClick={() => { setIsVisibleAddForm(!isVisibleAddForm) }}>{isVisibleAddForm ? "Закрыть окно" : "Добавить смену"}</Button>

            <FormCreateShift visibleToggle={setIsVisibleAddForm} isVisible={isVisibleAddForm} />
        </Panel >
    )
}
export default UserShifts



