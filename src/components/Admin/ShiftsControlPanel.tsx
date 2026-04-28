
import { useState } from "react";
import { Shift, useGetShiftsFullInfoQuery } from "../../store/apis/shifts";
import SkeletPanel from "../Loader/SkeletPanel";
import { RawControlPanel } from "./RawControlPanel";
import { diffInHours, getEndMouth, getStartMouth, getStatusFetch, timeInHourAndMin } from "../../utils/utils";
import FormEditShift from "../Form/FormEditShift";


export default function ShiftsControlPanel() {
    const [date] = useState<Date>(new Date());
    const [shift, setShift] = useState<Shift>();
    const [isVisible, setisVisible] = useState(false);
    const { data: shiftsData, isLoading, error } = useGetShiftsFullInfoQuery({
        startDate: getStartMouth(date),
        endDate: getEndMouth(date),
    }, {
        refetchOnReconnect: true,
        skip: false,
    });

    const extendsShiftsData = shiftsData && shiftsData.map((s) => ({
        ...s,
        avgCheck: Math.round(s.revenue / s.cheks) || 0,
        workHours: timeInHourAndMin(diffInHours(s.timeStart, s.timeEnd))
    }));

    const formateDate = (v: Date) => v.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })

    // const isLoading = true;
    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <>
        <RawControlPanel
            title="Смены"
            items={extendsShiftsData}
            itemClickCallback={(i) => { setShift(i); setisVisible(true) }}
            isAsc sortBy="timeStart"
            paramFilter={{
                'fio': {
                    name: 'Фамилия',
                    transform: (v) => v.replace(/( .).+/g, '$1.')
                },
                'cheks': {
                    name: 'Чеки',
                    transform: v => v.toLocaleString(`ru-Ru`)
                },
                'revenue': {
                    name: 'Выручка',
                    transform: v => v.toLocaleString(`ru-Ru`)
                },
                'avgCheck': {
                    name: 'Ср.чек',
                    transform: v => v.toLocaleString(`ru-Ru`)
                },
                'timeStart': {
                    name: 'Начало',
                    transform: formateDate
                },
                'timeEnd': {
                    name: 'Конец',
                    transform: formateDate
                },
                'workHours': {
                    name: 'часов',
                },
                'shiftTypeName': {
                    name: 'Тип',
                }
            }}
        />
        {shift && <FormEditShift visibleToggle={setisVisible} isVisible={isVisible} shift={shift} />}
    </>

}