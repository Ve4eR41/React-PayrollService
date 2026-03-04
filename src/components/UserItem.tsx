import { User } from "../store/apis/users";
import { getShopName } from "../utils/utils";

interface UserItemProps {
    user: User
    onClick: () => void
}
export default function UserItem({ user, onClick }: UserItemProps) {
    const { banned, id, roles, fio } = user;

    const wrapperStyle = 'relative flex items-center justify-between p-4 h-9 hover:bg-green-100 rounded cursor-pointer'


    return (
        <div key={id}
            onClick={() => { onClick() }}
            className={wrapperStyle}>
            <span className="min-w-8">{fio}</span>
            <span className="min-w-8">{getShopName(1)}</span>
            <span className="min-w-8">{banned}</span>
            <span className="min-w-8">{roles.map(({ value }) => value).join(', ')}</span>
        </div>
    )
}