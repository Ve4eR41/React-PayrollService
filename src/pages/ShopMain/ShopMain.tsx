import InputText from "../../components/InputText";
import Panel from "../../components/Panel";

export default function ShopMain() {
    const headerStyle = "text-center bg-green-600 text-white rounded-t-md"

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const preDay = new Date(year, month, 1).getDay() - 1;
    const postDay = (7 - new Date(year, month + 1, 0).getDay());
    const postDay2 = (new Date(year, month + 1, 0).getDay());


    const printFakeDays = (fakeDays: number) => {
        let result = [];
        let i = 0;
        while (i < fakeDays) {
            i++
            result.push(
                <div>{i}</div>
            )
        }
        return result
    }



    //for test
    const daysInShop = [
        { id: 1000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 1) },
        { id: 2000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 2) },
        { id: 3000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 3) },
        { id: 4000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 4) },
        { id: 5000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 5) },
        { id: 6000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 6) },
        { id: 7000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 7) },
        { id: 8000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 8) },
        { id: 9000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 9) },
        { id: 1000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 10) },
        { id: 1100, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 11) },
        { id: 1200, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 12) },
        { id: 1010, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 13) },
        { id: 1020, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 14) },
        { id: 1030, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date(2025, 5, 15) },
    ];



    const printdaysInShop = daysInShop.map((day) => {
        return <div className="border border-green-200 bg-white p-1 rounded-md hover:border-green-600" key={day.id}>
            <span className="bg-green-600 text-white grid justify-center rounded-t-md mb-3">{day.date.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" })}</span>
            <InputText onInput={() => { }} textInput={day.revenue} classesNameInput="h-7" label="Выручка" type="number" />
            <InputText onInput={() => { }} textInput={day.cheks} classesNameInput="h-7" label="Чеки" type="number" />
            <InputText onInput={() => { }} textInput={day.revenue / day.cheks} isDisabled classesNameInput="h-7 bg-gray-100" label="Ср.чек" type="number" />
            <InputText onInput={() => { }} textInput={day.writeOff} classesNameInput="h-7" label="Списание" type="number" />
            <InputText onInput={() => { }} textInput={"%" + Math.round(day.writeOff / day.revenue * 100)} isDisabled classesNameInput="h-7 bg-gray-100" label="%Списание" type="text" />
            <InputText onInput={() => { }} textInput={day.worksHours} classesNameInput="h-7" label="Часы" type="number" />
        </div>
    })



    return (
        <div className="min-h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw] max-lg:w-[99vw]">
                <h3 className=" text-white bg-green-600  w-full rounded-b-full rounded-l-full p-2  flex justify-center items-center  text-center text-xl mb-4"> Госпиталь  {postDay2}  </h3>
                <Panel className="min-h-[80vh] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_10fr_10fr_10fr_10fr_10fr] gap-4">
                    <span className={headerStyle}>Пн </span> <span className={headerStyle}>Вт </span> <span className={headerStyle}>Ср </span> <span className={headerStyle}>Чт </span> <span className={headerStyle}>Пт </span> <span className={headerStyle}>Сб </span> <span className={headerStyle}>Вс </span>
                    {printFakeDays(preDay)}
                    {printdaysInShop}
                    {printFakeDays(postDay)}
                </Panel>
            </div>
        </div>)
}