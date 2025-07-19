import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product-service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
    const {isDarkMode} = useContext(DarkMode)
    const [products, setProducts] = useState([])
    useLogin()

    useEffect(() => {
        getProduct((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className={`flex justify-center py-20 px-5 ${isDarkMode && "bg-slate-800"}`}>
                <div className="flex flex-wrap w-4/6">
                    {products.length > 0 && products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.HeaderCard image={product.image} id={product.id}/>
                        <CardProduct.BodyCard name={product.title}>
                            {product.description}        
                        </CardProduct.BodyCard>
                        <CardProduct.FooterCard price={product.price} id={product.id}/>
                    </CardProduct>
                    ))}
                </div>
                <div className="w-3/6">
                    <h1 className="text-2xl font-bold text-blue-600 ml-5">Cart</h1>
                    <TableCart products={products}/>
                </div>
            </div>
        </>
    );
}

export default ProductsPage