import React from "react";
import { useEditUserMutation, User } from "../../../store/apis/users";
import { SHOP_NAMES } from "../../../utils/utils";
import Button from "../../Button";
import Input from "../../input/Input";
import Options from "../../input/Options";
import FormBase from "../FormBase";

interface FormUserControl {
    userData: User;
    userCallback: React.Dispatch<React.SetStateAction<boolean | User>>;
}

export default function FormUserEdit({ userData, userCallback }: FormUserControl) {
    const { fio, banned, roles, id } = userData
    const disabled = false
    const [editUser] = useEditUserMutation()

    const handlerEdit = <T extends keyof typeof userData>(k: T, value: typeof userData[T]) => userCallback({ ...userData, [k]: value })

    return <FormBase formSettings={{
        title: 'Редактирование пользователя',
        disabled: disabled,
        isVisible: !!userData,
        visibleToggle: () => { userCallback(false) },
        onSub: () => { editUser(userData) },
    }}>
        <span className="absolute left-1 bottom-0.5 opacity-50 text-[8px] select-none">id {id}</span>

        <Input label="Ф.И."
            onInput={(e) => { handlerEdit("fio", e as string) }}
            textInput={fio}
            disabled={disabled}
            type="text"
        />

        <Options label="Статус"
            disabled={disabled}
            options={{ 0: 'Уволен', 1: 'Работает' }}
            value={banned ? 'Уволен' : 'Работает'}
            callback={(e) => { handlerEdit("banned", !!e) }}
        />

        <Options label="Магазин"
            disabled={disabled}
            options={SHOP_NAMES}
            value={SHOP_NAMES[1]}
            callback={() => { }}
        />

        <Options label="Должность"
            disabled={disabled}
            options={[]}
            value={'Флорист'}
            callback={() => { }}
        />

        <Options label="Роль"
            disabled={disabled}
            options={[]}
            value={roles[0].value}
            callback={() => { }}
        />

        <Button className="rounded">Изменить</Button>

    </FormBase>
}