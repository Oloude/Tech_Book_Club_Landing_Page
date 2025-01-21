 import circle from '../assets/pattern-circle.png'

function BookClubContent() {
  return (
    <div className='flex flex-col gap-8 lg:self-center lg:basis-1/2'>

        <h2 className='text-neutral900 text-2xlD font-Martian_Mono font-semibold leading-[1.3] tracking-[-2px] sm:max-w-[15ch]'>
        Not your average book  <span className='relative inline-block'> club
         <img src={circle} alt="" className='absolute -right-0 top-0  '/>
        </span>
            
        </h2>
        <p className='text-lgD text-neutral700 leading-[1.4] tracking-[-0.5px]'>
        Connect with a community that speaks your language - from <span className='font-semibold'>Python</span> to <span className='font-semibold'>TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications. Your tech reading journey 1 Choose your membership tier 2 Get your monthly book selection 3 Join our discussion forums 4 Attend exclusive meetups
        </p>

    </div>
  )
}

export default BookClubContent