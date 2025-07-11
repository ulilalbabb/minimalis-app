import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
    id: 1,
    name: "New Shoes",
    image: "../assets/pic-2.jpg",
    price: "Rp 1.000.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam exercitationem, nobis possimus est mollitia eaque? Reiciendis ipsum velit inventore numquam iste. Delectus, nisi voluptatum"
    },
    {
    id: 2,
    name: "Sneakers",
    image: "../assets/pic-3.jpg",
    price: "Rp 2.000.000",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.HeaderCard image={product.image}/>
                    <CardProduct.BodyCard name={product.name}>
                        {product.description}        
                    </CardProduct.BodyCard>
                <CardProduct.FooterCard price={product.price}/>
            </CardProduct>
            ))}
        </div>
    );
}

export default ProductsPage