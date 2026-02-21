import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Button from "./Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SerializedError } from "@reduxjs/toolkit";



interface ErrorProps {
    refetch?: any,
    error?: FetchBaseQueryError | SerializedError,
    autoRedirect?: string
}



export default function Error({ refetch, error, }: ErrorProps) {
    const navigate = useNavigate();

    console.log(error);

    useEffect(() => {
        if (error && error.status == '401') navigate('/', { replace: true });
    },);

    if (error) return

    return (
        <div className="h-[100vh] flex justify-center items-center bg-green-500">
            <div className="text-center p-4 relative flex justify-center items-center flex-col h-1/2">
                <h3 className="text-4xl font-bold absolute top-0 text-white mb-26">  {error && `ОШИБКА ` + error?.status}  </h3>
                <h3 className="text-xl text-white"> {error && error?.data?.message} </h3>
                <Button
                    onClick={() => refetch()}
                    className="mt-4 px-4 py-2 bg-green-100 text-green-800 border-green-800 rounded hover:bg-white"
                >
                    Попробовать снова
                </Button>
            </div>
        </div>
    )
}