import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMeta } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Contract = () => {
    return(
        <div className='flex items-end gap-4 text-lg'>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faSquareInstagram} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faMeta} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGoogle} />
          </div>
    )
}
export default Contract;