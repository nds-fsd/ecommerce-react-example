const ProductAddToCartButton = () => {
    const handleAddToCart = () => {
        alert('Product added to cart!')
    }

    return <button onClick={handleAddToCart}>Add to cart</button>
}

export default ProductAddToCartButton
