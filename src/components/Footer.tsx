import avatar from '../assets/image-avatars.webp'
import Ratings from './Ratings'
import linkedin from '../assets/logo-linkedin.svg'
import bluesky from '../assets/logo-bluesky.svg'
import arrowUp from '../assets/icon-arrow-up.svg'

let arr = [1,2,3,4,5]

function Footer() {
  return (
    <footer className="bg-patternDark bg-no-repeat bg-cover px-6 py-11 bg-neutral900 flex flex-col sm:px-9 gap-12 lg:px-[135px] lg:pt-13 lg:pb-0">
        <div className='flex flex-col '>
            <h3 className='mb-10 text-neutral50 font-Martian_Mono font-semibold text-2xlD text-center max-w-[15ch] self-center sm:text-3xlD sm:max-w-[20ch]'>Ready to debug your reading list? </h3>
            <button className='btn-accent mb-8 flex gap-6 items-center text-white px-8 py-7 justify-center border border-white rounded-sm uppercase text-baseM font-Martian_Mono font-semibold sm:self-center focus:outline focus:outline-white focus:outline-2 focus:outline-offset-2'>Review membership options <img src={arrowUp} alt="" /></button>
            <div className='flex gap-5 sm:self-center'>
                <img src={avatar} alt="" className='w-[110px] h-[40px] block'/>
                <div className='flex flex-col gap-2'>
                    <div className='flex'>{arr.map((_,index)=> <Ratings key={index}/>)}</div>
                    <p className='text-neutral50 text-smD font-Martian_Mono'>200+ developers joined already </p>
                </div>
            </div>
        </div>
        <div className='flex flex-col  items-center px-9 py-8 border-t border-neutral700 gap-6 sm:flex-row sm:justify-between'>
            <p className='text-neutral50 text-smD font-Martian_Mono'>© 2024 - Tech Book Club</p>
            <div className='flex gap-8'>
                <img src={bluesky} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer