import MembershipOption from "./MembershipOption"

 

function Membership() {
  return (
    <section className="px-6 flex flex-col gap-8 sm:px-9 sm:gap-10 lg:gap-12 lg:px-[135px]">
        <h2 className="text-2xlD font-Martian_Mono text-neutral900 font-semibold sm:text-3xlD lg:text-center lg:self-center">Membership options </h2>
        <div className="grid grid-cols-1 grid-rows-3 gap-8 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-[auto]">
           <MembershipOption title='Starter' price="$19" range="/month" itemOne="1 book/month" itemTwo="Online forums" btn="Subscribe now"/>
           <MembershipOption title='Pro' price=" $29" range="/month" itemOne="2 books/month " itemTwo="Virtual meetups " btn="Subscribe now"/>
           <MembershipOption title='Enterprise' price="Custom" range="" itemOne="Team access" itemTwo="Private sessions" btn="Talk to us "/>
        </div>
    </section>
  )
}

export default Membership