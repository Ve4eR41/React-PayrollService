import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import Panel from "./Panel"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useState } from "react";
import FormCreateShift from "./FormCreateShift";
import { DateInput } from "./DateInput";


interface UserShiftsProps {
    className?: string,
    shift: {
        timeStart: Date,
        timeEnd: Date,
        shopName: string,
        revenue: number,
        cheks: number
    }[]
}

function UserShifts({ shift }: UserShiftsProps) {
    const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);
    const styleWorkingDay = 'bg-white rounded-full my-4 grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 border-green-100 border-1 px-3 p-1'
    const styleWorkingDayInput = 'w-32 rounded-full text-center hover:bg-green-100'



    const printWorkingDays = shift.map(workingDay => {
        const { timeStart, timeEnd, shopName, revenue, cheks } = workingDay;

        return <div className={styleWorkingDay}>
            <div className="flex items-center">
                <DateInput dateDefault={new Date(timeStart)} />
                —
                <DateInput dateDefault={new Date(timeEnd)} />
            </div>
            <input className={styleWorkingDayInput} type="text" disabled value={shopName} />
            <input className={styleWorkingDayInput} type="value" disabled value={revenue} />
            <input className={styleWorkingDayInput} type="value" disabled value={cheks} />
        </div>
    })




    return (
        <Panel className={"border-0 relative"}>
            <div className="flex items-center justify-center mb-2">
                <BiArrowFromRight className="ButtonIcon" size={20} />
                <h3 className="text-center mx-4 text-xl">Данные за Апрель 2025</h3>
                <BiArrowFromLeft className="ButtonIcon" size={20} />
            </div>

            {printWorkingDays}

            <Button className="text-center m-0 rounded-full w-full" onClick={() => { setIsVisibleAddForm(!isVisibleAddForm) }}>{isVisibleAddForm ? "Закрыть окно" : "Добавить смену"}</Button>

            <FormCreateShift isVisible={isVisibleAddForm} />
        </Panel >
    )
}
export default UserShifts



