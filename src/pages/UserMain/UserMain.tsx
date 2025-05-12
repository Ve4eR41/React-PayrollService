import defaultAva from "../../assets/defaultAva.jpg"
import Panel from "../../components/Panel";
import UserHeader from "../../components/UserHeader"
import WorkingDays from "../../components/WorkingDays";

// const dateSettings = { hour: 'numeric', hour: 'numeric', hour: 'numeric' }

function UserMain() {
    const { name, jobTitle, shopName } = { name: 'Дудка Виктор', jobTitle: 'Помощник', shopName: 'Госпиталь', }
    const workingDays = [
        { timeStart: 'Tue May 06 2025 09:00:00 GMT+0300', timeEnd: 'Tue May 06 2025 20:00:00 GMT+0300', shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: 'Tue May 07 2025 09:00:00 GMT+0300', timeEnd: 'Tue May 07 2025 20:00:00 GMT+0300', shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: 'Tue May 08 2025 09:00:00 GMT+0300', timeEnd: 'Tue May 09 2025 20:00:00 GMT+0300', shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
    ];



    return (
        <div className="h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw]  max-lg:w-[99vw]">

                <UserHeader name={name} jobTitle={jobTitle} shopName={shopName} defaultAva={defaultAva} />

                <div className="flex gap-4">

                    <WorkingDays className='w-[70%]' workingDays={workingDays} />

                    <Panel>
                    </Panel>

                </div>

            </div>
        </div>
    )
}
export default UserMain 