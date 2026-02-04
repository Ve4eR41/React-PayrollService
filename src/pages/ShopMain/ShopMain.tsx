import Error from "../../components/Error";
import Input from "../../components/input/Input";
import Loader from "../../components/Loader";
import Panel from "../../components/Panel";
import { useShiftsByShopQuery } from "../../store/apis/shifts";



export default function ShopMain() {
    const headerStyle = "text-center bg-green-600 text-white rounded-t-md"
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const preDay = 6 - new Date(year, month, 1).getDay() * 7;

    const printFakeDays = (fakeDays: number) => {
        const result = [];
        while (result.length < fakeDays)
            result.push(<div></div>)
        return result
    }

    const startDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), 1);
    const endDate = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0, 23, 59, 59, 999);
    const { data: shifts, isLoading, error, refetch } = useShiftsByShopQuery({ shopName: 1, endDate, startDate })





    const printdays = (() => {
        let shifts = []
        const maxDays = new Date(year, month + 1, 0).getDate()
        for (let i = 1; i <= maxDays; i++) {
            shifts.push(
                <div className="border border-green-200 bg-white p-1 rounded-md hover:border-green-600" key={i}>
                    {/* <span className="bg-green-600 text-white grid justify-center rounded-t-md mb-3">{day.date.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" })}</span> */}
                    <Input onInput={() => { }} textInput={1} classesNameInput="h-7" label="Выручка" type="number" />
                    <Input onInput={() => { }} textInput={1} classesNameInput="h-7" label="Чеки" type="number" />
                    <Input onInput={() => { }} textInput={1} isDisabled classesNameInput="h-7 bg-gray-100" label="Ср.чек" type="number" />
                    {/* <Input onInput={() => { }} textInput={day.writeOff} classesNameInput="h-7" label="Списание" type="number" /> */}
                    {/* <Input onInput={() => { }} textInput={"%" + Math.round(day.writeOff / day.revenue * 100)} isDisabled classesNameInput="h-7 bg-gray-100" label="%Списание" type="text" /> */}
                    {/* <Input onInput={() => { }} textInput={day.worksHours} classesNameInput="h-7" label="Часы" type="number" /> */}
                </div>
            )
        }
        return shifts
    })()


    const printdaysInShop = shifts ? shifts.map((day) => {
        return <div className="border border-green-200 bg-white p-1 rounded-md hover:border-green-600" key={day.id}>
            {/* <span className="bg-green-600 text-white grid justify-center rounded-t-md mb-3">{day.date.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" })}</span> */}
            <Input onInput={() => { }} textInput={day.revenue} classesNameInput="h-7" label="Выручка" type="number" />
            <Input onInput={() => { }} textInput={day.cheks} classesNameInput="h-7" label="Чеки" type="number" />
            <Input onInput={() => { }} textInput={day.revenue / day.cheks} isDisabled classesNameInput="h-7 bg-gray-100" label="Ср.чек" type="number" />
            {/* <Input onInput={() => { }} textInput={day.writeOff} classesNameInput="h-7" label="Списание" type="number" /> */}
            {/* <Input onInput={() => { }} textInput={"%" + Math.round(day.writeOff / day.revenue * 100)} isDisabled classesNameInput="h-7 bg-gray-100" label="%Списание" type="text" /> */}
            {/* <Input onInput={() => { }} textInput={day.worksHours} classesNameInput="h-7" label="Часы" type="number" /> */}
        </div>
    }) : []

    if (isLoading) return <Loader />
    if (error) return <Error refetch={refetch} />
    return (
        <div className="min-h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw] max-lg:w-[99vw]">
                <h3 className=" text-white bg-green-600  w-full rounded-b p-2  flex justify-center items-center  text-center text-xl mb-4"> Госпиталь   </h3>
                <Panel className="min-h-[80vh] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_10fr_10fr_10fr_10fr_10fr] gap-1">
                    <span className={headerStyle}>Пн </span> <span className={headerStyle}>Вт </span> <span className={headerStyle}>Ср </span> <span className={headerStyle}>Чт </span> <span className={headerStyle}>Пт </span> <span className={headerStyle}>Сб </span> <span className={headerStyle}>Вс </span>
                    {printFakeDays(preDay)}
                    {/* {printdaysInShop} */}
                    {printdays}
                </Panel>
            </div>
        </div>)
}