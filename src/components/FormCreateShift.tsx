import { useState } from "react";
import Button from "./Button";
import InputText from "./InputText";
import { getShopId } from "../utils/getShopName";
import { useCreateShiftMutation } from "../store/apis/shifts";



interface FormCreateShiftProps {
    isVisible: boolean;
}


function FormCreateShift({ isVisible }: FormCreateShiftProps) {
    const defaultShiftParams = { timeStart: new Date(), timeEnd: new Date(), shopName: "", revenue: 0, cheks: 0 }
    const [shiftParams, setShiftParams] = useState(defaultShiftParams);
    const [createShift, creShiftResponse] = useCreateShiftMutation()

    const onSub = async () => {
        for (const value in Object.values(shiftParams))
            if (!value && value != '0') return console.log(`err`)

        await createShift({ ...shiftParams, shopName: getShopId(shiftParams.shopName) }).then(() => {
            setShiftParams(defaultShiftParams)
        })
    }



    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); onSub() }}
            className={'absolute bg-white p-4 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-10 ' + (isVisible ? "visible" : "hidden")}>

            <h3 className="text-xl mb-2">Добавление смены</h3>

            <InputText
                onInput={(e) => setShiftParams({ ...shiftParams, timeStart: e as Date })}
                textInput={shiftParams.timeStart}
                type="DateInput"
                label="Приход" />

            <InputText
                onInput={(e) => setShiftParams({ ...shiftParams, timeEnd: e as Date })}
                textInput={shiftParams.timeEnd}
                type="DateInput"
                label="Уход" />

            <InputText
                onInput={(e) => setShiftParams({ ...shiftParams, shopName: e as string })}
                textInput={shiftParams.shopName}
                type="string"
                label="Магазин" />

            <InputText
                onInput={(e) => setShiftParams({ ...shiftParams, revenue: e as number })}
                textInput={shiftParams.revenue}
                type="number"
                label="Выручка" />

            <InputText
                onInput={(e) => setShiftParams({ ...shiftParams, cheks: e as number })}
                textInput={shiftParams.cheks}
                type="number"
                label="Чеки" />

            <Button
                className="text-center m-0 rounded-md w-full">
                Подтвердить
            </Button>

        </form>
    )
}
export default FormCreateShift 