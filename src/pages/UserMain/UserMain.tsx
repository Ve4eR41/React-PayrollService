import { useLoaderData } from "react-router-dom";
import defaultAva from "../../assets/defaultAva.jpg"
import Panel from "../../components/Panel";
import UserHeader from "../../components/UserHeader"
import UserShifts from "../../components/UserShifts";


function UserMain() {
    const { name, jobTitle, shopName } = { name: 'Дудка Виктор', jobTitle: 'Помощник', shopName: 'Госпиталь', }
    const { shifts } = useLoaderData();
    
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

                <div className="flex gap-1">

                    <UserShifts className='w-[100%]' workingDays={shifts} />

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