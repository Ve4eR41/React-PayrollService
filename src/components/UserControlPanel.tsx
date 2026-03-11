import { useState } from "react";
import { useGetUserQuery, User } from "../store/apis/users";
import Button from "./Button";
import Panel from "./Panel";
import FormUserEdit from "./Form/User/FormUserEdit";
import FormUserCreate from "./Form/User/FormUserCreate";
import UserItem from "./UserItem";

export default function UserControl() {
    const { data, isLoading } = useGetUserQuery('');
    const [selectedUser, setSelectedUser] = useState<User | boolean>(false);
    const [isVisible, visibleToggle] = useState<boolean>(false);

    const users = data && (() => data.map((user) => <UserItem  user={user} onClick={() => { setSelectedUser(user) }} />))()

    return <Panel>

        <div className='flex flex-col gap-4'>
            <h3 className="w-full text-center bg-green-600 text-white p-2 text-xl rounded">Флористы</h3>
            {isLoading ? <div className='skelet h-9 rounded'></div> : users}
            <Button onClick={() => visibleToggle(true)} className="w-full rounded" >Добавить флориста</Button>
            <FormUserCreate isVisible={isVisible} visibleToggle={visibleToggle} />
        </div>

        {typeof selectedUser !== 'boolean' &&
            <FormUserEdit userCallback={setSelectedUser} userData={selectedUser} />
        }
    </Panel>

}