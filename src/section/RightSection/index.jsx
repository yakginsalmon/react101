import About from "../About";
import Experience from "../Experience";

const RightSection = () => {
    return(
        <div className="grid gap-40 px-5">
        <About/>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
        
      </div>
    )
}
export default RightSection;