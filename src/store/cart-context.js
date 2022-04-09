import React from "react";

const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addToCart: item => {},
    removeFromCart: id => {}
});

export default cartContext;