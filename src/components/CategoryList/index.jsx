import Category from "../Category/index.jsx";

const CategoryList = (props) => {
    const categories = [
        'Jeans',
        'T-shirts',
        'Shoes',
        'Hats'
    ];

    const mapper = (category) => {
        return (
            <li>
                <Category category={category} />
            </li>
        )
    }

    return (
        <ul>
            {categories.map(mapper)}
        </ul>
    )
}

export default CategoryList
