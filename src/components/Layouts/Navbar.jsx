import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button/Button"
import { useEffect, useState } from "react"

const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }
    return (
        <div className="fixed w-full h-15 bg-blue-600 flex justify-end items-center text-white px-5 gap-5">
            {username}
            <Button variant='bg-red-700 hover:bg-white hover:text-red-700 px-4' onClick={handleLogout}>
                Logout
            </Button>
            <div className="flex">
                <img 
                    src="../assets/shopping-cart.png" 
                    alt="cart-icon"
                    className="w-7 h-7"/>
                <div className="absolute top-2 right-2 text-sm bg-gray-800 px-1 rounded-md">
                    {totalCart}
                </div>
            </div>
        </div>
    )
}

export default Navbar