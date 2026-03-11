import Panel from "../../components/Panel";
import UserControl from "../../components/UserControlPanel";
import UserHeader from "../../components/UserHeader";

export default function AdminMain() {
    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-green-100 to-orange-50 max-sm:p-1">
            <div className="w-[60vw] max-lg:w-[99vw]">
                <UserHeader />
                <UserControl />
                <Panel className="h-[90vh] my-5" />
            </div>
        </div>
    );
}