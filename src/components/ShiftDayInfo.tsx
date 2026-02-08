import Input from "./input/Input";


interface ShiftDayInfoProps {
    revenue: number,
    cheks: number,
    id: number
}

export default function ShiftDayInfo({ revenue, cheks, id }: ShiftDayInfoProps) {

    const styleInput = "h-7 bg-gray-100"



    return (
        <div className="border border-green-200 bg-white p-1 rounded-md hover:border-green-600" key={id}>
            <span className="bg-green-600 text-white grid justify-center rounded-t-md mb-3">{id}</span>
            <Input onInput={() => { }} textInput={revenue || ''} isDisabled classesNameInput={styleInput} label="Выручка" type="number" />
            <Input onInput={() => { }} textInput={cheks || ''} isDisabled classesNameInput={styleInput} label="Чеки" type="number" />
            <Input onInput={() => { }} textInput={revenue / cheks || ''} isDisabled classesNameInput={styleInput} label="Ср.чек" type="number" />
            {/* <Input onInput={() => { }} textInput={day.writeOff} classesNameInput="h-7" label="Списание" type="number" /> */}
            {/* <Input onInput={() => { }} textInput={"%" + Math.round(day.writeOff / day.revenue * 100)} isDisabled classesNameInput="h-7 bg-gray-100" label="%Списание" type="text" /> */}
            {/* <Input onInput={() => { }} textInput={day.worksHours} classesNameInput="h-7" label="Часы" type="number" /> */}
        </div>
    )
}