import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useEffect, useState } from "react";
import { BiSolidMessageAltError } from "react-icons/bi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { PiFlowerBold } from "react-icons/pi";

// const icon = {
//     'Error': <BiSolidMessageAltError size={32} color="red" />,
//     'Alert': <BiSolidMessageAltError size={32} color={'#c1dc00'} />
// };

interface AlertProps {
    data: {
        isError: boolean;
        isSuccess: boolean;
        isLoading?: boolean;
        error: FetchBaseQueryError | SerializedError | undefined
        // type: keyof typeof icon
    }
}

export default function Alert({ data }: AlertProps) {
    const [showError, setShowError] = useState(false);
    const { isLoading, isError, error, isSuccess } = data;
    const err = (() => {
        if (error && 'data' in error)
            return error.data as { statusCode: number; message: string };
        return { statusCode: 400, message: '' }
    })()



    useEffect(() => {
        if (isError || isSuccess) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isError]);



    const content = (() => {
        if (isLoading) return <><PiFlowerBold size={32} color="white" className="animate-spin mr-2" /> Загрузка</>
        else if (showError) return <> <BiSolidMessageAltError size={32} color="red" />{err.message}</>
        else if (isSuccess) return <><BsBookmarkCheckFill size={32} className="mr-2" /> Удалось </>
    })();



    if (content) return <div className="dropdown-menu fixed p-2 pt-4 text-white top-0 left-0 right-0 bg-gray-800 flex items-center justify-center z-10 rounded-b">
        {content}
    </div>

}