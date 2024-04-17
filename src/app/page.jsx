import AboutComponent from "@/components/about";
import BestDeals from "@/components/bestDeals";
import CarModelHome from "@/components/carModels";
import Download from "@/components/download";
import FAQ from "@/components/FAQ";
import TestimonialComponent from "@/components/testimonials";


export default function Home() {
  return (
    <div className="w-full">
      <div className="content max-w-[1500px] mx-auto">
        <div className="contact-heading-div flex flex-col h-[25rem] items-start justify-center">
          <h2 className=" text-4xl font-bold mb-1 w-full">Home</h2>
        </div>
      </div>

      <AboutComponent />
      <CarModelHome />
      <BestDeals />
      <TestimonialComponent />
      <FAQ />
      <Download />

    </div>
  );
}
