import { ReactNode } from "react";
import UserHeader from "./UserHeader";

export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-green-100 to-orange-50 max-sm:p-1">
            <div className="w-[60vw] max-lg:w-[99vw]">
                <UserHeader />
                {children}
            </div>
        </div>
    )
}