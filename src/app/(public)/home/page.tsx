import { Header } from "../layout/header";
import { TopBanner } from "./_subPages/topBanner";
import { RealtimeLearning } from "./_subPages/realtimeLearning";
import { Testimonials } from "./_subPages/testimonials";
import { HowItWorks } from "./_subPages/howItWorks";
import { FooterBanner } from "./_subPages/footerBanner";
import { Footer } from "./_subPages/footer";
import { TrainersPortal } from "./_subPages/trainersPortal";

const HomePage = () => {
  return (
    <div className="dark">
      <Header />
      <TopBanner />
      <HowItWorks />
      <RealtimeLearning />
      <TrainersPortal />
      <Testimonials />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
