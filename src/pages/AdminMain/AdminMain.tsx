import PageWrapper from "../../components/PageWrapper";
import Panel from "../../components/Panel";
import ShiftsControlPanel from "../../components/Admin/ShiftsControlPanel";
import OpenShiftsControlPanel from "../../components/Admin/OpenShiftsControlPanel";
import UserControl from "../../components/Admin/UserControlPanel";
import JobControlPanel from "../../components/Admin/JobControlPanel";

export default function AdminMain() {
    return (
        <PageWrapper>
            <JobControlPanel />
            <UserControl />
            <OpenShiftsControlPanel />
            <ShiftsControlPanel />
            <Panel className="h-[90vh] my-5" />
        </PageWrapper>
    );
}