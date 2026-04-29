import PageWrapper from "../../components/PageWrapper";
import ShiftsControlPanel from "../../components/Admin/ShiftsControlPanel";
import OpenShiftsControlPanel from "../../components/Admin/OpenShiftsControlPanel";

export default function PageShiftsAdministration() {
    return (
        <PageWrapper>
            <OpenShiftsControlPanel />
            <ShiftsControlPanel />
        </PageWrapper>
    );
}