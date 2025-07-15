import { use, useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        name: "New Shoes",
        image: "../assets/pic-2.jpg",
        price: 1000000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam exercitationem, nobis possimus est mollitia eaque? Reiciendis ipsum velit inventore numquam iste. Delectus, nisi voluptatum"
    },
    {
        id: 2,
        name: "Sneakers",
        image: "../assets/pic-3.jpg",
        price: 2000000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        name: "Sneakers",
        image: "../assets/pic-2.jpg",
        price: 500000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam exercitationem, nobis possimus est mollitia eaque? Reiciendis ipsum velit inventore numquam iste. Delectus, nisi voluptatum"
    },
]

const email = localStorage.getItem("email")

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
            const product = products.find((product) => product.id === item.id)
            return acc + product.price * item.qty
        }, 0)
        setTotalPrice(sum)
        localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("email")
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
                {email}
                <Button variant='bg-red-700 hover:bg-white hover:text-red-700 px-4' onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5 px-5">
                <div className="flex flex-wrap w-4/6">
                    {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.HeaderCard image={product.image}/>
                        <CardProduct.BodyCard name={product.name}>
                            {product.description}        
                        </CardProduct.BodyCard>
                        <CardProduct.FooterCard 
                            price={product.price} 
                            id={product.id}
                            handleAddToCart={handleAddToCart}/>
                    </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
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
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>
                                            Rp{" "}
                                            {product.price.toLocaleString("id-ID", {
                                                styles: "currency",
                                                currency: "IDR"
                                            })}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {(item.qty * product.price).toLocaleString("id-ID", {
                                                styles: "currency",
                                                currency: "IDR"}
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
                                        Rp{" "} 
                                        {totalPrice.toLocaleString("id-ID", {
                                        styles: "currency",
                                        currency: "IDR"
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