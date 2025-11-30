import dynamic from "next/dynamic";

import { Header } from "../layout/header";
import { TopBanner } from "./_subPages/topBanner";

const RealtimeLearning = dynamic(() =>
  import("./_subPages/realtimeLearning").then((mod) => mod.RealtimeLearning)
);

const Testimonials = dynamic(() =>
  import("./_subPages/testimonials").then((mod) => mod.Testimonials)
);

const HowItWorks = dynamic(() =>
  import("./_subPages/howItWorks").then((mod) => mod.HowItWorks)
);
const TrainersPortal = dynamic(() =>
  import("./_subPages/trainersPortal").then((mod) => mod.TrainersPortal)
);
const FooterBanner = dynamic(() =>
  import("./_subPages/footerBanner").then((mod) => mod.FooterBanner)
);
const Footer = dynamic(() =>
  import("./_subPages/footer").then((mod) => mod.Footer)
);

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
