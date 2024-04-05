import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default ProductCard;
