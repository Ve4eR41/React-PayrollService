
import SkeletPanel from "../Loader/SkeletPanel";
import { RawControlPanel } from "./RawControlPanel";
import { getStatusFetch, startDateInMonth } from "../../utils/utils";
import { ShopDetail, useShopListQuery } from "../../store/apis/shop";
import { RetailPlanDetail, useGetRetailPlanByDateQuery } from "../../store/apis/retailPlan";
import FormEditRetailPlan from "../Form/FormEditRetaioPlan";
import { useState } from "react";
import MonthToggle from "../input/MonthToggle";


export default function RetailPlanControlPanel() {
    const [isVisible, setisVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [retailPlan, setRetailPlan] = useState<RetailPlanDetail>();
    const { data: shops, isLoading, error } = useShopListQuery(null, {
        refetchOnReconnect: true,
        skip: false,
    });

    const { data: retailPlans } = useGetRetailPlanByDateQuery({ date: startDateInMonth(selectedDate) })

    const shopRetailPlans = retailPlans && retailPlans.reduce((result, plan) => {
        return { ...result, [plan.shopId]: plan }
    }, {} as Record<number, RetailPlanDetail>)

    type ShopWithRetailPlan = ShopDetail & RetailPlanDetail;
    const data: ShopWithRetailPlan[] | undefined = shopRetailPlans && shops && shops.map((shop) => {
        return { ...shop, ...shopRetailPlans[shop.id] }
    })



    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <RawControlPanel
        itemClickCallback={(i) => { setRetailPlan(i); setisVisible(true); }}
        title="План продаж на месяц"
        items={data}
        paramFilter={{
            name: {
                name: 'Магазин',
            },
            value: {
                name: 'План',
                transform: v => v?.toLocaleString() || 0
            },
            description: {
                name: 'Описание'
            },
            date: {
                name: 'Дата',
                transform: v => v ? new Date(v).toLocaleString('ru-Ru', { month: '2-digit', year: 'numeric' }) : ''
            }
        }}
    >
        <MonthToggle selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        {retailPlan && <FormEditRetailPlan isVisible={isVisible} visibleToggle={setisVisible} retailplan={retailPlan} date={startDateInMonth(selectedDate)} />}
    </RawControlPanel>

}