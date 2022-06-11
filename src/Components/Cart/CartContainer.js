import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartItem from "./CartItem";


const CartContainer = () => {
    const { cart, setCart } = useCartContext();
    let totalPrice = 0;
    let totalProduct = 0;



    const cleanCart = () => {
        setCart([]);
    }
    return (
        <>
            {cart.length !== 0 ?
                <div className="w-11/12 sm:w-10/12  py-4 mx-auto flex flex-col gap-y-4" >
                    <h3 className="text-center text-2xl">Mi carrito</h3>
                    <div className="max-h-96 py-4 flex flex-col gap-4 overflow-y-scroll">
                        {cart.map((product) => {
                            totalPrice += product.price * product.quantity;
                            totalProduct += product.quantity;
                            return (
                                <CartItem item={product} key={product.id}></CartItem>
                            )
                        })}
                    </div>
                    <div className="w-full my-4 px-4 flex flex-col lg:flex-row lg:justify-around items-center gap-6 lg:gap-0 ">
                        <div>
                            <button className="text-base py-2 px-4 rounded-md text-white bg-secundario/80 hover:bg-secundario" onClick={cleanCart}>Vaciar el carrito <FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                        <div className="w-full lg:w-96 flex flex-col text-base gap-3 bg-white p-4">
                            <div className="flex justify-between">
                                <p>Cantidad de productos:</p>
                                <p className="text-right">{totalProduct}</p>
                            </div>
                            <div className="flex justify-between">
                                <p >Total:</p>
                                <p className="text-right font-bold ">${totalPrice}</p>
                            </div>
                            <Link to={'/checkout'} className='w-56 mx-auto text-base text-center text-white font-semibold rounded-md px-2 py-2 bg-secundario/90 hover:bg-secundario'> Finalizar compra </Link>
                        </div>
                    </div>
                </div>
                :
                <div className="w-3/5 p-2 mx-auto flex flex-col items-center gap-y-8">
                    <p className="text-xl">Carrito vacio D:</p>
                    <p className="text-base">Aún no agregaste productos.</p>
                    <Link to={'/'} className=' rounded-md px-8 py-2 bg-secundario/90 text-white font-semibold self-center hover:bg-secundario'>Ver productos</Link>
                </div>
            }
        </>
    )
}
export default CartContainer