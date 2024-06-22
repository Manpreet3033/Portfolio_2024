import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
// import RecentProjects from "@/components/RecentProjects";
// import Testimonials from "@/components/Testimonials";
// import Experience from "@/components/Experience";
// import MyApproach from "@/components/MyApproach";
// import Footer from "@/components/Footer";
import { getAllVerifiedTestimonials } from "@/lib/actions/testimonials.actions";
import Script from "next/script";
import Spinner from "@/components/common/Spinner";

const DynamicGrid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <Spinner />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <Spinner />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
  loading: () => <Spinner />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <Spinner />,
});
const MyApproach = dynamic(() => import("@/components/MyApproach"), {
  ssr: false,
  loading: () => <Spinner />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <Spinner />,
});

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
        <DynamicGrid />
        <RecentProjects />
        <Testimonials testimonials={testimonials} />
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
