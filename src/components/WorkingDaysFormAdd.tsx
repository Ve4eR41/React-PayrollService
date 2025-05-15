import Button from "./Button";
import InputText from "./InputText";

interface newShiftInfoProps {
    timeStart: Date;
    timeEnd: Date;
    shopName: string;
    revenue: number;
    cheks: number
}

interface WorkingDaysFormAddProps {
    newShiftInfo: newShiftInfoProps;
    hSetNewShiftInfo: React.Dispatch<React.SetStateAction<newShiftInfoProps>>;
    isVisible: boolean;
}

function WorkingDaysFormAdd({ newShiftInfo, hSetNewShiftInfo, isVisible }: WorkingDaysFormAddProps) {

    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); }}
            className={'absolute bg-white p-4 flex flex-col w-[90%] left-0 mx-[5%] mt-4 shadow-md rounded-md z-10 ' + (isVisible ? "visible" : "hidden")}>

            <h3 className="text-xl mb-2">Добавление смены</h3>
            <InputText onInput={(e) => { hSetNewShiftInfo({ ...newShiftInfo, timeStart: e as Date }) }} textInput={newShiftInfo.timeStart} type="datetime-local" label="Приход" />
            <InputText onInput={(e) => { hSetNewShiftInfo({ ...newShiftInfo, timeEnd: e as Date }) }} textInput={newShiftInfo.timeEnd} type="datetime-local" label="Уход" />
            <InputText onInput={(e) => { hSetNewShiftInfo({ ...newShiftInfo, shopName: e as string }) }} textInput={newShiftInfo.shopName} type="string" label="Магазин" />
            <InputText onInput={(e) => { hSetNewShiftInfo({ ...newShiftInfo, revenue: e as number }) }} textInput={newShiftInfo.revenue} type="number" label="Выручка" />
            <InputText onInput={(e) => { hSetNewShiftInfo({ ...newShiftInfo, cheks: e as number }) }} textInput={newShiftInfo.cheks} type="number" label="Чеки" />

            <Button
                onClick={() => { }}
                className="text-center m-0 rounded-md w-full">
                Подтвердить
            </Button>

        </form>
    )
}
export default WorkingDaysFormAdd 