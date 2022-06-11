import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <>
            <div className='flex flex-col items-center w-34 mx-auto gap-3'>
                <span>
                    <FontAwesomeIcon icon={faCompactDisc} className='text-7xl text-secundario animate-spin'></FontAwesomeIcon>
                </span>
                <p className='text-2xl font-regular'>Cargando...</p>
            </div>
        </>
    )
}
export default Loading