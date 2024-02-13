import { useContext } from 'react';
import { DropdownContext } from '../../context/dropdown.context';
import CheckOutItem from '../../checkout-item/checkout-item.compnent';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './check-out.styles';


const CheckOut = () => {
    const {cartItems, totalPrice} = useContext(DropdownContext);

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
           {cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
           <Total>Total: ${totalPrice}</Total>
        </CheckoutContainer>
    )
};

export default CheckOut;