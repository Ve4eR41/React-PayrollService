import { useState } from "react";
import { getShopId } from "../../utils/getShopName";
import { useEditShiftMutation } from "../../store/apis/shifts";
import RawFormCreateShift from "./RawForm/RawFormCreateShift";



interface FormCreateShiftProps {
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    shift: { timeStart: Date, timeEnd: Date, shopName: string, revenue: number, cheks: number, id: number }
}


function FormEditShift({ visibleToggle, isVisible, shift }: FormCreateShiftProps) {
    const [shiftParams, setShiftParams] = useState(shift);
    const [editShift] = useEditShiftMutation()



    const onSub = async () => {
        console.log(shiftParams);
        // for (const value in Object.values(shiftParams))
        // if (!value || value === '0') return console.log(`err ` + value)
        await editShift({ ...shiftParams, shopName: getShopId(shiftParams.shopName), shiftId: shift.id })
    }



    return (<RawFormCreateShift visibleToggle={visibleToggle} title="Редактирование смены" isVisible={isVisible} onSub={onSub} setShiftParams={setShiftParams} shiftParams={shiftParams} />)
}
export default FormEditShift;