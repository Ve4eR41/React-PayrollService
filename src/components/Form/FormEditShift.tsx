import { useState } from "react";
import { getShopId, isMoreDaysLimit } from "../../utils/utils";
import { useDeleteShiftMutation, useEditShiftMutation } from "../../store/apis/shifts";
import RawFormCreateShift from "./RawForm/RawFormCreateShift";
import Button from "../Button";
import { BiTrash } from "react-icons/bi";
import Alert from "../Alert";



interface FormCreateShiftProps {
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    shift: { timeStart: Date, timeEnd: Date, shopName: string, revenue: number, cheks: number, id: number }
}


function FormEditShift({ visibleToggle, isVisible, shift }: FormCreateShiftProps) {
    const [shiftParams, setShiftParams] = useState(shift);
    const [editShift, editStatus] = useEditShiftMutation()
    const [deleteShift, deleteStatus] = useDeleteShiftMutation();
    const disabled = !isMoreDaysLimit(shift.timeStart)

    const handlerDelete = async () => { await deleteShift({ shiftId: shift.id }) }



    const onSub = async () => {
        console.log(shiftParams);
        // for (const value in Object.values(shiftParams))
        // if (!value || value === '0') return console.log(`err ` + value)
        await editShift({ ...shiftParams, shopName: getShopId(shiftParams.shopName), shiftId: shift.id })
    }


    return (<>

        <Alert data={editStatus} />
        <Alert data={deleteStatus} />

        <RawFormCreateShift
            disabled={disabled}
            visibleToggle={visibleToggle}
            title="Редактирование смены"
            isVisible={isVisible}
            onSub={onSub}
            setShiftParams={setShiftParams}
            shiftParams={shiftParams} >
            {
                disabled ||
                <Button onClick={(e) => { e.preventDefault(); visibleToggle(false); handlerDelete() }}
                    className="text-center m-0 mt-3 rounded-md w-full">
                    <BiTrash /> Удалить смену
                </Button>
            }

        </RawFormCreateShift >
    </>
    )
}
export default FormEditShift;