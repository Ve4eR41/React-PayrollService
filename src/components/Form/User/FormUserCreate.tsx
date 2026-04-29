import React, { useState } from "react";
import { generatePassword } from "../../../utils/utils";
import Button from "../../Button";
import Input from "../../input/Input";
import FormBase from "../RawForm/FormBase";
import { useCreateUserMutation } from "../../../store/apis/users";

interface FormUserControl {
    isVisible: boolean
    visibleToggle: React.Dispatch<React.SetStateAction<boolean>>
}



export default function FormUserCreate({ isVisible, visibleToggle }: FormUserControl) {
    const [user, setUser] = useState({ fio: 'Фамилия Имя', password: generatePassword() })
    const disabled = false
    const [createUser] = useCreateUserMutation()



    return <FormBase formSettings={{
        title: 'Добавление пользователя',
        disabled: disabled,
        isVisible,
        visibleToggle,
        onSub: () => { createUser(user) },
    }}>

        <Input label="Ф.И."
            onInput={(e) => { setUser({ ...user, fio: e as string }) }}
            textInput={user.fio}
            disabled={disabled}
            type="text"
        />

        <Input label="Пароль"
            onInput={(e) => { setUser({ ...user, password: e as string }) }}
            textInput={user.password}
            disabled={disabled}
            type="text"
        />

        <Button onClick={(e) => { e.preventDefault(); setUser({ ...user, password: generatePassword() }) }} secondary className="rounded">Создать пароль</Button>
        <Button className="rounded mt-3">Добавить</Button>

    </FormBase>
}