import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount
    }, 0);


    return <button className = {classes.button} onClick = {props.onClick}>
        <span className= {classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;