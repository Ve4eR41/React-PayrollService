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

    const [deleteShift, { isLoading }] = useDeleteShiftMutation();

    const handlerDelete = async () => { await deleteShift({ shiftId: id }) }

    const formatDate = (date: Date) => date.toLocaleString('ru-RU', { day: '2-digit', hour: '2-digit', minute: '2-digit' })

    return (
        <>
            <div onClick={() => { setisVisible(!isVisible) }}
                className={'bg-white rounded hover:bg-green-100 cursor-pointer owerflow flex justify-around items-center gap-2 h-9 border-green-100 border-1 my-3 text-xs relative ' + (!isLoading || 'animate-pulse')}>

                <div className='w-8 h-full absolute left-0 top-0 bottom-0 flex items-center justify-center '>
                    {/* <BiTrash size={18} onClick={handlerDelete} className="ButtonIcon BI2  " /> */}
                    {/* <BiPen size={18} onClick={() => { setisVisible(!isVisible) }} className="ButtonIcon BI2 " /> */}
                </div>

                <span className={'min-w-12' + styleWorkingDayInput}>{formatDate(timeStart)} </span>
                <span className={'min-w-20' + styleWorkingDayInput}>{shopName}</span>
                {/* <span className={'min-w-12' + styleWorkingDayInput}>{getHoursDiff()} </span> */}
                <span className={'min-w-12' + styleWorkingDayInput}>{revenue}💲</span>
                <span className={'min-w-12' + styleWorkingDayInput}>{cheks}📄</span>
                <span className={'min-w-12' + styleWorkingDayInput}>{'Смена'}</span>
            </div >

            <FormEditShift deleteHandler={handlerDelete} visibleToggle={setisVisible} isVisible={isVisible} shift={data} />
        </>)
}