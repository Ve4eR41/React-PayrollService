import Panel from "../../components/Panel";
import UserControl from "../../components/UserControlPanel";
import UserHeader from "../../components/UserHeader";



export default function AdminMain() {

    // //for test
    // const florists = [
    //     { id: 1, name: "Vova", shopName: "Hospital", workingTime: 142, revenue: 10000 },
    //     { id: 12, name: "Vova", shopName: "Hospital", workingTime: 142, revenue: 10000 },
    //     { id: 13, name: "Vova", shopName: "Hospital", workingTime: 142, revenue: 10000 },
    // ];

    // //for test
    // const shops = [
    //     { shopName: "Hospital", workingTime: 142, revenue: 10000 },
    //     { shopName: "Hospital", workingTime: 142, revenue: 10000 },
    //     { shopName: "Hospital", workingTime: 142, revenue: 10000 },
    // ];

    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-green-100 to-orange-50  max-sm:p-1 " >
            <div className="w-[60vw]  max-lg:w-[99vw]">

                <UserHeader />

                {/* <h3 className=" text-white bg-green-600  w-full rounded-full p-2  flex justify-center items-center  text-center text-xl my-4"> Панель Администратор </h3> */}

                <UserControl />


                <Panel className="h-[90vh] my-3">
                </Panel>


            </div>
        </div >
    )
}


