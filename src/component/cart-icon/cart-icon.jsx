import { useContext } from 'react';
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import {DropdownContext} from '../context/dropdown.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {cartCount, showDropdown, setShowDropdown} = useContext(DropdownContext);
    const clickHandle = () => setShowDropdown(!showDropdown)
    return(
        <div className= 'cart-icon-container' onClick={clickHandle}>
            <Icon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
};

export default CartIcon