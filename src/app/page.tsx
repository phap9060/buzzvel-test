import { Categories } from "@/modules/categories";
import { FeaturedCourse } from "@/modules/featured-course";
import { Hero } from "@/modules/hero";
import { HowItWorks } from "@/modules/how-it-works";
import { SiteHeader } from "@/modules/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
      </main>
    </>
  );
}
