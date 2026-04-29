import { useState } from "react";
import { useGetUserQuery, User } from "../../store/apis/users";
import FormUserEdit from "../Form/User/FormUserEdit";
import FormUserCreate from "../Form/User/FormUserCreate";
import SkeletPanel from "../Loader/SkeletPanel";
import { getStatusFetch } from "../../utils/utils";
import { RawControlPanel } from "./RawControlPanel";

export default function UserControl() {
    const { data, isLoading: isLoadingUsers, error } = useGetUserQuery('');
    const [isVisible, visibleToggle] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | undefined>();

    const isLoading = isLoadingUsers

    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>

    return <> <RawControlPanel
        title="Пользователи"
        itemClickCallback={(user) => { setSelectedUser(user) }}
        buttonCallback={() => visibleToggle(true)}
        items={data}
        paramFilter={{
            fio: {
                name: 'Сотрудник'
            },
            banReason: {
                name: 'Магазин',
            },
            jobs: {
                name: 'Должность',
                transform: v => v[0]?.description || 'Нет должности'
            }
        }}
        buttonLabel="Добавить флориста"
    />
        <FormUserCreate isVisible={isVisible} visibleToggle={visibleToggle} />
        {selectedUser && <FormUserEdit userCallback={setSelectedUser} userData={selectedUser} />}
    </>
}

