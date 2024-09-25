import Footer from "./components/common/footer/footer";
import GetInTouch from "./components/get-in-touch/get-in-touch";
import Header from "./components/header/header";
import ClientLogos from "./components/home/client-logos";
import HomeSection from "./components/home/home-section";
import IntroSection from "./components/home/intro-section";
import RecentWork from "./components/recent-work/recent-work";
import Testimonial from "./components/testimonials/testimonial";
import CaseStudyShowcase from "./components/work-showcase/case-study-showcase";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection>
        <IntroSection />
        <ClientLogos />
      </HomeSection>
      <CaseStudyShowcase />
      <Testimonial />
      <RecentWork />
      <GetInTouch />
      <Footer/>
    </div>
  );
}
