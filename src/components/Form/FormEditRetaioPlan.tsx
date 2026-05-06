import { useEffect, useState } from "react";
import Alert from "../Alert";
import FormBase from "./RawForm/FormBase";
import Input from "../input/Input";
import { RetailPlanDetail, useCreateRetailPlanMutation } from "../../store/apis/retailPlan";
import Button from "../Button";



interface FormCreateRetailPlanProps {
    isVisible: boolean;
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>;
    retailplan: RetailPlanDetail
    date: Date
}


function FormEditRetailPlan({ visibleToggle, isVisible, retailplan, date }: FormCreateRetailPlanProps) {
    const [retailplanParams, setRetailPlanParams] = useState(retailplan);
    const disabled = false;
    const [createRetailPlan, editStatus] = useCreateRetailPlanMutation();

    useEffect(() => {
        setRetailPlanParams(retailplan);
    }, [retailplan]);

    const onSub = async () => { await createRetailPlan({ ...retailplanParams, date, shopId: retailplanParams.id }) }


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
                onInput={(v) => { setRetailPlanParams({ ...retailplanParams, value: Number(v) }) }}
                textInput={retailplanParams.value}
                type="number"
            />

            <Input label="Описание"
                onInput={(v) => { setRetailPlanParams({ ...retailplanParams, description: String(v) }) }}
                textInput={retailplanParams.description}
                type="text"
            />

            <Button className="rounded mt-3">Добавить</Button>

        </FormBase >
    </>
    )
}
export default FormEditRetailPlan;