import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className=" w-screen bg-secundario/90 min-h-32 py-4 text-white text-center text-xl flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0">
            <div>
                <h4 className="font-semibold">Ubicación</h4>
                <p className="text-base">Ambrosio Olmos 3000, Córdoba</p>
            </div>
            <div>
                <h4 className="font-semibold">Contactanos en</h4>
                <div className="text-3xl pt-2 flex justify-center gap-4">
                    <a href='https://www.instagram.com' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href='https://mail.google.com' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href='https://www.facebook.com/' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer