
import SkeletPanel from "../Loader/SkeletPanel";
import { RawControlPanel } from "./RawControlPanel";
import { getStatusFetch } from "../../utils/utils";
import { useJobListQuery } from "../../store/apis/job";


export default function JobControlPanel() {
    const { data, isLoading, error } = useJobListQuery(null, {
        refetchOnReconnect: true,
        skip: false,
    });


    // const formateDate = (v: Date) => v.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
    // const isLoading = true;
    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <>
        <RawControlPanel
            itemClickCallback={() => { }}
            title="Должности"
            items={data}
            paramFilter={{
                'description': {
                    name: 'Должность',
                    transform: (v) => v.replace(/( .).+/g, '$1.')
                },
                'value': {
                    name: 'Ставка',
                },
            }}
        />
    </>

}