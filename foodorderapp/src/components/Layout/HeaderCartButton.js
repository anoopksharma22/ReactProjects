import { useContext,useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import style from "./HeaderCartButton.module.css";
import { useState } from "react/cjs/react.development";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighLighted,setBtnIsHighLighted] = useState(false);
    const {items} =  cartCtx;
    const numberOfCartItems = items.reduce((currentValue,item)=>{
        return currentValue + item.amount;
    },0);

    const btnClasses = `${style.button} ${btnIsHighLighted ? style.bump : '' }`;
    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHighLighted(false);
        },300);

        return(()=>{
            clearTimeout(timer);
        });

    },[items]);
    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={style.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={style.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;