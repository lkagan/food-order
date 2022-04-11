import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalPrice = cartCtx.totalPrice.toFixed(2)

    const cartItemRemoveHandler = id => {

    }

    const cartItemAddHandler = item => {

    }

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item => <CartItem
                key={ item.id }
                name={ item.name }
                amount={ item.quantity }
                price={ item.price }
                onRemove={ cartItemRemoveHandler.bind(null, item.id) }
                onAdd={ cartItemAddHandler.bind(null, item.id) }
            />)
        }
    </ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {(cartCtx.items.length > 0) && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;