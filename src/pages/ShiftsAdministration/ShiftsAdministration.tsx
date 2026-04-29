import PageWrapper from "../../components/PageWrapper";
import ShiftsControlPanel from "../../components/ControlPanel/ShiftsControlPanel";
import OpenShiftsControlPanel from "../../components/ControlPanel/OpenShiftsControlPanel";

export default function PageShiftsAdministration() {
    return (
        <PageWrapper>
            <OpenShiftsControlPanel />
            <ShiftsControlPanel />
        </PageWrapper>
    );
}