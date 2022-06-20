import "./app/natours/sass/main.scss";
import Header from "./app/natours/layout/header/Header";
import AboutSection from "./app/natours/layout/about-section/AboutSection";
import FeaturesSection from "./app/natours/layout/features-section/FeaturesSection";
import TourSection from "./app/natours/layout/tours-section/TourSection";
import StoriesSection from "./app/natours/layout/stories-section/StoriesSection";
import BookSection from "./app/natours/layout/book-section/BookSection";
import Footer from "./app/natours/layout/footer/Footer";
import Navigation from "./app/natours/components/navigation-menu/Navigation";

const navigationList = [
  "Company",
  "Contact us",
  "Carrers",
  "Privacy policy",
  "Terms",
];
const menu = ["About Natours", "Your befits", "Popular tours", "Stories", "Book now"];

function App() {
  return (
    <div className="App">
      <Navigation listMenu={menu} />
      <Header />
      <main>
        <AboutSection />
        <FeaturesSection />
        <TourSection />
        <StoriesSection />
        <BookSection />
        <Footer navigationList={navigationList} name="TungDepTraiThanhLich" />
      </main>
    </div>
  );
}

export default App;
