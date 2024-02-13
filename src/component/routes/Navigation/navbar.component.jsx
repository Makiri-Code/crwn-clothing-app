import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.contex";
import { DropdownContext } from "../../context/dropdown.context";
import {signOutUser} from '../../utils/firebase'
import { ReactComponent as Logo } from '../../../assets/SophiesCakesLogo.svg';
import CartIcon from "../../cart-icon/cart-icon";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navbar.styles";

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    const {showDropdown} = useContext(DropdownContext);
    return(
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo"/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {showDropdown && (<CartDropDown/>)}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation; 