import { getShopName } from "../../../utils/utils";
import { backend } from "../../../../const";

interface ShiftsType {
    id: number;
    timeStart: string;
    userId: number;
    timeEnd: string;
    shopName: number;
    revenue: number;
    cheks: number;
    createdAt: string;
    updatedAt: string;
}

export async function getShifts() {
    const token = localStorage.getItem('token')
    const res = await fetch(`${backend}/shifts`,
        {
            headers: {
                method: "GET",
                Authorization: 'Bearer ' + token
            }
        }
    )
    const shifts: ShiftsType[] = await res.json()
    const data = shifts.map((shift) => { return { ...shift, shopName: getShopName(shift.shopName) || '' } })
    return data
}


