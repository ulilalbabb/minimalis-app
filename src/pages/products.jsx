import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product-service";
import { getUsername } from "../services/auth-servise";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [products, setProducts] = useState([])
    const username = useLogin()

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        getProduct((data) => {
            setProducts(data)
        })
    }, [])

    useEffect(() => {
        if(products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id)
            return acc + product.price * item.qty
        }, 0)
        setTotalPrice(sum)
        localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, products])

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item )
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }

    // useRef
    const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || [])

    const handleAddToCartRef = (id) => {
        cartRef.current = [...cartRef.current, { id, qty: 1 }]
        localStorage.setItem("cart", JSON.stringify(cartRef.current))
    }

    const totalPriceRef = useRef(null)

    useEffect(() => {
        if(cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"
        } else {
            totalPriceRef.current.style.display = "none"
        }
    }, [cart])

    return (
        <>
            <div className="h-15 bg-blue-600 flex justify-end items-center text-white px-10 gap-5">
                {username}
                <Button variant='bg-red-700 hover:bg-white hover:text-red-700 px-4' onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5 px-5">
                <div className="flex flex-wrap w-4/6">
                    {products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.HeaderCard image={product.image} id={product.id}/>
                        <CardProduct.BodyCard name={product.title}>
                            {product.description}        
                        </CardProduct.BodyCard>
                        <CardProduct.FooterCard 
                            price={product.price} 
                            id={product.id}
                            handleAddToCart={handleAddToCart}/>
                    </CardProduct>
                    ))}
                </div>
                <div className="w-3/6">
                    <h1 className="text-2xl font-bold text-blue-600 ml-5">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0, 20)} ...</td>
                                        <td>
                                            ${" "}
                                            {product.price.toLocaleString("id-ID", {
                                                styles: "currency",
                                                currency: "USD"
                                            })}</td>
                                        <td>{item.qty}</td>
                                        <td>${" "} {(item.qty * product.price).toLocaleString("id-ID", {
                                                styles: "currency",
                                                currency: "USD"}
                                        )}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>
                                        ${" "} 
                                        {totalPrice.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "USD"
                                        })}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProductsPage