 import checkIcon from '../assets/icon-check.svg'
 import patternGlow from '../assets/pattern-glow.svg'

 type OptionProps = {
    title : string,
    price : string,
    range : string,
    itemOne : string,
    itemTwo : string,
    btn : string
 }

function MembershipOption({title, price, range, itemOne, itemTwo, btn} : OptionProps) {
  return (
    <div className={`${ title === 'Pro' ? 'bg-patternLight bg-neutral50 bg-no-repeat bg-cover relative z-10 overflow-hidden w-full lg:py-10 lg:' : 'lg:self-center'} px-8 py-8 flex flex-col gap-9 rounded-sm border border-salmon50`}>
        <div className='flex flex-col gap-8'>
        <h4 className='text-xlD font-Martian_Mono text-neutral900 font-semibold leading-[1.1] tracking-[-1px]'>{title}</h4>
        <p className='text-neutral900 text-lgD flex gap-4 items-center'><span className='00 text-2xlD font-Martian_Mono font-semibold leading-[1.3] tracking-[-1px]'>{price}</span> {range}</p>
        <div className='w-full h-[1px] bg-neutral200'></div>
        <div className='flex flex-col gap-6'>
            <div className='flex gap-5'>
                <img src={checkIcon} alt="" className='w-8 h-8 block' />
                <p className='text-lgD text-neutral900'>{itemOne}</p>
            </div>
            <div className='flex gap-5'>
                <img src={checkIcon} alt="" className='w-8 h-8 block'/>
                <p className='text-lgD text-neutral900'>{itemTwo}</p>
            </div>
        </div>
        </div>
        <button className='btn-gradient px-8 py-7 flex justify-center uppercase border border-neutral900 rounded-sm text-neutral900 text-baseM font-Martian_Mono font-semibold focus:outline focus:outline-neutral900 focus:outline-2 focus:outline-offset-2'>{btn}</button>
        <img src={patternGlow} alt="" className={`${title === 'Pro' ? 'absolute bottom-0 right-0 -z-0 translate-x-1/2 translate-y-1/2' : 'hidden'}`}/>
    </div>
  )
}

export default MembershipOption