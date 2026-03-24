import React, { useMemo } from "react";
import { useEditUserMutation, User } from "../../../store/apis/users";
import { SHOP_NAMES } from "../../../utils/utils";
import Button from "../../Button";
import Input from "../../input/Input";
import Options from "../../input/Options";
import FormBase from "../FormBase";
import { useJobListQuery } from "../../../store/apis/job";

interface FormUserControl {
    userData: User;
    userCallback: React.Dispatch<React.SetStateAction<boolean | User>>;
}

export default function FormUserEdit({ userData, userCallback }: FormUserControl) {
    const { fio, banned, roles, id, jobs } = userData
    const disabled = false
    const [editUser] = useEditUserMutation()
    const { data: job, isLoading: isLoadingJob } = useJobListQuery('')

    const handlerEdit = <T extends keyof typeof userData>(k: T, value: typeof userData[T]) => userCallback({ ...userData, [k]: value })

    const jobList = useMemo(() => !job ? [] : job.reduce((result, job) => { return { ...result, [job.id]: job.description } }, {}), [job])

    const handleSubmit = () => {
        console.log('userData:', userData);
        editUser(userData);
    }

    return <FormBase formSettings={{
        title: 'Редактирование пользователя',
        disabled: disabled,
        isVisible: !!userData,
        visibleToggle: () => { userCallback(false) },
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
            isLoading={isLoadingJob}
            disabled={isLoadingJob}
            options={jobList}
            value={jobs[0]?.description}
            callback={(e) => { const a = e as string; handlerEdit('jobs', [{ description: jobList[a as keyof typeof jobList], value: a }]) }} />

        <Options label="Роль"
            disabled={disabled}
            options={[]}
            value={roles[0].value}
            callback={() => { }}
        />

        <Button className="rounded">Изменить</Button>

    </FormBase>
}