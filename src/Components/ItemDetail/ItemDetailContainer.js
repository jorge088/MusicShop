import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { products } = useAppContext();

    const { itemId } = useParams();

    useEffect(() => {
        setProduct(products.find(product => product.id === itemId));
    }, [itemId, products]);

    return (
        <>
            <div className=" w-11/12 mx-auto">
                {product ?
                    <ItemDetail item={product} />
                    :
                    <div className='flex flex-col items-center w-34 mx-auto gap-3'>
                        <span>
                            <FontAwesomeIcon icon={faXmark} className='border-4 px-5 py-2 rounded-full text-6xl text-secundario '></FontAwesomeIcon>
                        </span>
                        <p className='text-base sm:text-2xl text-center  font-regular'>No existe el producto con el ID ingresado</p>
                    </div>
                }
            </div>

        </>
    )
}
export default ItemDetailContainer