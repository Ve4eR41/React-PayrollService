import { useEffect, useState } from "react";
import { getShopId } from "../../utils/getShopName";
import { useEditShiftMutation } from "../../store/apis/shifts";
import RawFormCreateShift from "./RawForm/RawFormCreateShift";
import Button from "../Button";
import { BiTrash } from "react-icons/bi";
import Alert from "../alert";



interface FormCreateShiftProps {
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    shift: { timeStart: Date, timeEnd: Date, shopName: string, revenue: number, cheks: number, id: number }
    deleteHandler: () => void;
}


function FormEditShift({ visibleToggle, isVisible, shift, deleteHandler }: FormCreateShiftProps) {
    const [shiftParams, setShiftParams] = useState(shift);
    const [editShift, { isError, error, isLoading, isSuccess }] = useEditShiftMutation()



    const onSub = async () => {
        console.log(shiftParams);
        // for (const value in Object.values(shiftParams))
        // if (!value || value === '0') return console.log(`err ` + value)
        await editShift({ ...shiftParams, shopName: getShopId(shiftParams.shopName), shiftId: shift.id })
    }


    return (<>
        <Alert
            isVisible={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
            text={error?.data?.message}
            type={"Error"}
        />

        <RawFormCreateShift
            visibleToggle={visibleToggle}
            title="Редактирование смены"
            isVisible={isVisible}
            onSub={onSub}
            setShiftParams={setShiftParams}
            shiftParams={shiftParams} >
            <Button onClick={deleteHandler}
                className="text-center m-0 mt-3 rounded-md w-full">
                <BiTrash /> Удалить смену
            </Button>
        </RawFormCreateShift >
    </>
    )
}
export default FormEditShift;