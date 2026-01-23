import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import Panel from "./Panel"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useState } from "react";
import FormCreateShift from "./FormCreateShift";
import Shift from "./Shift";


interface UserShiftsProps {
    className?: string,
    shifts: {
        timeStart: Date,
        timeEnd: Date,
        shopName: string,
        revenue: number,
        cheks: number,
        id: number,
    }[]
}

function UserShifts({ shifts }: UserShiftsProps) {
    const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);



    const printWorkingDays = shifts.map(shift => {
        return (<Shift key={shift.id} data={shift}></Shift>)
    })




    return (
        <Panel className={"border-0 relative"}>
            <div className="flex items-center justify-center mb-2">
                <BiArrowFromRight className="ButtonIcon" size={20} />
                <h3 className="text-center mx-4 text-xl">Данные за Апрель 2025</h3>
                <BiArrowFromLeft className="ButtonIcon" size={20} />
            </div>

            {printWorkingDays}

            <Button className="text-center m-0 rounded w-full" onClick={() => { setIsVisibleAddForm(!isVisibleAddForm) }}>{isVisibleAddForm ? "Закрыть окно" : "Добавить смену"}</Button>

            <FormCreateShift isVisible={isVisibleAddForm} />
        </Panel >
    )
}
export default UserShifts



