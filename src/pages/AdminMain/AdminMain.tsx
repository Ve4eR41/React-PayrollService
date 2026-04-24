import PageWrapper from "../../components/PageWrapper";
import Panel from "../../components/Panel";
import ShiftsControlPanel from "../../components/Admin/ShiftsControlPanel";
// import UserControl from "../../components/UserControlPanel";

export default function AdminMain() {
    return (
        <PageWrapper>
            {/* <UserControl  /> */}
            <ShiftsControlPanel  />
            <Panel className="h-[90vh] my-5" />
        </PageWrapper>
    );
}