import { Hero } from "@/modules/hero";
import { SiteHeader } from "@/modules/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
      </main>
    </>
  );
}
