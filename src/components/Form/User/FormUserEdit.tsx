import React from "react";
import { useEditUserMutation, User } from "../../../store/apis/users";
import { SHOP_NAMES } from "../../../utils/utils";
import Button from "../../Button";
import Input from "../../input/Input";
import Options from "../../input/Options";
import FormBase from "../RawForm/FormBase";
import { useJobListQuery } from "../../../store/apis/job";
import { useRoleListQuery } from "../../../store/apis/role";
import { useCreateList } from "../../../hook/useCreateList";

interface FormUserControl {
    userData: User;
    userCallback: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export default function FormUserEdit({ userData, userCallback }: FormUserControl) {
    const { fio, banned, roles, id, jobs } = userData
    const disabled = false
    const [editUser] = useEditUserMutation()
    const { data: _jobList, isLoading: isLoadingJobList } = useJobListQuery('')
    const { data: _roleList, isLoading: isLoadingRoleList } = useRoleListQuery('')

    const handlerEdit = <T extends keyof typeof userData>(k: T, value: typeof userData[T]) => userCallback({ ...userData, [k]: value })

    const jobList = useCreateList(_jobList, 'id', 'description')
    const roleList = useCreateList(_roleList, 'id', 'value')

    const handleSubmit = () => {
        console.log('userData:', userData);
        editUser(userData);
    }

    return <FormBase formSettings={{
        title: 'Редактирование пользователя',
        disabled: disabled,
        isVisible: !!userData,
        visibleToggle: () => { userCallback(undefined) },
        onSub: handleSubmit,
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
            isLoading={isLoadingJobList}
            disabled={isLoadingJobList}
            options={jobList}
            value={jobs[0]?.description}
            callback={(e) => { handlerEdit('jobs', [{ description: jobList[e], id: e as number, value: '' }]) }}
        />

        <Options label="Роль"
            isLoading={isLoadingRoleList}
            disabled={isLoadingRoleList}
            options={roleList}
            value={roles[0].value}
            callback={(e) => { handlerEdit('roles', [{ value: roleList[e], id: e as number, description: '' }]) }}
        />

        <Button className="rounded">Изменить</Button>

    </FormBase>
}