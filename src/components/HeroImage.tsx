import heroMobile from '../assets/image-hero-mobile.webp'
import heroTablet from '../assets/image-hero-tablet.webp'
import heroDesktop from '../assets/image-hero-desktop.webp'

function HeroImage() {
  return (
   <picture className='relative z-10 lg:basis-1/2'>
    <source media="(min-width: 1440px)" srcSet={heroDesktop} />
    <source media="(min-width: 768px)" srcSet={heroTablet} />
    <img src={heroMobile} alt="" className='block w-full h-[385px] object-fill rounded-[5px] sm:h-[790px] sm:rounded-[10px] '/>
   </picture>
  )
}

export default HeroImage