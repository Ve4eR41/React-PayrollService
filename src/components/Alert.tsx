import { useEffect, useState } from "react";
import { BiSolidMessageAltError } from "react-icons/bi";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { PiFlowerBold } from "react-icons/pi";

const icon = {
    'Error': <BiSolidMessageAltError size={32} color="red" />,
    'Alert': <BiSolidMessageAltError size={32} color={'#c1dc00'} />
};

interface AlertProps {
    isVisible: boolean;
    isSuccess: boolean;
    isLoading?: boolean;
    text: string
    type: keyof typeof icon
}

export default function Alert({ isLoading, isVisible, text, type, isSuccess }: AlertProps) {
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (isVisible || isSuccess) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isVisible]);



    const content = (() => {
        if (isLoading) return <><PiFlowerBold size={32} color="white" className="animate-spin mr-2" /> Загрузка</>
        else if (showError) return <>{icon[type]}{text}</>
        else if (isSuccess) return <><BsBookmarkCheckFill size={32} className="mr-2" /> Удалось </>
    })();



    if (content) return <div className="dropdown-menu fixed p-2 pt-4 text-white top-0 left-0 right-0 bg-gray-800 flex items-center justify-center z-10">
        {content}
    </div>

}