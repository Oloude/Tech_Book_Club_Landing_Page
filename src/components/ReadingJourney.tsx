import ReadingJourneyItem from "./ReadingJourneyItem"
import patternGlow from '../assets/pattern-glow.svg'

 

function ReadingJourney() {
  return (
    <section className="flex flex-col gap-9 px-6 py-12 bg-patternLight bg-no-repeat bg-cover relative rounded-lg w-full overflow-hidden bg-neutral50 sm:px-9 sm:py-13 sm:gap-11 lg:px-[135px]">
        <h2 className="text-neutral900 font-semibold font-Martian_Mono text-2xlD leading-[1.3] tracking-[-2px] sm:text-3xlD sm:leading-[1.2] sm:max-w-[20ch] lg:text-center lg:max-w-[15ch] lg:self-center">Your tech reading journey </h2>
        <div className="flex flex-col gap-9 sm:gap-10 lg:flex-row lg:gap-11">
            <ReadingJourneyItem num={1} item="  Choose your membership tier "/>
            <ReadingJourneyItem num={2} item=" Get your monthly book selection "/>
            <ReadingJourneyItem num={3} item=" Join our discussion forums"/>
            <ReadingJourneyItem num={4} item=" Attend exclusive meetups"/>
        </div>
        <img src={patternGlow} alt="" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"/>
    </section>
  )
}

export default ReadingJourney