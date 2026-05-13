import { useGetPayrollQuery } from "../../store/apis/payroll";
import { getStatusFetch } from "../../utils/utils";
import SkeletPanel from "../Loader/SkeletPanel";
import CheckBase from "./CheckBase";

export default function CheckPayroll() {
    const { data, isLoading, error } = useGetPayrollQuery(
        {
            "timeStart": new Date("2026-05-01T07:44:35.677Z"),
            "timeEnd": new Date("2099-09-30T07:44:35.677Z")
        }
    )


    
    if (!data || isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <>
        <CheckBase obj={data}
            title="Расчетная зарабтная плата"
            postscriptum='Данная заработная плата не являеться финальной и рассчитываеться в моменте'
        />
    </>
}