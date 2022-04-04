import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
    isCartOpen: false,
    items: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_CART_POPUP":
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        case "ADD_TO_CART":
            const id = action.payload.cartItem.id;
            const isOld = state.items
                .map((item) => item.id)
                .includes(id);
            let cartItems = null;
            if (isOld) {
                const items = state.items.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            quantity:
                                action.change === true
                                    ? action.payload.cartItem.quantity
                                    : item.quantity +
                                      action.payload.cartItem.quantity,
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
                    (item) => item.id !== action.payload.cartItemId
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

export const CartStateContext = createContext();

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
    const [total, setTotal] = React.useState(0);

    useEffect(() => {
        setPersistedCartItems(state.items);
        const newTotal = state.items.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setTotal(newTotal);
    }, [JSON.stringify(state.items)]);

    const add = (cartItem) => {
        return dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartItem: cartItem,
            },
        });
    };

    const clear = () => {
        return dispatch({
            type: "CLEAR_CART",
        });
    };

    const change = (cartItem) => {
        return dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartItem: cartItem,
            },
            change: true,
        });
    };

    const remove = (cartItemId) => {
        return dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                cartItemId: cartItemId,
            },
        });
    };

    const contextValues = {
        add,
        total,
        clear,
        change,
        remove,
        ...state,
    };

    return (
        <CartStateContext.Provider value={contextValues}>
            {children}
        </CartStateContext.Provider>
    );
};

export const useCart = () => React.useContext(CartStateContext);

export default CartProvider;
