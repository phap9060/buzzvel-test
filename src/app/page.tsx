import { Categories } from "@/modules/categories";
import { Community } from "@/modules/community";
import { Contact } from "@/modules/contact";
import { FeaturedCourse } from "@/modules/featured-course";
import { FinalCta } from "@/modules/final-cta";
import { Hero } from "@/modules/hero";
import { HowItWorks } from "@/modules/how-it-works";
import { SiteFooter } from "@/modules/site-footer";
import { SiteHeader } from "@/modules/site-header";
import { Testimonial } from "@/modules/testimonial";

export default function Home() {
  return (
    <>
      <a
        href="#top"
        className="sr-only rounded-lg bg-white px-4 py-2 text-body font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="top" tabIndex={-1} className="outline-none">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <Community />
        <Contact />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
