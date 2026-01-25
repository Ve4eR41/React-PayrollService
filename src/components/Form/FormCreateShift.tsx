import { useState } from "react";
import { getShopId, SHOP_NAMES } from "../../utils/getShopName";
import { useCreateShiftMutation } from "../../store/apis/shifts";
import RawFormCreateShift from "./RawForm/RawFormCreateShift";



interface FormCreateShiftProps {
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
}


function FormCreateShift({ isVisible, visibleToggle }: FormCreateShiftProps) {
    const [shiftParams, setShiftParams] = useState({ timeStart: new Date(), timeEnd: new Date(), shopName: SHOP_NAMES[1], revenue: 0, cheks: 0, id: 1 });
    const [createShift] = useCreateShiftMutation()



    const onSub = async () => {
        // for (const value in Object.values(shiftParams))
        // if (!value || value === '0') return console.log(`err ` + value)
        await createShift({ ...shiftParams, shopName: getShopId(shiftParams.shopName) })
    }



    return (<RawFormCreateShift visibleToggle={visibleToggle} isVisible={isVisible} onSub={onSub} setShiftParams={setShiftParams} shiftParams={shiftParams} />)
}
export default FormCreateShift 