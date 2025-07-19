import { useContext } from "react"
import { Link } from "react-router-dom"
import { DarkMode } from "../../context/DarkMode"
import Button from "../Elements/Button/Button"
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const AuthLayouts = (props) => {
    const { children, title, type } = props
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)

    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
            <div className='w-full max-w-xs'>
                <Button 
                    variant="absolute top-2 right-2 rounded px-2 py-1 bg-blue-600"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? <FiSun /> : <MdDarkMode />}
                </Button>
                <h1 className='text-blue-600 text-3xl font-bold mb-2'>
                    {title}
                </h1>
                <p className={`font-medium text-slate-500 mb-7 ${isDarkMode && "text-white"}`}>
                    welcome, please enter your details
                </p>
                {children}
                <p className={`text-slate-500 text-sm mt-2 text-center ${isDarkMode && "text-white"}`}>
                    {type === "login" ? "Don't have an account? " : "Already have an account? "}
                    <Link to={type === "login" ? "/register" : "/login"} className="text-blue-500 hover:underline font-bold">
                        {type === "login" ? "Register" : "Login"}
                    </Link>
                </p>
            </div>
        </div>
    )   
}

export default AuthLayouts