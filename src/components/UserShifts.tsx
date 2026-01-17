import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import Panel from "./Panel"
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useState } from "react";
import WorkingDaysFormAdd from "./WorkingDaysFormAdd";

interface WorkingDaysProps {
    className?: string,
    workingDays: {
        timeStart: Date,
        timeEnd: Date,
        shopName: string,
        revenue: number,
        cheks: number
    }[]
}

function UserShifts({ workingDays }: WorkingDaysProps) {
    const [startDate, setStartDate] = useState(new Date()); //for test
    const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);
    const [newShiftInfo, setNewShiftInfo] = useState({ timeStart: new Date(), timeEnd: new Date(), shopName: "", revenue: 0, cheks: 0 });
    const styleWorkingDay = 'bg-white rounded-full my-4 grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 border-green-100 border-1 px-3 p-1'
    const styleWorkingDayInput = 'w-20 rounded-full text-center hover:bg-green-100'



    const printWorkingDays = workingDays.map(workingDay => {
        const { timeStart, timeEnd, shopName, revenue, cheks } = workingDay;

        return <div className={styleWorkingDay}>
            <div className="flex items-center">
                <DatePicker showTimeInput dateFormat="dd, HH:mm" className={styleWorkingDayInput} selected={timeStart} onChange={(date) => setStartDate(date)} /> -
                <DatePicker showTimeInput dateFormat="dd, HH:mm" className={styleWorkingDayInput} selected={timeEnd} onChange={(date) => setStartDate(date)} />
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

            <WorkingDaysFormAdd isVisible={isVisibleAddForm} hSetNewShiftInfo={setNewShiftInfo} newShiftInfo={newShiftInfo} />

       
        </Panel >
    )
}
export default UserShifts



