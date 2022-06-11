import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    const [showMenuResponsive, setShowMenuResponsive] = useState(false);

    const toggleMenuResponsive = () => setShowMenuResponsive(!showMenuResponsive);
    const checkNavResponsiveShowed = () => showMenuResponsive ? toggleMenuResponsive() : null;

    //styles
    const navLinkStyle = "px-2 lg:px-4 py-2 rounded-md  font-medium hover:text-white";
    const navLinkStyleResponsive = "block py-3 rounded-md text-base font-medium hover:text-white";

    return (
        <>
            <nav className="fixed top-0 w-screen  sm:h-16  bg-secundario z-50">
                <div className=" px-10 lg:px-0 lg:w-9/12 mx-auto  py-4 h-full flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to={'/'} className='text-white text-xl sm:text-2xl font-bold'>MUSIC SHOP</Link>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex text-sm lg:text-base text-white/90">
                            <Link to={'/'} className={navLinkStyle} aria-current="page" >HOME</Link>
                            <Link to={'/categoria/instrumentos de viento'} className={navLinkStyle}>INSTRUMENTOS DE VIENTO</Link>
                            <Link to={'/categoria/instrumentos de cuerda'} className={navLinkStyle}>INSTRUMENTOS DE CUERDA</Link>
                            <Link to={'/cart'} className={navLinkStyle} ><CartWidget /></Link>
                        </div>
                    </div>
                    <button className="block text-white sm:hidden text-2xl " onClick={toggleMenuResponsive}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <div className={(showMenuResponsive ? 'block' : 'hidden') + ' sm:hidden w-full text-white/80 text-center'} id="navMenuResponsive">
                    <Link to={'/'} className={navLinkStyleResponsive} onClick={checkNavResponsiveShowed}>HOME</Link>
                    <Link to={'/categoria/instrumentos de viento'} className={navLinkStyleResponsive} onClick={checkNavResponsiveShowed} >INSTRUMENTOS DE VIENTO</Link>
                    <Link to={'/categoria/instrumentos de cuerda'} className={navLinkStyleResponsive} onClick={checkNavResponsiveShowed} >INSTRUMENTOS DE CUERDA</Link>
                    <Link to={'/cart'} className={navLinkStyleResponsive} onClick={checkNavResponsiveShowed} ><CartWidget /></Link>
                </div>
            </nav>
        </>
    )
}
export default NavBar