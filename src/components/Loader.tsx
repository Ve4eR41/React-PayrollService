export default function Loader() {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-green-100">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                <p className="mt-4 text-lg">Загрузка данных...</p>
            </div>
        </div>
    )
}