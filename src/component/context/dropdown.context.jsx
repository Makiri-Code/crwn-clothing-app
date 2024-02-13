import { createContext, useEffect, useState } from "react";


const addItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) =>  cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+ 1} : cartItem)
    };

    return [...cartItems, {...productToAdd, quantity: 1}]
};

const removeCartItem= (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems
    };

    return (
        cartItems.map(cartItem => cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    )
}

const removeButton = (cartItems, itemToRemove) => cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);


export const DropdownContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeButton: () => {},
    cartCount: 0,
    totalPrice: 0
});

export const DropdownProvider = ({children}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0); 

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems]);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addItems(cartItems, productToAdd));
    }
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteCartItem = (itemToRemove) => {
        setCartItems(removeButton(cartItems, itemToRemove))
    }
    const value = {
        showDropdown,
        setShowDropdown,
        addItemToCart,
        removeItemFromCart,
        cartItems, 
        deleteCartItem,
        cartCount,
        totalPrice
    }
    return(
        <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
    )
}
