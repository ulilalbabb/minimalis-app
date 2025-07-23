import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../services/product-service"
import Button from "../components/Elements/Button/Button"
import { DarkMode } from "../context/DarkMode"
import { BsCartPlus } from "react-icons/bs";
import Navbar from "../components/Layouts/Navbar"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/slices/cartSlice"

const DetailProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const {isDarkMode} = useContext(DarkMode)
    const dispatch = useDispatch()

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])
    console.log(product)
    return (
        <>
        <Navbar></Navbar>
        <div className={`w-full min-h-screen flex justify-center items-center ${isDarkMode && "bg-slate-800"}`}>
            {Object.keys(product).length > 0 && (
                <div className="flex flex-col lg:flex-row max-w-lg">
                    <div className="flex flex-col h-96 p-5">
                        <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-full "
                            loading="lazy"
                        />
                    </div>
                    <form action="" className="flex-auto p-5">
                        <div className="flex flex-wrap">
                            <h1 className={`flex-auto text-lg font-semibold text-gray-900 ${isDarkMode && "text-white"}`}>
                                {product.title}
                            </h1>
                            <div className={`text-lg font-semibold text-gray-500 ${isDarkMode && "text-white"}`}>
                                $ {product.price}
                            </div>
                            <div className={`w-full text-sm font-medium text-gray-500 mt-2 ${isDarkMode && "text-gray-400"}`}>
                                Review &#9733;{product.rating.rate} / 5 ({product.rating.count}) 
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
                            <div className={`space-x-2 flex text-sm ${isDarkMode && "text-white"}`}>
                                {product.description}
                            </div>                        
                        </div>
                        <div className="space-x-4 mb-6 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <Button variant="bg-blue-600 hover:translate-y-[-3px] transition-transform duration-300 text-white hover:shadow-xl px-5 py-2 border-2 border-blue-600">
                                    Buy now
                                </Button>
                                <Button 
                                    variant="bg-blue-600 flex items-center gap-2 hover:translate-y-[-3px] transition-transform duration-300 text-white hover:shadow-xl px-5 border-2 border-blue-600"
                                    onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
                                        <BsCartPlus /> Add to bag
                                </Button>
                            </div>
                            <p className="text-sm text-gray-500 pt-5">
                                Free shipping on all continental US orders.
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
        </>
    )
}

export default DetailProductPage