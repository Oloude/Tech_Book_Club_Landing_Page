 import ReadImageMobile from '../assets/image-read-together-mobile.webp'
 import ReadImageTablet from '../assets/image-read-together-tablet.webp'
 import ReadImageDesktop from '../assets/image-read-together-desktop.webp'

function ReadGrowImage() {
  return (
   <picture className='lg:order-1 lg:basis-1/2'>
    <source media="(min-width: 1440px)" srcSet={ReadImageDesktop} />
    <source media="(min-width: 768px)" srcSet={ReadImageTablet} />
    <img src={ReadImageMobile} alt="" className='block h-[320px] w-full object-fill rounded-[12.25px] sm:h-[654px] sm:rounded-[25.14px] lg:h-[520px] lg:rounded-[2-px]'/>
   </picture>
  )
}

export default ReadGrowImage