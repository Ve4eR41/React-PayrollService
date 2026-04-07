import { useGetThisUserQuery } from "../store/apis/users";
import { getShopId } from "../utils/utils"
import defaultAva from "../assets/defaultAva.jpg"
import NavigationPanel from "./NavigationPanel";

function UserHeader() {
    const token = localStorage.getItem('token');
    const { data, isLoading, isError } = useGetThisUserQuery(undefined, { skip: !token, });
    const { shopName } = { shopName: 'Госпиталь', };

    if (isLoading) return <div className="text-white bg-green-600 h-[7vh] w-full rounded-b-4xl rounded-l-4xl pr-6 pl-2 flex items-center text-sm">Загрузка...</div>;
    if (isError || !data) return <div className="text-white bg-green-600 h-[7vh] w-full rounded-b-4xl rounded-l-4xl pr-6 pl-2 flex items-center text-sm">Ошибка загрузки профиля</div>;

    const { fio, jobs } = data
    const jobTitle = jobs[0].description
    const jobPayroll = jobs[0].value

    return (
        <>
            <div className=" text-white bg-green-600 md:h-[7vh] h-[10vh] w-full rounded-b-4xl rounded-l-4xl pr-6 overflow-hidden pl-2 flex items-center text-sm">

                <div className=" rounded-full h-[80%] aspect-square flex items-center justify-center overflow-hidden">
                    <img className="w-full " src={defaultAva} alt="" />
                </div>

                <div className=" p-2 flex h-full w-full flex-col flex-wrap content-start">
                    <div className="mx-2 my-0.5"> <span>{jobTitle}:</span> <span> {fio} </span> </div>
                    <div className="mx-2 my-0.5"> <span>Магазин:</span> <a href={`/ShopMain?shop=${getShopId(shopName)}`}> {shopName} </a> </div>
                    {/* <div className="mx-2 my-0.5"> <span>Должность:</span> {jobTitle}</div> */}
                    <div className="mx-2 my-0.5"> <span>Ставка:</span> {jobPayroll} ₽/ч</div>
                </div>


            </div>

            <NavigationPanel />

        </>
    )
}

export default UserHeader
