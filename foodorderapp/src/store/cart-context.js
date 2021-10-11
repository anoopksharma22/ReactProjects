import React from "react";

const CartContext = React.createContext({
    // below items are not neened to be declared here, but declaring them here would give 
    // auto-complete in id wirh CartContext object.
    items: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id)=>{},
});

export default CartContext;