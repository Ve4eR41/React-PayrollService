import { useState } from "react";
import Button from "../Button";
import Input from "../input/Input";
import { getShopId, SHOP_NAMES } from "../../utils/getShopName";
import { useCreateShiftMutation } from "../../store/apis/shifts";
import Options from "../input/Options";



interface FormCreateShiftProps {
    isVisible: boolean;
}


function FormCreateShift({ isVisible }: FormCreateShiftProps) {
    const [shiftParams, setShiftParams] = useState({ timeStart: new Date(), timeEnd: new Date(), shopName: SHOP_NAMES[1], revenue: 0, cheks: 0 });
    const [createShift] = useCreateShiftMutation()

    const onSub = async () => {
        // for (const value in Object.values(shiftParams))
        //     if (!value || value === '0') return console.log(`err`)
        console.log(shiftParams);

        await createShift({ ...shiftParams, shopName: getShopId(shiftParams.shopName) })
    }



    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); onSub() }}
            className={'absolute bg-white p-4 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-10 ' + (isVisible ? "visible" : "hidden")}>

            <h3 className="text-xl mb-2">Добавление смены</h3>

            <Input
                onInput={(e) => setShiftParams({ ...shiftParams, timeStart: e as Date })}
                textInput={shiftParams.timeStart}
                type="DateInput"
                label="Приход" />

            <Input
                onInput={(e) => { console.log(shiftParams); setShiftParams({ ...shiftParams, timeEnd: e as Date }) }}
                textInput={shiftParams.timeEnd}
                type="DateInput"
                label="Уход" />

            <Options
                callback={(e) => setShiftParams({ ...shiftParams, shopName: e as string })}
                value={shiftParams.shopName}
                otions={Object.values(SHOP_NAMES)}
                label="Магазин" />

            <Input
                onInput={(e) => setShiftParams({ ...shiftParams, revenue: e as number })}
                textInput={shiftParams.revenue}
                type="number"
                label="Выручка" />

            <Input
                onInput={(e) => setShiftParams({ ...shiftParams, cheks: e as number })}
                textInput={shiftParams.cheks}
                type="number"
                label="Чеки"
            />

            <Button
                className="text-center m-0 rounded-md w-full">
                Подтвердить
            </Button>

        </form>
    )
}
export default FormCreateShift 