import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';
import { useState } from "react";

const CheckoutForm = ({ totalPrice, buyFinish }) => {
    const { cart, setCart } = useCartContext();

    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        email: "",
        dni: "",
        phone: ""
    });

    const today = new Date().toISOString().slice(0, 10);

    let isValidate = buyer.name && buyer.surname && buyer.email && buyer.dni && buyer.phone;

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    };

    const addOrder = async (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');

        const productsToBuy = cart.map(({ id, name, price }) => ({ id, name, price }));
        const order = {
            buyer: buyer,
            products: productsToBuy,
            date: today,
            total: totalPrice
        }
        setCart([]);

        const response = await addDoc(orderCollection, order);
        buyFinish(response.id, `${order.buyer.name} ${order.buyer.surname}`);
    }
    return (
        <>
            <div className="w-full sm:w-10/12 lg:w-6/12 px-2 py-6 bg-white rounded-md shadow-secundario/30 shadow-lg hover:shadow-secundario/60">
                <h2 className="w-full text-xl pb-1 border-b border-secundario">Datos Personales</h2>
                <form className="mt-6 flex flex-col gap-2">
                    <input
                        className="border border-black/30 focus:border-secundario outline-none py-2 px-2 w-full"
                        id="input-email"
                        name="email"
                        type={'email'}
                        placeholder="Email"
                        onChange={handleSubmitChange}>
                    </input>
                    <div className="flex w-full justify-between gap-4">
                        <input
                            className="border border-black/30 focus:border-secundario outline-none w-6/12 py-2 px-2"
                            id="input-name"
                            name="name"
                            type={'text'}
                            placeholder="Nombre"
                            onChange={handleSubmitChange}>
                        </input>
                        <input
                            className="border border-black/30 focus:border-secundario  outline-none w-6/12 py-2 px-2"
                            id="input-surname"
                            name="surname"
                            type={'text'}
                            placeholder="Apellido"
                            onChange={handleSubmitChange}>
                        </input>
                    </div>
                    <div className="flex w-full justify-between gap-4">
                        <input
                            className="border border-black/30 focus:border-secundario outline-none w-6/12 py-2 px-2"
                            id="input-dni"
                            name="dni"
                            type={'number'}
                            placeholder="DNI"
                            onChange={handleSubmitChange}>
                        </input>
                        <input
                            className="border border-black/30 focus:border-secundario outline-none w-6/12 py-2 px-2"
                            id="input-phone"
                            name="phone"
                            type={'number'}
                            placeholder="Telefono"
                            onChange={handleSubmitChange}>
                        </input>
                    </div>
                    {isValidate && cart.length !== 0 ?
                        <button
                            className="rounded-md bg-secundario/80 hover:bg-secundario text-white font-semibold py-2 "
                            onClick={addOrder}>Enviar
                        </button>
                        :
                        <p
                            className="text-center rounded-md bg-secundario/80 hover:bg-secundario text-white font-semibold py-2 ">
                            {cart.length === 0 ?
                                'Carrito vacio :/'
                                :
                                'Complete sus datos'
                            }
                        </p>
                    }

                </form>
            </div>
        </>
    )
}
export default CheckoutForm