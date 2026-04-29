import React, { useState } from "react";
import Button from "../Button";
import Input from "../input/Input";
import FormBase from "./RawForm/FormBase";
import { CreateShopProps, useCreateShopMutation } from "../../store/apis/shop";

interface FormShopControl {
    isVisible: boolean
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>
}



export default function FormShopCreate({ isVisible, visibleToggle }: FormShopControl) {
    const [shop, setShop] = useState<CreateShopProps>({ name: '' })
    const disabled = false
    const [createShop] = useCreateShopMutation()



    return <FormBase formSettings={{
        title: 'Добавление магазина',
        disabled: disabled,
        isVisible,
        visibleToggle,
        onSub: () => { createShop(shop) },
    }}>

        <Input label="Магазин"
            onInput={(e) => { setShop({ name: e as string }) }}
            textInput={shop.name}
            disabled={disabled}
            type="text"
        />

        <Button className="rounded mt-3">Добавить</Button>

    </FormBase>
}