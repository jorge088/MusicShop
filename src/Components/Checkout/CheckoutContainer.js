import { useState } from "react";
import CheckoutCartResume from "./CheckoutCartResume"
import CheckoutForm from "./CheckoutForm"

import { useCartContext } from "../context/CartContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
    const { cart } = useCartContext();
    const [buyFinish, setBuyFinish] = useState(false);
    const [buyData, setBuyData] = useState({
        id: '',
        name: ''
    });

    const calcCartTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(product => {
            totalPrice += product.price * product.quantity;
        });
        return totalPrice;
    }

    const calcCartTotalProducts = () => {
        let totalProducts = 0;
        cart.forEach(product => {
            totalProducts += product.quantity;
        });
        return totalProducts;
    }

    const buyIsFinished = (buyerId, buyerName) => {

        setBuyFinish(true);
        setBuyData({ ...buyData, 'id': buyerId, 'name': buyerName });
    }
    return (
        <>
            {buyFinish ?
                <div className="w-11/12 sm:w-8/12 lg:w-5/12 mx-auto py-8 px-2 bg-white rounded-md min-h-64 flex flex-col items-center gap-1">
                    <h3 className="text-2xl">¡Compra Realizada con Exito!</h3>
                    <span className="text-8xl my-2 text-secundario "><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></span>
                    <p className="text-lg text-center">Gracias por comprar con nosotros <span className="font-semibold">{buyData.name}</span>.</p>
                    <p className="text-lg text-center"> El ID de tu compra es <span className="font-semibold">{buyData.id}</span>.</p>
                    <p className="text-xl text-center">Gracias por confiar :D</p>
                    <Link to={'/'} className="mt-4 rounded-md px-8 py-2 bg-secundario/90 text-white font-semibold self-center hover:bg-secundario">Volver a Home</Link>
                </div>
                :
                <div className="w-11/12 py-8 mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-6">
                    <CheckoutForm
                        totalPrice={calcCartTotalPrice()}
                        buyFinish={buyIsFinished}>
                    </CheckoutForm>
                    <CheckoutCartResume
                        totalPrice={calcCartTotalPrice()}
                        totalProducts={calcCartTotalProducts()}>
                    </CheckoutCartResume>
                </div>
            }
        </>
    )
}
export default CheckoutContainer