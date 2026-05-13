import UserShifts from "../../components/UserShifts";
import { useGetShiftsQuery } from "../../store/apis/shifts";
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { getEndMouth, getStartMouth } from "../../utils/utils";
import { useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import CheckPayroll from "../../components/Check/CheckPayroll";



function UserMain() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const { data: shifts, isLoading, error, refetch } = useGetShiftsQuery({
        timeEnd: getEndMouth(selectedDate),
        timeStart: getStartMouth(selectedDate)
    });



    if (isLoading) return <Loader />;
    if (error) return <Error refetch={refetch} error={error} autoRedirect="/" />;
    return (
        <PageWrapper>

            <UserShifts className='w-[100%]' selectedDate={selectedDate} shifts={shifts} setSelectedDate={setSelectedDate} />

            <CheckPayroll />

        </PageWrapper>
    );
}

export default UserMain;