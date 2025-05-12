import Panel from "../../components/Panel";
import Button from "../../components/Button";
import { useLoginMutation } from "c:/Users/Терентий/Documents/1-Proj/rp-front-ts/src/store/store.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../components/InputText";
import logo from "../../assets/logo.png"

interface RequestLogin {
    data: { token: string };
    error?: { data: { message: string } };
}


function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [Login, login_result] = useLoginMutation()
    const navigate = useNavigate()



    const onSub = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await Login({ email, password }) as RequestLogin

        if (res.error) {
            const err = res.error.data.message || Object(res.error.data)
            return setErr(err)
        }

        setErr("")
        localStorage.setItem("token", res.data.token)
        return navigate('/Main')
    };



    return <div className=" h-[100vh] flex justify-center items-center p-3 bg-green-50  max-sm:p-0 overflow-hidden">

        <Panel className="h-fit max-w-[800px] min-w-[500px] border-0 rounded-3xl bg-white drop-shadow-2xl max-sm:min-w-[100%] max-sm:rounded max-sm:h-full max-sm:pt-[30vh]">

            <div className="w-full p-3">
                <img src={logo} alt="Это изображение автомобиля" />
            </div>

            <div className=" h-full w-full flex rounded-3xl max-sm:flex-col">

                <div className="w-[40%] px-3 h-full max-sm:w-[100%] max-sm:h-fit">
                    <h1 className="text-3xl w-full font-bold">Войти в аккаунт</h1>
                    <span className="text-sm p-0.5">Введите данные</span>
                </div>


                <form onSubmit={onSub} className="w-[60%] flex flex-col p-2 items-center  max-sm:w-[100%] max-sm:h-fit">

                    <InputText type="text" label="Email" textInput={email} onInput={setEmail} ></InputText>

                    <InputText type="password" label="Password" textInput={password} onInput={setPassword} ></InputText>

                    <div className="w-full leading-3">
                        <span className="p-0 text-xs text-red-600">{err}</span>
                    </div>

                    <div className="flex justify-end items-end my-2 w-full">
                        <Button loading={login_result.isLoading} className="rounded-md text-xs mx-2" secondary> Sign in </Button>
                        <Button loading={login_result.isLoading} className="rounded-md text-xs " secondary> Create </Button>
                    </div>

                </form>
            </div>

        </Panel>
    </div>

}
export default Auth



