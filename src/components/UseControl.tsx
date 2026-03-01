import { useGetUserQuery } from "../store/apis/users"
import { getShopName } from "../utils/utils"
import Button from "./Button"
import Panel from "./Panel"

interface UseControlProps {
    classNames?: string
}

export default function UserControl({ classNames }: UseControlProps) {
    const { data } = useGetUserQuery('')


    const users = data && (() => data
        .map(({ banned, fio, id, roles }) =>
            <div key={id}
                onClick={() => { }}
                className="relative flex items-center justify-between p-4 h-9 hover:bg-green-100 rounded cursor-pointer">
                <span>{fio}</span>
                <span>{getShopName(1)}</span>
                <span>{banned}</span>
                <span>{roles.map(({ value }) => value).join(', ')}</span>
            </div>)
    )()

    return <Panel>
        <div className='flex flex-col gap-4'>
            <h3 className="w-full text-center bg-green-600 text-white p-2 text-xl rounded">Флористы</h3>
            {users}
            <Button className="w-full rounded" >Добавить флориста</Button>
        </div>
    </Panel>

}