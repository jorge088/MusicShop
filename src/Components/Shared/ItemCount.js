import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({ initial, stock, id, onAdd }) => {
    const [count, setCount] = useState(initial);
    const [limitAlert, setLimitAlert] = useState(false);

    const { addToCart } = useCartContext();
    const { products } = useAppContext();

    useEffect(() => {
        if (count < stock) setLimitAlert(false);
    }, [count, stock])

    const sumItem = () => {
        count < stock ? setCount(count + 1) : setLimitAlert(true);
    }
    const restItem = () => {
        count > 1 ? setCount(count - 1) : setLimitAlert(true);
    }

    const handleClick = (id, count) => {
        const findProduct = products.find(prod => prod.id === id);
        if (!findProduct) {
            alert("Error en la base de datos, no se encuentra el producto");
            return;
        }
        addToCart(findProduct, count);
        onAdd(findProduct.name, count);
    }

    return (
        <>
            <div className="flex flex-col items-center gap-3">
                <div className='flex gap-3 items-center relative'>
                    <button className=' rounded-md px-3 py-1 bg-secundario/80 text-white hover:bg-secundario' onClick={restItem}>
                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </button>
                    <p className="text-base"> {count} </p>
                    <button className=' rounded-md px-3 py-1 bg-secundario/80 text-white hover:bg-secundario' onClick={sumItem}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>
                    <span className={`absolute left-32 ${limitAlert ? 'block' : 'hidden'} `}>
                        <p className='w-28 text-sm text-red/80 font-semibold'>Cantidad limite</p>
                    </span>

                </div>
                <button className='rounded-md px-8 py-2 bg-secundario/90 text-base text-white font-semibold hover:bg-secundario' onClick={() => handleClick(id, count)}>Agregar al carrito</button>
            </div>

        </>
    )
}
export default ItemCount