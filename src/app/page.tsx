import { Categories } from "@/modules/categories";
import { Community } from "@/modules/community";
import { Contact } from "@/modules/contact";
import { FeaturedCourse } from "@/modules/featured-course";
import { Hero } from "@/modules/hero";
import { HowItWorks } from "@/modules/how-it-works";
import { SiteHeader } from "@/modules/site-header";
import { Testimonial } from "@/modules/testimonial";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
      </main>
    </>
  );
}
