import classNames from "classnames";


interface ShiftDayInfoProps {
    revenue: number,
    cheks: number,
    hours: number,
    id: number
}

export default function ShiftDayInfo({ revenue, cheks, id, hours }: ShiftDayInfoProps) {
    const classesParams = classNames("relative mb-4 w-[100%] border-b border-gray-100 last:border-b-0 last:mb-0")


    const Params = (data: string | number | undefined | null, label: string) =>
        <div className={classesParams}>
            <label className='z-1 absolute text-gray-400 rounded-2xl bg-2 text-[0.6rem] top-[-0.5rem] last'>{label}</label>
            <span>{data || '-'}</span>
        </div>
        ;


    return (
        <div className="  bg-gray-50 p-1 rounded hover:border-green-600" key={id}>
            <span className="bg-green-600 text-white grid justify-center rounded mb-3">{id}</span>

            {Params(revenue, 'Выручка')}
            {Params(cheks, 'Чеки')}
            {Params(Math.round(revenue / cheks), 'Ср.Чек')}
            {Params(Math.round(hours / 3600000), 'Часы')}
            {Params(cheks, '%Списания')}
            {Params(cheks, 'Списание')}
        </div>
    )
}