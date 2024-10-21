import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import MyApproach from "@/components/MyApproach";
import Footer from "@/components/Footer";
import { getAllVerifiedTestimonials } from "@/lib/actions/testimonials.actions";
import Script from "next/script";
import dynamic from "next/dynamic";
import Spinner from "@/components/common/Spinner";
import { getAllInternships } from "@/lib/actions/internship.actions";

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center">
      <Spinner />
    </div>
  ),
});

export default async function Home() {
  const data = await getAllVerifiedTestimonials();
  const testimonials = data.allTestimonials;
  const internshipData = await getAllInternships();
  const internships = internshipData.allInternships;

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
        <Testimonials testimonials={testimonials} internships={internships} />
        <Experience />
        <MyApproach />
        <Footer />
      </div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
        strategy="lazyOnload"
      />
    </main>
  );
}
