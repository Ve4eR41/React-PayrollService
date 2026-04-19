import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetThisUserQuery } from "../store/apis/users";
import { setIsAdmin } from "../store/apis/authApi";

export function useThisUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const token = localStorage.getItem('token');
    const useGetThisUserQueryData = useGetThisUserQuery(undefined, { skip: !token });
    const { data: userData } = useGetThisUserQueryData;

    useEffect(() => {
        if (userData?.roles) {
            const admin = userData.roles.some(role => role.value === "ADMIN");
            dispatch(setIsAdmin(admin));
            if (pathname === "/") {
                navigate("/main", { replace: true });
            }
        }
    }, [userData, dispatch, navigate, pathname]);

    return useGetThisUserQueryData;
}
