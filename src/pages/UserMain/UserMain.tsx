import defaultAva from "../../assets/defaultAva.jpg"
import Panel from "../../components/Panel";
import UserHeader from "../../components/UserHeader"
import UserShifts from "../../components/UserShifts";
import { useGetShiftsQuery } from "../../store/apis/shifts"; // Импортируйте Shift
import Loader from '../../components/Loader';
import Error from '../../components/Error';

function UserMain() {
    //for test
    const { name, jobTitle, shopName } = { name: 'Дудка Виктор', jobTitle: 'Помощник', shopName: 'Госпиталь', };
    const salaryInfo = [{ value: 0, label: "Полная ЗП" }, { value: 0, label: "Больничный" }, { value: 0, label: "Доп.Выплаты" }, { value: 0, label: "Отпускные" }, { value: 0, label: "Итог" }, { value: 0, label: "Отпускные на карту" }, { value: 0, label: "Аванс наличные" }, { value: 0, label: "Аванс Карта" }, { value: 0, label: "ЗП карта" }, { value: 0, label: "НДФЛ" }, { value: 0, label: "Прогул" }, { value: 0, label: "Сбор на ДР" }, { value: 0, label: "Итог" }];
    const { data: shifts, isLoading, error, refetch } = useGetShiftsQuery();



    const printSalaryInfo = salaryInfo.map((salaryEl, i) => (<p key={i}> 📌 <span>{salaryEl.label}</span> : <span>{salaryEl.value}</span> </p>));



    if (isLoading) return <Loader />
    if (error) return <Error refetch={refetch} />
    return (
        <div className="h-[100vh] flex justify-center bg-green-100 max-sm:p-1">
            <div className="w-[60vw] max-[1100px]:w-[99vw]">
                <div className="flex flex-col gap-8">
                    <UserHeader
                        name={name}
                        jobTitle={jobTitle}
                        shopName={shopName}
                        defaultAva={defaultAva}
                    />

                    <UserShifts className='w-[100%]' shifts={shifts} />

                    <Panel>
                        <h3 className="text-2xl">Зарплата</h3>
                        <span className="text-sm">Чтобы посмотреть наведитесь на блок</span>
                        <div className="hover:blur-none blur-sm transition-all duration-300 mt-4">
                            {printSalaryInfo}
                        </div>
                    </Panel>
                </div>
            </div>
        </div>
    );
}

export default UserMain;