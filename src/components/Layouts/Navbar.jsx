import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button/Button"
import { useContext, useEffect, useState } from "react"
import { DarkMode } from "../../context/DarkMode"
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom"
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext"

const Navbar = (props) => {
    const { products } = props
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
    const [showTooltip, setShowTooltip] = useState(false);
    const dispatch = useTotalPriceDispatch()
    const { total } = useTotalPrice()

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])

    // const handleLogout = () => {
    //     localStorage.removeItem("token")
    //     localStorage.removeItem("password")
    //     window.location.href = "/login"
    // }
    return (
        <div className="fixed w-full h-15 bg-blue-600 flex justify-between items-center text-white px-5 gap-5">
            <p>
                LookaLook
            </p>
            <div className="flex items-center gap-5">
                <Button
                    onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? <FiSun/> : <MdDarkMode/>}
                </Button>
                <div className="flex items-center gap-1">
                    <Link to={'/login'}>
                        <CiUser />
                    </Link>
                    {username}
                </div>
                <div className="relative inline-block"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}>
                        <Button 
                            variant="flex items-center gap-1">
                            <IoBagOutline />
                            {totalCart}
                        </Button>

                        
                </div>
                {/* <Button variant='bg-red-700 hover:translate-y-[-3px] transition-transform duration-300 hover:shadow-md px-4 py-1' onClick={handleLogout}>
                    Logout
                </Button> */}
            </div>
        </div>
    )
}

export default Navbar