import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/slices/cartSlice"

const CardProduct = (props) => {
    const { children } = props
    return ( 
        <div className="w-full max-w-xs bg-gray-300 rounded-lg shadow-md flex flex-col justify-between mx-2 my-2">
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { image, id } = props
    return (
        <Link to={`/product/${id}`}>
            <img 
            src={image} 
            alt="product-image" 
            className="px-5 py-5 rounded-t-lg h-70 w-full" />
        </Link>
    )
}

const BodyCard = (props) => {
    const {children, name} = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight">
                    {name.substring(0, 20)} ...
                </h5>
                <p className="text-sm">
                    {children.substring(0, 100)}...
                </p>
            </a>
        </div>
    )
}

const FooterCard = (props) => {
    const { price, id } =props
    const dispatch = useDispatch()
    return (
        <div className="flex items-center justify-between pb-3 px-5">
            <span className="text-xl font-bold">
               $ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD'})}                   
            </span>
            <Button 
                variant="bg-blue-600 hover:bg-white hover:text-blue-600 px-5"
                onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
                    Add To Cart
            </Button>
        </div>
    )
}

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard

export default CardProduct