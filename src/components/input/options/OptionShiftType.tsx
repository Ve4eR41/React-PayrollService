import { useCreateList } from "../../../hook/useCreateList";
import { useShiftTypeListQuery } from "../../../store/apis/shiftType";
import Options from "../Options";

export default function OptionShiftType({ disabled, value, callback }: { disabled: boolean, value: string, callback: (e: string | number) => void }) {
    const { data, isLoading } = useShiftTypeListQuery(undefined)
    const list = useCreateList(data, 'id', 'name')

    return <Options
        label="Тип смены"
        disabled={isLoading || disabled}
        value={value}
        options={list}
        callback={callback} />

}