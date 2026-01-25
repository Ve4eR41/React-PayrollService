import { BiTrash, BiPen } from "react-icons/bi";
import { DateInput } from "./input/DateInput";
import { useDeleteShiftMutation } from "../store/apis/shifts";

interface ShiftProps {
    data: {
        timeStart: Date;
        timeEnd: Date;
        shopName: string;
        revenue: number;
        cheks: number
        id: number,
    }
}

export default function Shift({ data }: ShiftProps) {
    const { timeStart, timeEnd, shopName, revenue, cheks, id } = data;
    const styleWorkingDayInput = ' bg-green-50  rounded text-center hover:bg-green-200'
    const [deleteShift] = useDeleteShiftMutation();

    const handlerDelete = async () => { await deleteShift({ shiftId: id }) }

    return (
        // grid grid-cols-[0fr_1fr_1fr_1fr_1fr]
        <div className='bg-white rounded my-4 flex justify-between gap-2 border-green-100 border-1 pr-5 p-1 text-xs relative'>
            <div className="flex items-center">
                <BiTrash size={18} onClick={handlerDelete} className="ButtonIcon BI2 mr-1 " />
                <BiPen size={18} onClick={handlerDelete} className="ButtonIcon BI2 mr-1 " />
                <DateInput onInput={() => { }} className={styleWorkingDayInput} dateDefault={timeStart} />
                —
                <DateInput onInput={() => { }} className={styleWorkingDayInput} dateDefault={timeEnd} />
            </div>
            <input className={'w-24' + styleWorkingDayInput} type="text" disabled value={shopName} />
            <input className={'w-12' + styleWorkingDayInput} type="value" disabled value={revenue} />
            <input className={'w-12' + styleWorkingDayInput} type="value" disabled value={cheks} />
        </div>
    )
}