import Button from "../Elements/Button/Button"

const CardProduct = (props) => {
    const { children } = props
    return ( 
        <div className="w-full max-w-sm bg-gray-300 rounded-lg shadow-md flex flex-col justify-between mx-2">
            {children}
        </div>
    )
}

const HeaderCard = (props) => {
    const { image } = props
    return (
        <a href="#">
            <img 
            src={image} 
            alt="product-image" 
            className="px-5 py-5 rounded-t-lg" />
        </a>
    )
}

const BodyCard = (props) => {
    const {children, name} = props
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight">
                    {name}
                </h5>
                <p className="text-sm">
                    {children}
                </p>
            </a>
        </div>
    )
}

const FooterCard = (props) => {
    const { price } =props
    return (
        <div className="flex items-center justify-between pb-3 px-5">
            <span className="text-3xl font-bold">
                {price}                   
            </span>
            <Button variant="bg-blue-600">
                Add To Cart
            </Button>
        </div>
    )
}

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard

export default CardProduct