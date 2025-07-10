import { Link } from "react-router-dom"

const AuthLayouts = (props) => {
    const { children, title, type } = props
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='w-full max-w-xs'>
                <h1 className='text-blue-600 text-3xl font-bold mb-2'>
                    {title}
                </h1>
                <p className='font-medium text-slate-500 mb-7'>
                    welcome, please enter your details
                </p>
                {children}
                <p className="text-slate-500 text-sm mt-2 text-center">
                    {type === "login" ? "Don't have an account? " : "Already have an account? "}
                    <Link to={type === "login" ? "/register" : "/login"} className="text-blue-600 hover:underline font-bold">
                        {type === "login" ? "Register" : "Login"}
                    </Link>
                </p>
            </div>
        </div>
    )   
}

export default AuthLayouts