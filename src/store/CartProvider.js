import {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        return {
            ...state,
            items: [...state.items, action.item],
            totalPrice: state.totalPrice + action.item.price * action.item.quantity
        }
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [state, action] = useReducer(cartReducer, defaultCartState);

    const cartContext = {
        items: state.items,

        totalPrice: state.totalPrice,

        addToCart: item => {
            action({type: 'ADD', item});
        },

        removeFromCart: id => {
            action({type: 'REMOVE', id});
        }
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;

