import { useState } from "react"
import { useGetUserQuery, User } from "../store/apis/users"
import { getShopName } from "../utils/utils"
import Button from "./Button"
import Panel from "./Panel"
import FormUserEdit from "./Form/User/FormUserEdit"
import FormUserCreate from "./Form/User/FormUserCreate"

// interface UseControlProps {
// }

export default function UserControl() {
    const { data } = useGetUserQuery('')
    const [selectedUser, setSelectedUser] = useState<User | boolean>(false)
    const [isVisible, visibleToggle] = useState<boolean>(true)

    const users = data && (() => data
        .map((user) => {
            const { banned, id, roles, fio } = user;
            return <div key={id}
                onClick={() => setSelectedUser(user)}
                className="relative flex items-center justify-between p-4 h-9 hover:bg-green-100 rounded cursor-pointer">
                <span className="min-w-8">{fio}</span>
                <span className="min-w-8">{getShopName(1)}</span>
                <span className="min-w-8">{banned}</span>
                <span className="min-w-8">{roles.map(({ value }) => value).join(', ')}</span>
            </div>
        })
    )()

    return <Panel>

        <div className='flex flex-col gap-4'>
            <h3 className="w-full text-center bg-green-600 text-white p-2 text-xl rounded">Флористы</h3>
            {users}
            <Button onClick={() => visibleToggle(true)} className="w-full rounded" >Добавить флориста</Button>
            <FormUserCreate isVisible={isVisible} visibleToggle={visibleToggle} />
        </div>

        {typeof selectedUser !== 'boolean' &&
            <FormUserEdit userCallback={setSelectedUser} userData={selectedUser} />
        }
    </Panel>

}