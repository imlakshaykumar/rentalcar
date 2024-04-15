/* eslint-disable react/no-unescaped-entities */
import { testimonialsData } from "@/data/testimonialsData"
import Image from "next/image"

import dquote from '../../public/dquote.svg'


export default function TestimonialComponent() {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="content flex flex-col gap-2 items-center justify-center text-center w-[750px] mx-auto">
                <p className="text-lg font-bold">Reviewed by People</p>
                <h2 className="text-5xl font-bold mb-5">Client's Testimonials</h2>
                <p className="text-gray-500">Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="testimonial-content-div grid grid-cols-2 gap-[3rem] max-w-[80%] w-fit mx-auto mt-[6rem] mb-[10rem] ">
                {
                    testimonialsData?.map((item, index) => {
                        return (
                            <>
                                <div key={ index } className="testimonial bg-gray-100 p-[3rem] rounded-md shadow-2xl">
                                    <p className="text-2xl mb-8">"{ item.review }"</p>
                                    <div className="name-info flex items-center justify-between">
                                        <div className="info flex items-center gap-5">
                                            <Image src={ item.image } alt="image" width={ 80 } className=" rounded-full" />
                                            <div className="name">
                                                <p className="text-lg font-semibold capitalize">{ item.name }</p>
                                                <p className="text-sm text-gray-500 capitalize">{ item.profile }</p>
                                            </div>
                                        </div>
                                        <Image src={ dquote } alt="quote" />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}
