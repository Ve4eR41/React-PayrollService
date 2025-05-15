import InputText from "../../components/InputText";
import Panel from "../../components/Panel";

export default function ShopMain() {
    const headerStyle = "text-center bg-green-600 text-white h-"



    //for test
    const daysInShop = [
        { id: 1000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 3000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 4000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 5000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 6000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 7000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 8000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 9000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1000, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1100, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1200, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1010, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1020, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1030, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1040, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1050, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1060, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1070, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1080, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1090, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 1010, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2011, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2012, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2070, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2080, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2090, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2010, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2011, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
        { id: 2012, revenue: 12200, cheks: 20, writeOff: 9999, worksHours: 12, date: new Date() },
    ];



    const printdaysInShop = daysInShop.map((day, i) => {
        return <div className="border border-green-200 bg-white p-1 rounded-md hover:border-green-600" key={day.id}>
            <span className="bg-green-600 text-white grid justify-center rounded-t-md mb-3">{day.date.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" })}</span>
            <InputText onInput={() => { }} textInput={day.revenue} classesNameInput="h-7" label="Выручка" type="number" />
            <InputText onInput={() => { }} textInput={day.cheks} classesNameInput="h-7" label="Чеки" type="number" />
            <InputText onInput={() => { }} textInput={0} isDisabled classesNameInput="h-7 bg-gray-100" label="Ср.чек" type="number" />
            <InputText onInput={() => { }} textInput={day.writeOff} classesNameInput="h-7" label="Списание" type="number" />
            <InputText onInput={() => { }} textInput={0} isDisabled classesNameInput="h-7 bg-gray-100" label="%Списание" type="number" />
            <InputText onInput={() => { }} textInput={day.worksHours} classesNameInput="h-7" label="Часы" type="number" />
        </div>
    })



    return (
        <div className="min-h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw] max-lg:w-[99vw]">
                <Panel className="min-h-[80vh] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_10fr_10fr_10fr_10fr_10fr] gap-4">
                    <span className={headerStyle}>Пн </span>
                    <span className={headerStyle}>Вт </span>
                    <span className={headerStyle}>Ср </span>
                    <span className={headerStyle}>Чт </span>
                    <span className={headerStyle}>Пт </span>
                    <span className={headerStyle}>Сб </span>
                    <span className={headerStyle}>Вс </span>
                    {printdaysInShop}
                </Panel>
            </div>
        </div>)
}