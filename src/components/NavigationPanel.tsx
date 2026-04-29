import { Link } from "react-router-dom";
import { useIsAdmin } from "../store/apis/authApi";
import { useThisUser } from "../hook/useUserRole";

function NavigationPanel() {
    const isAdmin = useIsAdmin();
    const { data: userData, isLoading, isError } = useThisUser();


    if (isLoading) return <div className="bg-gray-200 p-4 rounded">Загрузка...</div>;
    if (isError || !userData) return <div className="bg-red-100 p-4 rounded">Ошибка загрузки навигации</div>;

    return (
        <nav className="text-white p-1 mb-4">
            <ul className="flex space-x-4 text-sm bg-green-600 rounded-full px-3 py-1">
                <li>
                    <Link to="/main" className="hover:text-green-200 transition-colors">
                        Главная
                    </Link>
                </li>

                <li>
                    <Link to="/ShopMain" className="hover:text-green-200 transition-colors">
                        Магазины
                    </Link>
                </li>

                {isAdmin && <>
                    <li>
                        <Link to="/AdminMain" className="hover:text-green-200 transition-colors ">
                            Админ панель
                        </Link>
                    </li>

                    <li>
                        <Link to="/ShiftsAdministration" className="hover:text-green-200 transition-colors ">
                            Управление сменами
                        </Link>
                    </li>
                </>
                }
            </ul>
        </nav>
    );
}

export default NavigationPanel;
