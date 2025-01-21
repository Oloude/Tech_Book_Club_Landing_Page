import BookClub from "./components/BookClub";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Membership from "./components/Membership";
import ReadGrow from "./components/ReadGrow";
import ReadingJourney from "./components/ReadingJourney";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <main className="font-Inter flex flex-col gap-12 sm:gap-13 lg:gap-[120px]">
      <Hero/>
      <ReadGrow/>
      <BookClub/>
      <ReadingJourney/>
      <Membership/>
      <Testimonial/>
      <Footer/>
    </main>
  )
}