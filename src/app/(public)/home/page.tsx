import { Header } from "../layout/header";
import { Footer } from "./_subPages/footer";
import { FooterBanner } from "./_subPages/footerBanner";
import { HowItWorks } from "./_subPages/howItWorks";
import { RealtimeLearning } from "./_subPages/realtimeLearning";
import { Testimonials } from "./_subPages/testimonials";
import { TopBanner } from "./_subPages/topBanner";
import { TrainersPortal } from "./_subPages/trainersPortal";

const HomePage = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <HowItWorks />
      <RealtimeLearning />
      <TrainersPortal />
      <Testimonials />
      <FooterBanner />
      <Footer />
    </>
  );
};

export default HomePage;
