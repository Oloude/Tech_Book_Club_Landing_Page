 import patternArrow from '../assets/pattern-arrow.svg'
 
 type ItemProps = {
    num : number,
    item : string
 }

function ReadingJourneyItem({num, item} : ItemProps) {
  return (
    <div className="flex flex-col gap-7 sm:gap-8 lg:relative">
        <div className="w-9 h-9 border border-neutral900 rounded flex justify-center items-center text-baseM text-neutral900 font-Martian_Mono font-semibold sm:w-10 sm:h-10 sm:text-baseD">{num}</div>
        <p className="text-baseM text-neutral900 font-Martian_Mono font-semibold sm:text-baseD">{item}</p>
        <img src={patternArrow} alt="" className={`${num === 1 ? 'lg:block lg:absolute lg:right-0 lg:top-0' :
            num === 2 ? 'lg:block lg:absolute lg:right-0 lg:top-0' :
            num === 3 ? 'lg:block lg:absolute lg:right-0 lg:top-0' :
            'hidden'
        } hidden `}/>
    </div>
  )
}

export default ReadingJourneyItem