/* eslint-disable react/no-unescaped-entities */

import TestimonialComponent from "@/components/testimonials";


export default function Testimonials() {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="contact-heading-div flex flex-col h-[25rem] items-start justify-center">
                <h2 className=" text-4xl font-bold mb-1 w-full">Testimonials</h2>
                <h3 className="font-semibold text-lg w-full">Home / Testimonials</h3>
            </div>

            <TestimonialComponent />
        </div>
    )
}
