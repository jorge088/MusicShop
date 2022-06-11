import { Link } from "react-router-dom";

const Item = ({ item }) => {

    const itemContainerStyleSmall = " sm:w-56 sm:h-80 sm:p-4 sm:flex-col sm:justify-between";
    const itemContainerStyleLarge = " lg:w-60 lg:h-96 lg:p-5";

    return (
        <>
            <div id="itemContainer" className={"w-full h-48 p-2 flex bg-white justify-around  items-center gap-1 shadow-secundario/30 shadow-lg hover:shadow-secundario/60 " + itemContainerStyleSmall + itemContainerStyleLarge} >
                <Link to={`/detalle/${item.id}`} className=" w-28 sm:40  h-full sm:h-40  lg:h-48 flex justify-center overflow-hidden">
                    <img className=" w-full h-full hover:scale-110 duration-700" src={item.img} alt={item.name}></img>
                </Link>
                <div className="w-2/5 sm:w-full sm:h-28 flex flex-col sm:justify-between gap-2 sm:gap-1">
                    <p className="font-normal text-base ">{item.name}</p>
                    <p className="font-semibold text-lg">${item.price}</p>
                    <Link to={`/detalle/${item.id}`} className="self-center">
                        <button className='rounded-md px-8 py-1 bg-secundario/90 text-base font-semibold text-white hover:text-white hover:bg-secundario' >Ver más</button>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Item