import { useCartContext } from '../context/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ item }) => {
    const { removeItem } = useCartContext();

    return (
        <>
            <div className=" w-full sm:w-11/12 lg:sm:w-9/12 sm:mx-auto h-32 py-2 px-6 bg-white flex items-center justify-between lg:justify-around shadow-secundario/20 shadow-lg hover:shadow-secundario/30">
                <div className='w-16 lg:w-20 h-32 '>
                    <img src={item.img} alt={item.name} className="w-full h-full" ></img>
                </div>
                <p className="w-20 lg:w-44 text-center text-sm sm:text-base ">{item.name}</p>
                <p className="w-4 text-center text-sm sm:text-base">{"X" + item.quantity}</p>
                <p className="w-18 bg-white text-sm sm:text-base">$ {item.price * item.quantity}</p>
                <button className='text-xl text-red hover:text-red/80 ' onClick={() => removeItem(item)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </>
    )
}
export default CartItem