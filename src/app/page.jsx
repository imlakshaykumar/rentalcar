import AboutComponent from "@/components/about";
import BestDeals from "@/components/bestDeals";
import BookCar from "@/components/BookCar";
import CarModelHome from "@/components/carModels";
import Download from "@/components/download";
import FAQ from "@/components/FAQ";
import TestimonialComponent from "@/components/testimonials";

import Image from "next/image";

import heroImage from '../../public/images/home/home-main-hero.png'

import { FaAngleRight, FaRegCircleCheck } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full relative">
      <div className="hero-overlay absolute right-0 bottom-0 left-0 top-0 z-[-9999]"></div>
      <div className="content max-w-[1500px] mx-auto">
        <div className="hero-div mx-auto flex items-center justify-center h-[100vh] w-fit">
          <div className="hero-content w-2/6 flex flex-col gap-3">
            <p className="text-xl font-bold">Plan your trip now</p>
            <p className="text-5xl font-extrabold">Save <span className="text-[#ff4d30]">big</span> with our car rental </p>
            <p className="text-gray-500 text-sm my-4">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="hero-btn-div w-full flex items-center justify-start gap-5">
              <button
                className="capitalize flex items-center bg-[#ff4d30] hover:bg-[#ff3e30] outline-none text-white py-4 px-8 rounded-sm shadow-lg font-extrabold text-sm ">book ride <FaRegCircleCheck className="text-lg ml-2 font-extrabold" /></button>
              <button
                className="capitalize flex items-center bg-black outline-none text-white py-4 px-8 rounded-sm shadow-lg font-extrabold text-sm ">
                learn more <FaAngleRight className="text-lg ml-2 font-extrabold" /></button>
            </div>
          </div>
          <div className="hero-image-div w-fit block relative">
            <Image src={ heroImage } alt="hero car image" className=" object-cover" />
          </div>
        </div>
      </div>

      {/* TODO: fix this component */ }
      {/* <BookCar /> */ }

      <AboutComponent />

      {/* TODO: fix this component */ }
      {/* <CarModelHome /> */ }

      <BestDeals />
      <TestimonialComponent />
      <FAQ />
      <Download />

    </div>
  );
}
