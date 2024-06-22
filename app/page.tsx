import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import MyApproach from "@/components/MyApproach";
import Footer from "@/components/Footer";
import { getAllVerifiedTestimonials } from "@/lib/actions/testimonials.actions";

export default async function Home() {
  const data = await getAllVerifiedTestimonials();
  const testimonials = data.allTestimonials;
  return (
    <main
      className="relative flex justify-center items-center 
    flex-col overflow-clip mx-auto sm:px-10 bg-black-100"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials testimonials={testimonials} />
        <Experience />
        <MyApproach />
        <Footer />
      </div>
    </main>
  );
}
