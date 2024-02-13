import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/products.context';
import { CategoryBodyContainer, CategoryHeading } from './category.styles';
import ProductCard from '../../product-card/product-card.component';


const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(ProductsContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=> {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <>
            <CategoryHeading>{category.toUpperCase()}</CategoryHeading>
            <CategoryBodyContainer>
                {
                    products && 
                        products
                            .map(product => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryBodyContainer>
        </>
        
    )
};

export default Category;