import Button from "../../Button";
import Input from "../../input/Input";
import { SHOP_NAMES } from "../../../utils/getShopName";
import Options from "../../input/Options";
import { Shift } from "../../../store/apis/shifts";
import { RxCross2 } from "react-icons/rx";


interface FormCreateShiftProps<T> {
    title?: string;
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    onSub: () => Promise<void>;
    shiftParams: T
    setShiftParams: React.Dispatch<React.SetStateAction<T>>
}


function RawFormCreateShift({ visibleToggle, isVisible, onSub, shiftParams, setShiftParams, title }: FormCreateShiftProps<Shift>) {



    return (
        <div onClick={() => { }} className={" fixed inset-0 bg-gray-800/25 flex items-center justify-center z-10 " + (isVisible ? "visible" : "hidden")}>
            <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); visibleToggle(false); onSub() }}
                className={'bg-white p-4 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-60 max-w-100 '}>



                <h3 className="text-xl mb-2 relative">
                    {title || "Добавление смены"}
                    <RxCross2 size={24} className="hover:text-green-500 cursor-pointer absolute right-0 top-0" onClick={() => { visibleToggle(false) }} />
                </h3>

                <Input
                    onInput={(e) => setShiftParams({ ...shiftParams, timeStart: e as Date })}
                    textInput={shiftParams.timeStart}
                    type="DateInput"
                    classesNameInput="z-70"
                    className="z-50"
                    label="Приход" />

                <Input
                    onInput={(e) => setShiftParams({ ...shiftParams, timeEnd: e as Date })}
                    textInput={shiftParams.timeEnd}
                    type="DateInput"
                    label="Уход" />

                <Options
                    callback={(e) => setShiftParams({ ...shiftParams, shopName: e as string })}
                    value={shiftParams.shopName}
                    options={Object.values(SHOP_NAMES)}
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

            </form></div>
    )
}
export default RawFormCreateShift 