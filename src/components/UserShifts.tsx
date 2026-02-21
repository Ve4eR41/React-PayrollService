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


    const printShifts = shifts
        .slice()
        .sort((a, b) => a.timeStart.getTime() - b.timeStart.getTime())
        .map(shift => {
            return (<Shift key={shift.id} data={shift}></Shift>)
        })



    return (
        <Panel className={"border-0 relative"}>
            <MonthToggle setSelectedDate={setSelectedDate} selectedDate={selectedDate} />

            {printShifts}

            <Button className="text-center m-0 rounded w-full" onClick={() => { setIsVisibleAddForm(!isVisibleAddForm) }}>{isVisibleAddForm ? "Закрыть окно" : "Добавить смену"}</Button>

            <FormCreateShift visibleToggle={setIsVisibleAddForm} isVisible={isVisibleAddForm} />
        </Panel >
    )
}
export default UserShifts



