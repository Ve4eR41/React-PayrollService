import Button from "./Button";
import InputText from "./InputText";
import Panel from "./Panel"
import { BiArrowFromLeft, BiArrowFromRight, BiCalendar } from "react-icons/bi";
import DatePicker from "react-datepicker";

interface WorkingDaysProps {
    className?: string,
    workingDays: {
        timeStart: string,
        timeEnd: string,
        shopName: string,
        revenue: number,
        cheks: number
    }[]
}

function WorkingDays({ workingDays, className }: WorkingDaysProps) {
    const styleWorkingDay = 'bg-white rounded-full my-4 grid grid-cols-[3fr_1fr_1fr_1fr] gap-2 border-green-100 border-1 px-3 p-1'


    const formatDate = (date: string) => new Date(date).toLocaleString("ru-RU", { day: '2-digit', hour: 'numeric', minute: 'numeric' })

    const printWorkingDays = workingDays.map(workingDay => {
        const { timeStart, timeEnd, shopName, revenue, cheks } = workingDay;

        return <div className={styleWorkingDay}>
            <div className="flex items-center">
                <BiCalendar className="opacity-40" />
                <input type="text" onClick={(e) => { e.currentTarget.type = 'datetime-local'; e.currentTarget.showPicker() }} value={formatDate(timeStart)} /> - <span>{formatDate(timeEnd)}</span>
            </div>
            <input type="text" disabled value={shopName} />
            <input type="number" disabled value={revenue} /> ₽
            <input type="number" disabled value={cheks} />
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

            <Button className="text-center m-0 rounded-full w-full">Добавить смену</Button>

            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); }}
                className='absolute bg-white p-4 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-10'>
                <h3 className="text-xl mb-2">Добавление смены</h3>
                <InputText onInput={(e) => { console.log(e); e.change(); }} type="datetime-local" label="Приход" />
                <InputText type="datetime-local" label="Уход" />
                <InputText type="string" label="Магазин" />
                <InputText type="number" label="Выручка" />
                <InputText type="number" label="Чеки" />

                <input type="datetime-local" />
                <Button
                    onClick={() => { }}
                    className="text-center m-0 rounded-md w-full">
                    Подтвердить
                </Button>
            </form>

        </Panel >
    )
}
export default WorkingDays