import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import Panel from "./Panel"
import { useState } from "react";
import FormCreateShift from "./Form/FormCreateShift";
import Shift from "./Shift";
import Error from "./Error";
import MonthToggle from "./input/MonthToggle";
import SummaryShiftPanel from "./SummaryShiftPanel";
import { useCloseMutation, useIsOpenQuery, useOpenMutation } from "../store/apis/shifts";


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
    const { data: isOpen, isLoading: isLoadIsOpen } = useIsOpenQuery('');
    const [openShift, { isLoading: isOpening }] = useOpenMutation();
    const [closeShift, { isLoading: isClosing }] = useCloseMutation();
    const isLoading = isLoadIsOpen || isOpening || isClosing;
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

            <SummaryShiftPanel summary={summary} />

            {printShifts}
            {!isOpen?.isOpen ?
                <Button loading={isLoading} className="text-center m-0 rounded w-full" onClick={() => { openShift(null) }}>Открыть смену</Button>
                :
                <Button loading={isLoading} className="text-center m-0 rounded w-full" onClick={() => { closeShift(null) }}>Закрыть смену
                    <span className="text-xs mx-1"> ({isOpen.timeStart.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })})</span>
                </Button>
            }

            <FormCreateShift visibleToggle={setIsVisibleAddForm} isVisible={isVisibleAddForm} />
        </Panel >
    )
}
export default UserShifts



