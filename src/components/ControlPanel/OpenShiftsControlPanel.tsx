
import { useGetOpenShiftsQuery } from "../../store/apis/shifts";
import SkeletPanel from "../Loader/SkeletPanel";
import { ControlPanelBase } from "./ControlPanelBase";
import { getStatusFetch } from "../../utils/utils";


export default function OpenShiftsControlPanel() {
    const { data: openShiftsData, isLoading, error } = useGetOpenShiftsQuery(null, {
        refetchOnReconnect: true,
        skip: false,
    });


    const formateDate = (v: Date) => v.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })

    // const isLoading = true;
    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <>
        <ControlPanelBase
            itemClickCallback={() => { }}
            title="Открытые смены"
            items={openShiftsData}
            sortBy="timeStart"
            isAsc={true}
            paramFilter={{
                'fio': {
                    name: 'Фамилия',
                    transform: (v) => v.replace(/( .).+/g, '$1.')
                },
                'timeStart': {
                    name: 'Начало',
                    transform: formateDate
                },
            }}
        />
    </>

}