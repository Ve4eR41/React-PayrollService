import { JSX } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Panel from "../../components/Panel";
import { useShiftsByShopQuery } from "../../store/apis/shifts";
import ShiftDayInfo from "../../components/ShiftDayInfo";
import Options from "../../components/input/Options";
import { MM, SHOP_NAMES } from "../../utils/utils";


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
    if (error) return <Error refetch={refetch} />
    return (
        <div className="min-h-[100vh]  flex justify-center bg-green-100  max-sm:p-1 " >
            <div className="w-[60vw] max-lg:w-[99vw]">
                <h3 className="  bg-green-600   text-white w-full rounded-b p-2 flex justify-center items-center gap-10 text-center text-xl mb-4">
                    <Options
                        classesNameInput='border-0'
                        callback={(e) => { }}
                        value={SHOP_NAMES[1]}
                        options={Object.values(SHOP_NAMES)} />

                    <Options
                        classesNameInput='border-0'
                        callback={(e) => { }}
                        value={MM[1]}
                        options={MM} />

                    <Options
                        classesNameInput='border-0'
                        callback={(e) => { }}
                        value={2025}
                        options={[2025, 2026]} />
                </h3>

                <Panel className="min-h-[80vh] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_10fr_10fr_10fr_10fr_10fr] gap-1">
                    <span className={headerStyle}>Пн </span> <span className={headerStyle}>Вт </span> <span className={headerStyle}>Ср </span> <span className={headerStyle}>Чт </span> <span className={headerStyle}>Пт </span> <span className={headerStyle}>Сб </span> <span className={headerStyle}>Вс </span>
                    {printFakeDays(preDay)}
                    {printDays}
                </Panel>
            </div>
        </div>)
}