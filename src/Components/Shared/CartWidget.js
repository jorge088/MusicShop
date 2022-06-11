import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../context/CartContext';
const CartWidget = () => {
    const { cart } = useCartContext();

    const calcCartItems = (cart) => {
        let items = 0;
        cart.forEach(product => {
            items += product.quantity;
        });
        return items;
    }
    return (
        <>
            {calcCartItems(cart) === 0 ?
                <p><FontAwesomeIcon icon={faCartShopping} /> 0</p>
                :
                <p><FontAwesomeIcon icon={faCartShopping} /> {calcCartItems(cart)}</p>
            }

        </>
    )
}
export default CartWidget