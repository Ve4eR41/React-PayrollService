import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../../components/Button";


export default function ErrorBoundary() {
    const error = useRouteError() as { status: number, message: string };
    const navigate = useNavigate();

    if (!error) return
    // from-rose-50 to-orange-50 лучше выглядит 
    return (<div className="min-h-screen bg-gradient-to-br from-green-100 to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 text-[300px] text-rose-200/20 rotate-12 select-none">🌸</div>
            <div className="absolute -bottom-24 -left-24 text-[300px] text-amber-200/20 -rotate-12 select-none">🌷</div>
        </div>

        <div className="max-w-2xl z-10 w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 relative border border-white/50">
            <div className="text-center">

                <div className="text-8xl md:text-9xl opacity-50 select-none"> 🌷 </div>

                <h1 className="text-7xl md:text-8xl font-bold text-green-500 mb-4 animate-pulse"> 404 </h1>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
                    Этот цветок не растет в нашем саду
                </h2>

                {
                    process.env.NODE_ENV === 'development' && error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-left">
                            <p className="text-red-600 font-mono text-sm">
                                {error.status ? `Статус: ${error.status}` : error.message}
                            </p>
                        </div>
                    )}

                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                    Кажется, вы забрели на неизвестную клумбу. Давайте вернемся в основной сад!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Button
                        onClick={() => navigate('/')}
                        className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    > Вернуться в сад
                    </Button>

                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-4 bg-white cursor-pointer text-green-500 border-2 border-green-300 rounded-full hover:bg-green-50 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 "
                    > Назад
                    </button>
                </div>


            </div>
        </div>
        <div className="floating-petal top-3 left-6">🌸</div>
        <div className="floating-petal left-77 bottom-25">❤</div>
        <div className="floating-petal left-34 bottom-77">💗</div>
        <div className="floating-petal bottom-22 right-66">🌸</div>
        <div className="floating-petal top-22 right-96">💮</div>
        <div className="floating-petal bottom-72 right-26">🌺</div>
        <div className="floating-petal bottom-3 right-9">💗</div>
    </div>


    );
};