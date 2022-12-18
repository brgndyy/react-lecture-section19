import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {

  const dispatch = useDispatch();


  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.id))
  }

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id : props.item.id,
      title : props.item.title,
      price : props.item.price,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${props.item.totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
