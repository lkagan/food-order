import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import {useContext} from "react";

const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);

   const cartNumItems = cartCtx.items.reduce((acc, item) => {
      return acc + item.quantity;
   }, 0);

   return <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
         <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartNumItems}</span>
   </button>
}

export default HeaderCartButton;