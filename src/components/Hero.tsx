import Header from "./Header"
import patternGlow from '../assets/pattern-glow.svg'
import HeroImage from "./HeroImage"
import HeroContent from "./HeroContent"

 

function Hero() {
  return (
    <section className="relative bg-patternLight bg-no-repeat w-full overflow-hidden bg-cover px-6 pt-8 pb-13 bg-neutral50 h-auto flex flex-col gap-11 sm:px-9 sm:pt-9 lg:px-[135px] lg:gap-13">
        <img src={patternGlow} alt="" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 -z-0"/>
        <Header/>
        <div className="flex gap-12 flex-col lg:flex-row lg:gap-">
        <HeroContent/>
        <HeroImage/>
        </div>
        
    </section>
  )
}

export default Hero