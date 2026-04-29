
import SkeletPanel from "../Loader/SkeletPanel";
import { RawControlPanel } from "./RawControlPanel";
import { getStatusFetch } from "../../utils/utils";
import { useShopListQuery } from "../../store/apis/shop";


export default function ShopControlPanel() {
    const { data, isLoading, error } = useShopListQuery(null, {
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
            buttonLabel="Добавить"
            buttonCallback={() => { }}
            title="Торговые точки"
            items={data}
            paramFilter={{
                'name': {
                    name: 'Магазин',
                }
            }}
        />
    </>

}