import { BiTrash, BiPen } from "react-icons/bi";
import { DateInput } from "./input/DateInput";
import { useDeleteShiftMutation } from "../store/apis/shifts";
import FormEditShift from "./Form/FormEditShift";
import { useState } from "react";

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
    const [isVisible, setisVisible] = useState(false);
    const { timeStart, timeEnd, shopName, revenue, cheks, id } = data;
    const styleWorkingDayInput = ' text-center '
    const [deleteShift] = useDeleteShiftMutation();

    const handlerDelete = async () => { await deleteShift({ shiftId: id }) }

    function getHoursDiff() {
        const setFormat = (num: number) => num.toString().padStart(2, '0')
        const [a, b] = [timeEnd, timeStart] as unknown as number[]
        const diffMs = Math.abs(a - b);
        const diffHours = diffMs / (1000 * 60 * 60);
        const rawHH = Number(diffHours);
        const hh = Math.floor(rawHH);
        const mm = Math.ceil((rawHH - hh) * 60);
        if (mm == 60) return `${setFormat(hh + 1)}ч 00м`
        return `${setFormat(hh)}ч ${setFormat(mm)}м`
    }


    return (
        // grid grid-cols-[0fr_1fr_1fr_1fr_1fr]
        <div className='bg-white rounded my-4 flex justify-between gap-2 border-green-100 border-1 pr-5 p-1 text-xs relative'>
            <FormEditShift visibleToggle={setisVisible} isVisible={isVisible} shift={data} />
            <div className="flex items-center">
                <BiTrash size={18} onClick={handlerDelete} className="ButtonIcon BI2 mr-1 " />
                <BiPen size={18} onClick={() => { setisVisible(!isVisible) }} className="ButtonIcon BI2 mr-1 " />
                <DateInput onInput={() => { }} className={styleWorkingDayInput} dateDefault={timeStart} />
                {getHoursDiff()}
                {/* <DateInput onInput={() => { }} className={styleWorkingDayInput} dateDefault={timeEnd} /> */}
            </div>
            <span><span className={'w-24' + styleWorkingDayInput} >{shopName}</span>🏪</span>
            <span><span className={'w-12' + styleWorkingDayInput} >{revenue}</span>💲</span>
            <span><span className={'min-w-12' + styleWorkingDayInput} >{cheks}</span>📄</span>
        </div>
    )
}