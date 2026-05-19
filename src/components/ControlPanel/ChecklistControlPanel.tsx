import { useState } from "react";
import { useGetUserQuery } from "../../store/apis/users";
import SkeletPanel from "../Loader/SkeletPanel";
import { getStartMouth, getStatusFetch, } from "../../utils/utils";
import { ControlPanelBase } from "./ControlPanelBase";
import { ChecklistDetail, ChecklistDetailProps, useGetChecklistQuery } from "../../store/apis/checklist";
import FormEditChecklist from "../Form/FormEditChecklist";
import MonthToggle from "../input/MonthToggle";

export default function ChecklistControlPanel() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { data: users, isLoading: isLoadingUsers, error } = useGetUserQuery('');
    const { data: checklist, isLoading: isLoadingChecklist } = useGetChecklistQuery({ date: getStartMouth(selectedDate) });
    const [isVisible, setisVisible] = useState(false);


    const userToChecklist = checklist?.reduce((result, checklist) => {
        return { ...result, [checklist.userId]: checklist }
    }, {} as Record<number, ChecklistDetail>)

    const usersChecsLists = users && users.map((user) => {

        if (userToChecklist && userToChecklist[user.id]) return {
            ...user,
            ...userToChecklist[user.id]
        }

        return {
            ...user,
            description: 'нет плана',
            userId: user.id,
            date: new Date(),
            isCompleat: false,
        }
    })

    const [selectedUser, setSelectedUser] = useState<ChecklistDetailProps | undefined>();
    const isLoading = isLoadingUsers || isLoadingChecklist



    if (isLoading) return <SkeletPanel />
    if ([403, 401].includes(getStatusFetch(error))) return <></>
    return <ControlPanelBase
        title="Пользователи"
        itemClickCallback={(user) => { setisVisible(true); setSelectedUser(user) }}
        items={usersChecsLists}
        paramFilter={{
            fio: {
                name: 'Сотрудник'
            },
            jobs: {
                name: 'Должность',
                transform: v => v[0]?.description || 'Нет должности'
            },
            description: {
                name: 'Описание',
            },
            isCompleat: {
                name: 'Статус',
                transform: v => v ? '✅' : '❌'
            },
        }}
    >
        <MonthToggle selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        {selectedUser && <FormEditChecklist data={selectedUser} date={selectedDate} isVisible={isVisible} visibleToggle={setisVisible} />}
    </ControlPanelBase >
}

