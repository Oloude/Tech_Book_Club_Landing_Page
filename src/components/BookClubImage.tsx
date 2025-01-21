 import bookClubMobile from '../assets/image-not-average-mobile.webp'
import bookClubTablet from '../assets/image-not-average-tablet.webp'
import bookClubDesktop from '../assets/image-not-average-desktop.webp'


import logoTech from '../assets/logos-tech.svg'


function BookClubImage() {
  return (
    <picture className='relative lg:basis-1/2'>
        <source media="(min-width: 1440px)" srcSet={bookClubDesktop} />
        <source media="(min-width: 768px)" srcSet={bookClubTablet} />
        <img src={bookClubMobile} alt="" className='block w-full object-fill h-[319px]  rounded-[12.25px] sm:h-[654px] sm:rounded-[25.14px] lg:h-[520px] lg:rounded-[2-px]'/>
    
    <div className='hidden sm:block sm:absolute sm:bottom-10 sm:right-10 lg:-left-20'>
    <img src={logoTech} alt="" />
    </div>
    
    
    </picture>
  )
}

export default BookClubImage