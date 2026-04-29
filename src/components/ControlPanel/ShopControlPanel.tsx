
import SkeletPanel from "../Loader/SkeletPanel";
import { RawControlPanel } from "./RawControlPanel";
import { getStatusFetch } from "../../utils/utils";
import { useShopListQuery } from "../../store/apis/shop";
import { useState } from "react";
import FormShopCreate from "../Form/FormShopCreate";


export default function ShopControlPanel() {
    const [isVisible, setisVisible] = useState(false);
    const { data, isLoading, error } = useShopListQuery(null, {
        refetchOnReconnect: true,
        skip: false,
    });


    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <>
        <RawControlPanel
            itemClickCallback={() => { }}
            buttonLabel="Добавить"
            buttonCallback={() => { setisVisible(true) }}
            title="Торговые точки"
            items={data}
            paramFilter={{
                'name': {
                    name: 'Магазин',
                }
            }}
        />
        <FormShopCreate visibleToggle={setisVisible} isVisible={isVisible} />
    </>

}