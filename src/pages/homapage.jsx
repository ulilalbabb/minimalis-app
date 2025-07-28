import { Link } from "react-router-dom"
import Button from "../components/Elements/Button/Button"

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">
                Welcome to 
                <span className="text-amber-950 ml-2">
                    Minimalis
                </span>
            </h1>
            <Button
                variant="border border-amber-950 text-amber-950 hover:bg-amber-950 hover:shadow-3xl hover:text-white hover:translate-y-[-3px] transition-transform duration-300 px-3 text-xs lg:text-sm py-2 mt-2">
                    <Link to="/login">
                        Shop Now
                    </Link>
            </Button>
        </div>
    )
}

export default HomePage