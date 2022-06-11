import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../Shared/ItemCount";



const ItemDetail = ({ item }) => {
    const [terminar, setTerminar] = useState(false);

    const onAdd = (name, count) => {
        setTerminar(true);
    }
    return (
        <>
            <div className="w-full sm:w-96 lg:w-6/12 sm:mx-auto h-3/5 my-8 px-6 py-4 bg-white flex flex-col lg:flex-row justify-between items-center gap-4 shadow-secundario/30 shadow-lg hover:shadow-secundario/60">
                <div className="w-52 lg:w-72 h-72 overflow-hidden">
                    <img className="w-full h-full hover:scale-110 duration-700" src={item.img} alt={item.name}></img>
                </div>
                <div className="w-full flex flex-col justify-between gap-3 ">
                    <h3 className="text-2xl font-normal ">{item.name}</h3>
                    <p className="text-2xl font-medium">${item.price}</p>
                    <p className="text-sm text-justify">{item.description}</p>
                    <p className="text-base text-center">Stock disponible {item.stock}</p>
                    {terminar ? (
                        <div className="w-full flex justify-around">
                            <Link to={'/'} className='rounded-md w-28 text-white text-base text-center py-1 bg-secundario/90 hover:bg-secundario' >Seguir comprando</Link>
                            <Link to={'/cart'} className='rounded-md w-28 text-white text-base text-center py-1 bg-secundario/90 hover:bg-secundario' >Terminar compra</Link>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={item.stock} id={item.id} onAdd={onAdd} />
                    )
                    }

                </div>
            </div>
        </>
    )
}
export default ItemDetail