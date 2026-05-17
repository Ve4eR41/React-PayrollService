import ChecklistControlPanel from "../../components/ControlPanel/ChecklistControlPanel";
import RetailPlanControlPanel from "../../components/ControlPanel/RetailPlanControlPanel";
import PageWrapper from "../../components/PageWrapper";

export default function PageRetailPlaning() {
    return (
        <PageWrapper>
            <RetailPlanControlPanel />
            <ChecklistControlPanel />
        </PageWrapper>
    );
}