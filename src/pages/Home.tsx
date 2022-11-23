import { Banner, Features, Footer, HowItWorks, Nav, Pricing, Testimonial } from "../components";

export default function Home() {
  return (
    <div className="webPage">
      <Nav/>
      <Banner />
      <Features/>
      <HowItWorks/>
      <Testimonial/>
      <Pricing/>
      <Footer/>
    </div>
  );
}
