import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownContext } from '../context/dropdown.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';


const CartDropDown = () => {
    const {cartItems} = useContext(DropdownContext);
    const navigate = useNavigate();
    const goToCheckout = () => navigate('/checkout');
    return(
        <div className='cart-dropdown-container' >
            <div className='cart-items'>
                {
                    cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
                }
            </div>
            <Button onClick={goToCheckout}>Check out</Button>
        </div>
    )
};

export default CartDropDown;