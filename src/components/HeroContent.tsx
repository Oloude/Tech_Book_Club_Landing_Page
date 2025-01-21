 import arrowDown from '../assets/icon-arrow-down.svg'
 import avatar from '../assets/image-avatars.webp'
import Ratings from './Ratings'
 
let arr = [1,2,3,4,5]
function HeroContent() {
  return (
    <div className="flex flex-col gap-9 lg:basis-1/2 lg:self-center">
        <div className="flex flex-col gap-8">
        <h1 className="text-gradient text-3xlM font-bold font-Martian_Mono sm:text-4xlD sm:leading-[1.2] sm:tracking-[-2px]">Join the ultimate tech book club </h1>
        <p className="text-lgD text-neutral700 leading-[1.4] tracking-[-0.5px]">Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.</p>
    </div>
    <div className="flex flex-col gap-7">
        <button className='flex gap-6 px-8 py-7 items-center rounded-sm border-2 border-neutral900 text-baseD text-neutral900 uppercase font-Martian_Mono font-semibold sm:self-start btn-gradient focus:outline focus:outline-neutral900 focus:outline-2 focus:outline-offset-2'>Review membership options<img src={arrowDown} alt="" /></button>
        <div className='flex gap-5 '>
           <img src={avatar} alt="" className='w-[110px] h-[40px] block'/>
           <div className='flex flex-col gap-2'>
            <div className='flex'>{arr.map((_,index)=> <Ratings key={index}/>)}</div>
            <p className='text-neutral700 text-smD font-Martian_Mono'>200+ developers joined already </p>
           </div>
        </div>
        </div></div>
  )
}

export default HeroContent