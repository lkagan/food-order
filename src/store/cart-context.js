import React from "react";

const cartContext = React.createContext({
    items: [],
    totalPrice: 0,
    addToCart: item => {},
    removeFromCart: id => {}
});

export default cartContext;