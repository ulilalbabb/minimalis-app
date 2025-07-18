import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../services/product-service"
import Button from "../components/Elements/Button/Button"

const DetailProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])
    console.log(product)
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            {Object.keys(product).length > 0 && (
                <div className="flex max-w-xl">
                    <div className="flex-none w-48 relative">
                        <img 
                            src={product.image} 
                            alt={product.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <form action="" className="flex-auto p-6">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-lg font-semibold text-gray-900">
                                {product.title}
                            </h1>
                            <div className="text-lg font-semibold text-gray-500">
                                $ {product.price}
                            </div>
                            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                                Review &#9733;{product.rating.rate} / 5 ({product.rating.count}) 
                            </div>
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
                            <div className="space-x-2 flex text-sm">
                                {product.description}
                            </div>                        
                        </div>
                        <div className="space-x-4 mb-6 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <Button variant="bg-blue-600 hover:bg-white hover:text-blue-600 px-5 border-2 border-blue-600">
                                    Buy now
                                </Button>
                                <Button variant="bg-blue-600 hover:bg-white hover:text-blue-600 px-5 border-2 border-blue-600">
                                    Add to bag
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
    )
}

export default DetailProductPage