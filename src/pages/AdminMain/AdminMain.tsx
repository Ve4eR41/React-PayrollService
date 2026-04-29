import PageWrapper from "../../components/PageWrapper";
import UserControl from "../../components/ControlPanel/UserControlPanel";
import JobControlPanel from "../../components/ControlPanel/JobControlPanel";
import ShopControlPanel from "../../components/ControlPanel/ShopControlPanel";

export default function AdminMain() {
    return (
        <PageWrapper>
            <ShopControlPanel />
            <JobControlPanel />
            <UserControl />
        </PageWrapper>
    );
}