import PageWrapper from "../../components/PageWrapper";
import UserControl from "../../components/Admin/UserControlPanel";
import JobControlPanel from "../../components/Admin/JobControlPanel";
import ShopControlPanel from "../../components/Admin/ShopControlPanel";

export default function AdminMain() {
    return (
        <PageWrapper>
            <ShopControlPanel />
            <JobControlPanel />
            <UserControl />
        </PageWrapper>
    );
}