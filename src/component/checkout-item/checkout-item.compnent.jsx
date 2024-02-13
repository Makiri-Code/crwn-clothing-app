import { useContext } from 'react';
import { DropdownContext } from '../context/dropdown.context';
import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;

    const {deleteCartItem, addItemToCart, removeItemFromCart} = useContext(DropdownContext);
    const clearItemHandler = () => deleteCartItem(cartItem);
    const addItemHandler = () => addItemToCart(cartItem); 
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
};

export default CheckOutItem;