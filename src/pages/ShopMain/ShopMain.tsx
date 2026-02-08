import { JSX } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Panel from "../../components/Panel";
import { Shift, useShiftsByShopQuery } from "../../store/apis/shifts";
import ShiftDayInfo from "../../components/ShiftDayInfo";



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
    const { data: shiftsData, isLoading, error, refetch } = useShiftsByShopQuery({ shopName: 1, endDate, startDate })



    const printdays = (() => {

        const mapedData = (() => {
            if (shiftsData) return shiftsData.reduce((result, shift) => {
                const dateNum = shift.timeStart.getDate()
                const curShift = result[dateNum]
                if (!curShift) return result = { ...result, [dateNum]: shift }
                const accShift = { ...curShift, revenue: curShift.revenue + shift.revenue, cheks: curShift.cheks + shift.cheks }
                return result = { ...result, [dateNum]: accShift }
            }, {} as { [key: number]: Shift })
        })() || {}

        const shifts: JSX.Element[] = []
        const maxDays = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= maxDays; i++) {
            const { cheks, revenue } = mapedData[i] || { cheks: 0, revenue: 0 }
            shifts.push(<ShiftDayInfo cheks={cheks} revenue={revenue} id={i} />)
        }
        return shifts
    })()



    if (isLoading) return <Loader />
    if (error) return <Error refetch={refetch} />
    return (
        <div className="min-h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw] max-lg:w-[99vw]">
                <h3 className=" text-white bg-green-600  w-full rounded-b p-2  flex justify-center items-center  text-center text-xl mb-4"> Госпиталь   </h3>
                <Panel className="min-h-[80vh] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_10fr_10fr_10fr_10fr_10fr] gap-1">
                    <span className={headerStyle}>Пн </span> <span className={headerStyle}>Вт </span> <span className={headerStyle}>Ср </span> <span className={headerStyle}>Чт </span> <span className={headerStyle}>Пт </span> <span className={headerStyle}>Сб </span> <span className={headerStyle}>Вс </span>
                    {printFakeDays(preDay)}
                    {printdays}
                </Panel>
            </div>
        </div>)
}