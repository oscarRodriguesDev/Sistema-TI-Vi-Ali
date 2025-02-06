// components
'use client'
import { Navbar, Footer } from "./(site)/landing/components";
import MeetPage from "./(site)/landing/meetspace";

// sections
import Hero from "./(site)/landing/hero";
import SponsoredBy from "./(site)/landing/sponsored-by";
import AboutEvent from "./(site)/landing/about-event";
import OurStats from "./(site)/landing/our-stats";
import EventContent from "./(site)/landing/event-content";
import Faq from "./(site)/landing/faq";


export default function Site() {
  return (
    <>
      <Hero />
      <Navbar />


    </>
  );
}

/*   
<Navbar />
<MeetPage/>
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer /> */