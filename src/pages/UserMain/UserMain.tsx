import defaultAva from "../../assets/defaultAva.jpg"
import Panel from "../../components/Panel";
import UserHeader from "../../components/UserHeader"
import WorkingDays from "../../components/WorkingDays";


function UserMain() {
    const { name, jobTitle, shopName } = { name: 'Дудка Виктор', jobTitle: 'Помощник', shopName: 'Госпиталь', }
    const workingDays = [
        { timeStart: new Date('Tue May 06 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 06 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 07 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 07 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
        { timeStart: new Date('Tue May 08 2025 09:00:00 GMT+0300'), timeEnd: new Date('Tue May 09 2025 20:00:00 GMT+0300'), shopName: 'Госпиталь', revenue: 12000, cheks: 10 },
    ];//for test



    return (
        <div className="h-[100vh]  flex justify-center  bg-green-50  max-sm:p-1 " >
            <div className="w-[60vw]  max-lg:w-[99vw]">

                <UserHeader name={name} jobTitle={jobTitle} shopName={shopName} defaultAva={defaultAva} />

                <div className="flex gap-4">

                    <WorkingDays className='w-[70%]' workingDays={workingDays} />

                    <Panel>
                        <h3>Полная ЗП</h3>
                        Больничный
                        Доп. Выплаты
                        Отпускные
                        Итог
                        Отпускные на карту
                        Аванс наличные
                        Аванс Карта
                        ЗП карта
                        НДФЛ
                        Прогул
                        Сбор на ДР
                        Итог
                    </Panel>

                </div>

            </div>
        </div>
    )
}
export default UserMain 