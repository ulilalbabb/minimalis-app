import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode"

const AuthLayouts = (props) => {
    const { children, title, type } = props
    const {isDarkMode} = useContext(DarkMode)

    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
            <div className='w-full max-w-xs'>
                <h1 className={`text-amber-950 text-3xl font-bold mb-2 ${isDarkMode && "text-white"}`}>
                    {title}
                </h1>
                <p className={`font-medium text-slate-500 mb-7 ${isDarkMode && "text-white"}`}>
                    welcome, please enter your details
                </p>
                {children}
                <p className={`text-slate-500 text-sm mt-2 text-center ${isDarkMode && "text-white"}`}>
                    {type === "login" ? "Don't have an account? " : "Already have an account? "}
                    <Link to={type === "login" ? "/register" : "/login"} className={`text-amber-950 hover:underline font-bold ${isDarkMode && "text-white"}`}>
                        {type === "login" ? "Register" : "Login"}
                    </Link>
                </p>
            </div>
        </div>
    )   
}

export default AuthLayouts