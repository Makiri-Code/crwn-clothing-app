import { useContext } from 'react';
import {DropdownContext} from '../context/dropdown.context';
import Button from '../button/button.component';
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(DropdownContext);
    const clickHandle = () => {
        addItemToCart(product)
    }
    const {name, price, imageUrl} = product
    return (
        <ProductCardContainer >
            <img src= {imageUrl} alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType='inverted' onClick={clickHandle}>Add to cart</Button>
        </ProductCardContainer>
    )
};

export default ProductCard;