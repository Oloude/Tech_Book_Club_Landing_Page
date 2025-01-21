import BookClubContent from "./BookClubContent"
import BookClubImage from "./BookClubImage"

 

function BookClub() {
  return (
    <section className='px-6 flex flex-col gap-10 sm:px-9 lg:px-[135px] lg:flex-row lg:gap-13'>
        <BookClubContent/>
        <BookClubImage/>
    </section>
  )
}

export default BookClub