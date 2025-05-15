import Panel from "../../components/Panel";
import Table from "../../components/Table";



export default function AdminMain() {

    //for test
    const florists = [
        { name: "Vova", shopName: "Hospital", workingTime: 142, revenue: 10000 },
        { name: "Vova", shopName: "Hospital", workingTime: 142, revenue: 10000 },
        { name: "Vova", shopName: "Hospital", workingTime: 142, revenue: 10000 },
    ];

    //for test
    const shops = [
        { shopName: "Hospital", workingTime: 142, revenue: 10000 },
        { shopName: "Hospital", workingTime: 142, revenue: 10000 },
        { shopName: "Hospital", workingTime: 142, revenue: 10000 },
    ];

    return (
        <div className="h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw]  max-lg:w-[99vw]">
                <h3 className=" text-white bg-green-600  w-full rounded-b-full rounded-l-full p-2  flex justify-center items-center  text-center text-xl mb-4"> Панель Администратор </h3>
                <Panel className="h-[90vh]">
                    <Table title="Флористы" arr={florists} />
                    <Table title="Магазины" arr={shops} />
                </Panel>
            </div>
        </div >
    )
}