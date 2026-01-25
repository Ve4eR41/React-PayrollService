export default function Error(refetch?: any) {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-green-100">
            <div className="text-center p-4 bg-red-50 rounded-lg">
                <h3 className="text-xl text-red-600">Ошибка загрузки данных</h3>
                <p className="mt-2 text-gray-700">{'Не удалось загрузить смены'}</p>
                {/* <p className="mt-2 text-gray-700">{(error as unknown)?.data?.message || 'Не удалось загрузить смены'}</p> */}
                <button
                    onClick={() => refetch()}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Попробовать снова
                </button>
            </div>
        </div>
    )
}