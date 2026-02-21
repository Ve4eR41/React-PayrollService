import { JSX, useState } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Panel from "../../components/Panel";
import { useShiftsByShopQuery } from "../../store/apis/shifts";
import ShiftDayInfo from "../../components/ShiftDayInfo";
import Options from "../../components/input/Options";
import { getEndMouth, getShopId, getShopName, getStartMouth, SHOP_NAMES } from "../../utils/utils";
import MonthToggle from "../../components/input/MonthToggle";
import { useSearchParams } from "react-router-dom";


export interface ShiftExtends {
    id: number
    timeStart: Date
    timeEnd: Date
    shopName: string
    revenue: number
    cheks: number
    hours: number;
}


export default function ShopMain() {
    const [searchParams] = useSearchParams();
    const [date, setDate] = useState(new Date())
    const [shop, setShop] = useState(Number(searchParams.get('shop')) || 1)
    const { data: shiftsData, isLoading, error, refetch } = useShiftsByShopQuery({
        shopName: shop,
        startDate: getStartMouth(date),
        endDate: getEndMouth(date),
    })

    const headerStyle = "text-center bg-green-600 text-white rounded-t-md"
    const year = date.getFullYear();
    const month = date.getMonth();

    const fakeDays = (() => {
        const preDay = (() => {
            const day = getStartMouth(date).getDay();
            return day === 0 ? 6 : day - 1;
        })()
        const result = [];
        while (result.length < preDay)
            result.push(<div key={`${year}_${month}_${result.length}`}></div>)
        return result
    })()

    const printDays = (() => {

        const mapedData = (() => {
            if (!shiftsData) return {};

            return shiftsData.reduce<Record<number, ShiftExtends>>((result, shift) => {
                const dateNum = shift.timeStart.getDate();
                const shiftHours = shift.timeEnd.getTime() - shift.timeStart.getTime();

                const existingShift = result[dateNum];

                if (!existingShift) {
                    return {
                        ...result,
                        [dateNum]: {
                            ...shift,
                            hours: shiftHours
                        }
                    };
                }

                return {
                    ...result,
                    [dateNum]: {
                        ...existingShift,
                        revenue: existingShift.revenue + shift.revenue,
                        cheks: existingShift.cheks + shift.cheks,
                        hours: (existingShift.hours || 0) + shiftHours
                    }
                };
            }, {});

        })();

        const shifts: JSX.Element[] = []
        const maxDays = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= maxDays; i++) {
            const { cheks, revenue, hours } = mapedData[i] || { cheks: 0, revenue: 0 }
            shifts.push(<ShiftDayInfo cheks={cheks} revenue={revenue} id={i} hours={hours} />)
        }
        return shifts
    })()



    if (isLoading) return <Loader />
    if (error) return <Error refetch={refetch} error={error} />
    return (
        <div className="min-h-[100vh]  flex justify-center bg-green-100  max-sm:p-1 " >
            <div className="w-[60vw] max-lg:w-[99vw]">

                <div className="  bg-green-600 text-white w-full rounded-b p-2 flex flex-col justify-center items-center text-center text-xl mb-4">
                    <MonthToggle selectedDate={date} setSelectedDate={setDate} />
                    <Options classesNameInput='border-0' callback={(el) => setShop(getShopId(el as string))} value={getShopName(shop)} options={Object.values(SHOP_NAMES)} />
                </div>

                <Panel className="min-h-[80vh] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_10fr_10fr_10fr_10fr_10fr] gap-1">
                    <span className={headerStyle}>Пн </span> <span className={headerStyle}>Вт </span> <span className={headerStyle}>Ср </span> <span className={headerStyle}>Чт </span> <span className={headerStyle}>Пт </span> <span className={headerStyle}>Сб </span> <span className={headerStyle}>Вс </span>
                    {fakeDays}
                    {printDays}
                </Panel>
            </div>
        </div>)
}