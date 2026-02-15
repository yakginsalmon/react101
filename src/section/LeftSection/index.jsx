import Header from '../Header'
import Navbar from '../Navbar'
import Contract from '../Contract'
const LeftSection = () => {
    return(
        <div className='px-5'>
        <div className='sticky top-14 grid grid-rows-[35%_40%_25%] h-screen'>
          <Header />
          <Navbar />
          <Contract />
        </div>
      </div>
    )
}
export default LeftSection;