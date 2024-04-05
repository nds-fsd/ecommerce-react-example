import ProductCard from "../ProductCard/index.jsx";
import ProductImage from "../ProductCard/ProductImage/index.jsx";
import ProductName from "../ProductCard/ProductName/index.jsx";
import ProductPrice from "../ProductCard/ProductPrice/index.jsx";
import ProductAddToCartButton from "../ProductCard/ProductAddToCartButton/index.jsx";
import styles from "./ProductGrid.module.css";

const ProductGrid = () => {
    const products = [{
        id: 0,
        image: "https://media.modadiandrea.com/30304-zoom_default/tshirt-amiri-blanca-negro-grafico-estampado-hombre.jpg",
        name: "Camiseta",
        price: 20,
    }, {
        id: 1,
        image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/6569b4ad8a0f21ddf16f4368cefdc01b.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        name: "Pantalones",
        price: 30,
        originalPrice: 40
    }, {
        id: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JWy9BpbbkKDPjttKga5nIfy9fKGcN0pKWHFtDCCSAA&s",
        name: "Sombrero",
        price: 10,
        originalPrice: 90
    }, {
        id: 3,
        image: "https://media.revistagq.com/photos/6401c484c792b2decae2194e/16:9/w_2580,c_limit/zapatillas%20retro%20homnbre.jpg",
        name: "Zapatillas",
        price: 100
    }];

    return (
        <div className={styles.grid}>
            {products.map((product) => {
                return (
                    <ProductCard key={product.id}>
                        <ProductImage url={product.image} alt="Foto" />
                        <ProductName name={product.name} />
                        <ProductPrice price={product.price} originalPrice={product.originalPrice}  />
                        <ProductAddToCartButton />
                    </ProductCard>
                )
            })}
        </div>
    )
}

export default ProductGrid
