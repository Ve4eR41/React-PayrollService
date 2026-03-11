import Panel from "../../components/Panel";
import UserHeader from "../../components/UserHeader"
import UserShifts from "../../components/UserShifts";
import { useGetShiftsQuery } from "../../store/apis/shifts";
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { getEndMouth, getStartMouth } from "../../utils/utils";
import { useState } from "react";

interface SalaryInfoItem {
    value: number;
    label: string;
}

function UserMain() {
    const salaryInfo: SalaryInfoItem[] = [
        { value: 0, label: "Полная ЗП" },
        { value: 0, label: "Больничный" },
        { value: 0, label: "Доп.Выплаты" },
        { value: 0, label: "Отпускные" },
        { value: 0, label: "Итог" },
        { value: 0, label: "Отпускные на карту" },
        { value: 0, label: "Аванс наличные" },
        { value: 0, label: "Аванс Карта" },
        { value: 0, label: "ЗП карта" },
        { value: 0, label: "НДФЛ" },
        { value: 0, label: "Прогул" },
        { value: 0, label: "Сбор на ДР" },
        { value: 0, label: "Итог" }
    ];
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { data: shifts, isLoading, error, refetch, isFetching } = useGetShiftsQuery({
        timeEnd: getEndMouth(selectedDate),
        timeStart: getStartMouth(selectedDate)
    }, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
        skip: false,
    });



    const printSalaryInfo = salaryInfo.map((salaryEl, i) => (
        <p key={i}> 📌 <span>{salaryEl.label}</span> : <span>{salaryEl.value}</span> </p>
    ));



    if (isLoading || isFetching) return <Loader />;
    if (error) return <Error refetch={refetch} error={error} autoRedirect="/" />;
    return (
        <div className="h-[100vh] flex justify-center bg-green-100 max-sm:p-1">
            <div className="w-[60vw] max-[1100px]:w-[99vw]">

                    <UserHeader />

                    <UserShifts className='w-[100%]' selectedDate={selectedDate} shifts={shifts} setSelectedDate={setSelectedDate} />

                    <Panel>
                        <h3 className="text-2xl">Зарплата</h3>
                        <span className="text-sm">Чтобы посмотреть наведитесь на блок</span>
                        <div className="hover:blur-none blur-sm transition-all duration-300 mt-4">
                            {printSalaryInfo}
                        </div>
                    </Panel>

            </div>
        </div>
    );
}

export default UserMain;