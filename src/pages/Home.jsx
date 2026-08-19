import React from "react";
import HeroSection from "../components/Hero";
import { SiteHeader } from "../components/site-header";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import { SiteFooter } from "../components/site-footer";
import { FloatingActions } from "../components/floating-actions";
import { Locations } from "../components/locations";
import { Stats} from "../components/stats";
import { Products } from "../components/products";
import { HowToRent } from "../components/how-to-rent";
import { WhyChoose } from "../components/why-choose";
import { Testimonials } from "../components/testimonials";
// import ProductsPage from "../components/productPage"
import { ProductSection } from "../components/productSection"
import { FAQs } from "../components/FAQs";
import Preloader from "../components/Preloader";

const Home = () => {
  return (
    <div>
      <Preloader />
      <SiteHeader />
      <HeroSection />
      <About />
      <Contact />
      {/* <ProductsPage /> */}
      <Locations />
      <Stats />
      {/* <Products /> */}
      <ProductSection />
      <HowToRent />
      <WhyChoose />
      <Testimonials />
      <FAQs />
      <SiteFooter />
      <FloatingActions />
    </div>
  );
};

export default Home;