import fileResume from '../../assets/cv.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowPointer, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'
const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-3xl text-primaryTitle'>Orapin Sripued</div>
            <div className='text-primaryAccent font-semibold'>Software Developer · between jobs</div>
            <div className='text-sm w-5/6'>From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.</div>
            <div className='mt-4'>
                <a href={data.link} target='_blank'>
                    <span className='rounded-md bg-black text-white py-2 px-4'>
                        {data.btnText}
                        <span className='rotate180 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowPointer} /></span>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header;