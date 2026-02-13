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
    const { timeStart, shopName, revenue, cheks, id } = data;
    const styleWorkingDayInput = ' text-center content-center  '
    const [deleteShift] = useDeleteShiftMutation();

    const handlerDelete = async () => { await deleteShift({ shiftId: id }) }

    // function getHoursDiff() {
    //     const setFormat = (num: number) => num.toString().padStart(2, '0')
    //     const [a, b] = [timeEnd, timeStart] as unknown as number[]
    //     const diffMs = Math.abs(a - b);
    //     const diffHours = diffMs / (1000 * 60 * 60);
    //     const rawHH = Number(diffHours);
    //     const hh = Math.floor(rawHH);
    //     const mm = Math.ceil((rawHH - hh) * 60);
    //     if (mm == 60) return `${setFormat(hh + 1)}ч 00м`
    //     return `${setFormat(hh)}ч ${setFormat(mm)}м`
    // }

    const formatDate = (date: Date) => date.toLocaleString('ru-RU', { day: '2-digit', hour: '2-digit', minute: '2-digit' })
    return (
        <>
            <div onClick={() => { setisVisible(!isVisible) }} className='bg-white rounded  owerflow  flex justify-around items-center gap-2 h-12 border-green-100 border-1 my-3 p-2  text-xs relative'>

                <div className='w-8 h-full absolute left-0 top-0 bottom-0 flex items-center justify-center '>
                    {/* <BiTrash size={18} onClick={handlerDelete} className="ButtonIcon BI2  " /> */}
                    {/* <BiPen size={18} onClick={() => { setisVisible(!isVisible) }} className="ButtonIcon BI2 " /> */}
                </div>

                <span className={'min-w-12' + styleWorkingDayInput}>{formatDate(timeStart)} </span>
                <span className={'min-w-16' + styleWorkingDayInput}>{shopName}</span>
                {/* <span className={'min-w-12' + styleWorkingDayInput}>{getHoursDiff()} </span> */}
                <span className={'min-w-12' + styleWorkingDayInput}>{revenue}💲</span>
                <span className={'min-w-12' + styleWorkingDayInput}>{cheks}📄</span>
                <span className={'min-w-12' + styleWorkingDayInput}>{'Смена'}</span>
            </div >

            <FormEditShift deleteHandler={handlerDelete} visibleToggle={setisVisible} isVisible={isVisible} shift={data} />
        </>)
}