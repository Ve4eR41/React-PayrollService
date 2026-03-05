import { useGetThisUserQuery } from "../store/apis/users";
import { getShopId } from "../utils/utils"
import defaultAva from "../assets/defaultAva.jpg"


// interface UserHeaderProps {
// }

function UserHeader() {
    const style = ' text-white bg-green-600 h-[7vh] w-full rounded-b-4xl rounded-l-4xl pr-6  pl-2 flex items-center text-sm'
    const token = localStorage.getItem('token');
    const { data, isLoading, isError } = useGetThisUserQuery(undefined, { skip: !token, });
    const { jobTitle, shopName } = { jobTitle: 'Помощник', shopName: 'Госпиталь', };

    if (isLoading) return <div className={"skelet" + style}> </div>;
    if (isError || !data) return <div className={style}>Ошибка загрузки профиля</div>;

    const { fio } = data

    return (
        <>
            <div className=" text-white bg-green-600 h-[7vh] w-full rounded-b-4xl rounded-l-4xl pr-6  pl-2 flex items-center text-sm">
                <div className=" rounded-full h-[80%] aspect-square flex items-center justify-center overflow-hidden">
                    <img className="min-h-[7vh] aspect-square" src={defaultAva} alt="" />
                </div>

                <div className="m-2 flex flex-col">
                    <div className="mx-2 my-0.5"> <span>{jobTitle}:</span> <span> {fio} </span> </div>
                    <div className="mx-2 my-0.5"> <span>Магазин:</span> <a href={`/ShopMain?shop=${getShopId(shopName)}`}> {shopName} </a> </div>
                </div>

            </div>
        </>
    )
}
export default UserHeader