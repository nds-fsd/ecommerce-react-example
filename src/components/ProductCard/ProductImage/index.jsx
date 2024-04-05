import styles from "./ProductImage.module.css"

const ProductImage = (props) => {
    return (
        <div className={styles.imageContainer}>
            <img  className={styles.image} src={props.url} alt={props.alt}/>
        </div>
    )
}

export default ProductImage
