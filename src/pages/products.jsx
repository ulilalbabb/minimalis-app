import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product-service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";
import Footer from "../components/Layouts/Footer";

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
            <Navbar/>
            <div className={`py-20 px-5 ${isDarkMode && "bg-slate-800"}`}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
                
                {products.length > 0 && (
                    <div className="fixed bottom-5 right-1 py-3 lg:bottom-5 lg:right-5 mx-1 z-50 backdrop-blur-sm backdrop-filter backdrop-saturate-200 rounded-xl">
                        <TableCart products={products}/>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </>
    );
}

export default ProductsPage