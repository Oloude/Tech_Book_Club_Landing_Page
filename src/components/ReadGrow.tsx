import ReadGrowImage from "./ReadGrowImage"
import ReadGrowList from "./ReadGrowList"


function ReadGrow() {
  return (
   <section className="px-6 flex flex-col gap-10 sm:px-9 lg:px-[135px] lg:gap-13 lg:flex-row">
    <div className="flex flex-col gap-8 sm:gap-[34px] lg:basis-1/2 lg:order-2 lg:self-center">
        <h2 className="text-neutral900 text-2xlD leading-[1.3] tracking-[-2px] font-Martian_Mono font-semibold sm:max-w-[15ch] sm:text-3xlD">Read together, grow together  </h2>
        <div className="flex flex-col gap-6 sm:gap-8 ">
            <ReadGrowList value=" Monthly curated tech reads selected by industry experts"/>
            <ReadGrowList value=" Virtual and in-person meetups for deep-dive discussions"/>
            <ReadGrowList value="Early access to new tech book releases "/>
            <ReadGrowList value="Author Q&A sessions with tech thought leaders"/>
        </div>
    </div>
     <ReadGrowImage/>
   </section>
  )
}

export default ReadGrow