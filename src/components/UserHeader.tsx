
interface UserHeaderProps {
    defaultAva: string,
    jobTitle: string,
    name: string,
    shopName: string
}

function UserHeader({ defaultAva, jobTitle, name, shopName }: UserHeaderProps) {
    return (
        <>
            <div className=" text-white bg-green-600 h-[7vh] w-full rounded-b-4xl rounded-l-4xl pr-6  pl-2 flex items-center text-sm mb-4">
                <div className=" rounded-full h-[80%] aspect-square flex items-center justify-center overflow-hidden">
                    <img className="min-h-[7vh] aspect-square" src={defaultAva} alt="" />
                </div>

                <div className="m-2 flex flex-col">
                    <div className="mx-2 my-0.5"> <span>{jobTitle}:</span> <span> {name}</span> </div>
                    <div className="mx-2 my-0.5"> <span>Магазин:</span> <span> {shopName} </span> </div>
                </div>

            </div>
        </>
    )
}
export default UserHeader