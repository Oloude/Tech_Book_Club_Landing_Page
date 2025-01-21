import Ratings from "./Ratings"

let arr = [1,2,3,4,5]

function Testimonial() {
  return (
    <section className="px-6 flex flex-col gap-9 sm:px-9 lg:px-[135px] lg:items-center">
        <div className="flex ">
          {arr.map((_,index)=> <Ratings key={index}/>)}
        </div>
        <div className="flex flex-col gap-9">
            <p className="text-2xlD font-Martian_Mono font-semibold text-neutral900 leading-[1.3] tracking-[-1px] lg:text-center"> "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"  </p>
            <p className="text-neutral700 text-lgD lg:text-center">Sarah Chen, Software Architect</p>
        </div>
    </section>
  )
}

export default Testimonial