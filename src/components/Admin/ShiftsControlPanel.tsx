
import { useState } from "react";
import { useGetShiftsFullInfoQuery } from "../../store/apis/shifts";
import SkeletPanel from "../Loader/SkeletPanel";
import { RawControlPanel } from "./RawControlPanel";
import { getEndMouth, getStartMouth, getStatusFetch } from "../../utils/utils";


export default function ShiftsControlPanel() {
    const [date] = useState<Date>(new Date());
    const { data: shiftsData, isLoading, error } = useGetShiftsFullInfoQuery({
        startDate: getStartMouth(date),
        endDate: getEndMouth(date),
    }, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        skip: false,
    });



    // const isLoading = true;
    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <RawControlPanel
        itemClickCallback={() => { }}
        buttonCallback={() => { }}
        paramFilter={{
            'fio': {
                name: 'Фамилия',
            },
            'cheks': {
                name: 'Чеки'
            },
            'revenue': {
                name: 'Выручка'
            },
            'timeStart': {
                name: 'Начало',
                transform: (v) => v.toLocaleString()
            },
            'timeEnd': {
                name: 'Конец',
                transform: (v) => v.toLocaleString()
            }
        }}
        items={shiftsData}
        buttonLabel="Добавить смену"
        title="Смены"
    />


}