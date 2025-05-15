import defaultAva from "../../assets/defaultAva.jpg"
import Panel from "../../components/Panel";
import UserHeader from "../../components/UserHeader"
import WorkingDays from "../../components/WorkingDays";


function UserMain() {
    const { name, jobTitle, shopName } = { name: 'Дудка Виктор', jobTitle: 'Помощник', shopName: 'Госпиталь', }

    //for test
    const workingDays = [
        { timeStart: new Date('Tue May 06 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 06 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 08 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 09 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
    ];
    //for test
    const salaryInfo = [
        { value: 0, lable: "Полная ЗП", },
        { value: 0, lable: "Больничный" },
        { value: 0, lable: "Доп.Выплаты" },
        { value: 0, lable: "Отпускные" },
        { value: 0, lable: "Итог" },
        { value: 0, lable: "Отпускные на карту" },
        { value: 0, lable: "Аванс наличные" },
        { value: 0, lable: "Аванс Карта" },
        { value: 0, lable: "ЗП карта" },
        { value: 0, lable: "НДФЛ" },
        { value: 0, lable: "Прогул" },
        { value: 0, lable: "Сбор на ДР" },
        { value: 0, lable: "Итог" }
    ];


    const printSalaryInfo = salaryInfo.map((salaryEl, i) => { return <p key={i}> 📌 <span>{salaryEl.lable}</span> : <span>{salaryEl.value}</span> </p> })



    return (
        <div className="h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw]  max-lg:w-[99vw]">

                <UserHeader name={name} jobTitle={jobTitle} shopName={shopName} defaultAva={defaultAva} />

                <div className="flex gap-4">

                    <WorkingDays className='w-[70%]' workingDays={workingDays} />

                    <Panel >
                        <h3 className="text-2xl ">Зарплата</h3>
                        <span className="text-sm "> Чтобы посмотерать наведитеся на блок</span>
                        <div className="not-hover:blur-sm mt-4">
                            {printSalaryInfo}
                        </div>
                    </Panel>

                </div>

            </div>
        </div>
    )
}
export default UserMain 