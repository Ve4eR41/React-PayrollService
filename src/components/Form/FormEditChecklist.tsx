import { useEffect, useState } from "react";
import Alert from "../Alert";
import FormBase from "./RawForm/FormBase";
import Input from "../input/Input";
import Button from "../Button";
import { ChecklistDetailProps, useAddChecklistMutation } from "../../store/apis/checklist";
import { getStartMouth } from "../../utils/utils";



interface FormEditChecklistProps {
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    data: ChecklistDetailProps
    date: Date
}


function FormEditChecklist({ visibleToggle, isVisible, data, date }: FormEditChecklistProps) {
    const [checklist, setRetailPlanParams] = useState(data);
    const [createRetailPlan, editStatus] = useAddChecklistMutation();
    const disabled = false;

    useEffect(() => {
        setRetailPlanParams(data);
    }, [data]);

    const onSub = async () => { await createRetailPlan({ ...checklist, date: getStartMouth(date), description: checklist.description === 'нет плана' ? '' : checklist.description }) }


    return (<>
        <Alert data={editStatus} />
        <FormBase
            formSettings={{
                title: "Планирование продаж за " + date.toLocaleDateString('ru-Ru', { month: '2-digit', year: 'numeric' }),
                visibleToggle: visibleToggle,
                isVisible,
                disabled,
                onSub: onSub
            }}>


            <Input label="План по выручке"
                onInput={(v) => { setRetailPlanParams({ ...checklist, isCompleat: !!v }) }}
                textInput={checklist.isCompleat}
                type="checkbox"
            />

            <Input label="Описание"
                onInput={(v) => { setRetailPlanParams({ ...checklist, description: String(v) }) }}
                textInput={checklist.description}
                type="text"
            />

            <Button className="rounded mt-3">Добавить</Button>

        </FormBase >
    </>
    )
}
export default FormEditChecklist;