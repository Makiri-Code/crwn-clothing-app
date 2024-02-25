import { createContext, useEffect, useState, useReducer } from "react";


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

const INITIAL_STATE = {
    showDropdown: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
}


const cartReducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case 'SET_CART_ITEM' : 
            return {
                ...state,
                ...payload
            } 
            break;
        case 'SET_SHOW_DROPDOWN' : 
            return {
                ...state,
                showDropdown: payload
            }
        default : 
        throw new Error(`Error handling type of ${type}`)
    };
}

export const DropdownProvider = ({children}) => {


    const  [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const {showDropdown, cartItems, cartCount,totalPrice} = state


    const upDateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newTotalPrice = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        dispatch({
            type: 'SET_CART_ITEM', payload: {
            cartItems: newCartItems,
            cartCount: newCartCount,
            totalPrice: newTotalPrice
        }})
    }
    
    const addItemToCart = (productToAdd) => {
        const newCartItems = addItems(cartItems, productToAdd)
        upDateCartItemReducer(newCartItems);
    }
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        upDateCartItemReducer(newCartItems);
    }

    const deleteCartItem = (itemToRemove) => {
        const newCartItems = removeButton(cartItems, itemToRemove);
        upDateCartItemReducer(newCartItems)
    }

    const setShowDropdown = (bool) => {
        dispatch({type: 'SET_SHOW_DROPDOWN', payload: bool})
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
