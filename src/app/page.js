import Contact from "./components/contact/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import PizzaMenu from "./components/menu/page";
import ReviewsSection from "./components/reviews/page";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PizzaMenu />
      <ReviewsSection />
      <Contact />
      <Footer />
    </>
  );
}
