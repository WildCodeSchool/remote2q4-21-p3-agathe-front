import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
    isCartOpen: false,
    items: [],
};

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_CART_POPUP":
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        case "ADD_TO_CART":
            //
            // FIXME: when final quantity == 0, remove the item ?
            //
            const id = action.payload.cartItem.ProductID;
            const isOld = state.items.map((item) => item.ProductID).includes(id);
            let cartItems = null;
            if (isOld) {
                const items = state.items.map((item) => {
                    if (item.ProductID === id) {
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.cartItem.quantity,
                        };
                    }
                    return item;
                });
                cartItems = [...items];
            } else {
                cartItems = [...state.items, action.payload.cartItem];
            }
            return {
                ...state,
                items: cartItems,
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(
                    (item) => item.ProductID !== action.payload.cartItemId
                ),
            };
        case "CLEAR_CART":
            return {
                ...state,
                ...initialState,
            };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
};

export const toggleCartPopup = (dispatch) => {
    return dispatch({
        type: "TOGGLE_CART_POPUP",
    });
};

export const addToCart = (dispatch, cartItem) => {
    return dispatch({
        type: "ADD_TO_CART",
        payload: {
            cartItem: cartItem,
        },
    });
};

export const removeFromCart = (dispatch, cartItemId) => {
    return dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
            cartItemId: cartItemId,
        },
    });
};

export const clearCart = (dispatch) => {
    return dispatch({
        type: "CLEAR_CART",
    });
};

const CartProvider = ({ children }) => {
    const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
        "cartItems",
        []
    );

    const persistedCartState = {
        isCartOpen: false,
        items: persistedCartItems || [],
    };

    const [state, dispatch] = useReducer(reducer, persistedCartState);

    useEffect(() => {
        setPersistedCartItems(state.items);
    }, [JSON.stringify(state.items)]);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export default CartProvider;