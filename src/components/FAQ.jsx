"use client"

import Image from "next/image"

import faqImage from '../../public/images/home/faq.png'
import { faqData } from "@/data/faqData"
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export default function FAQ() {
    const [showAns, setShowAns] = useState(Array(faqData.length).fill(false));
    // const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleAnswer = (index) => {
        setShowAns((prevState) => {
            const newShowAns = Array(faqData.length).fill(false);
            newShowAns[index] = !prevState[index];
            return newShowAns;
        });
        // setSelectedQuestion((prevSelected) => (prevSelected === index ? null : index));
    };
    return (
        <>
            <div className="faqOverlay relative pt-[5rem] pb-[2rem]">
                <div className="faq-content max-w-[1500px] mx-auto">
                    <div className="heading max-w-[55%] mx-auto text-center flex flex-col gap-3 items-center justify-center">
                        <p className="text-2xl font-semibold">FAQ</p>
                        <p className="text-5xl font-bold mb-4">Frequently Asked Questions</p>
                        <p className="text-gray-500">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                    </div>
                    <div className="max-w-[60%] mt-[4rem] mb-[8rem] mx-auto flex flex-col border-2 border-gray-100 items-start self-stretch shadow-2xl bg-white">
                        { faqData &&
                            faqData.map((item, index) => {
                                return (
                                    <div key={ index } className={ `cursor-pointer border-b border-gray-100 items-center self-stretch border-b-[#F1F1F3]` } onClick={ () => toggleAnswer(index) }>
                                        <div className={ `${showAns[index] ? 'shadow-lg bg-[#ff4d30] text-white' : 'shadow-none'} flex items-center font-semibold justify-between text-xl px-12 py-5` }>
                                            <p className="cursor-pointer text-lg mr-4">
                                                { item.id }. { item.question }
                                            </p>
                                            <button className=" outline-none" >
                                                <FaAngleDown />
                                            </button>
                                        </div>
                                        <div className={ `${showAns[index] ? "block px-16 py-3" : "hidden"} text-gray-500  my-4` }>
                                            <p>{ item.answer }</p>
                                        </div>
                                    </div>
                                );
                            }) }
                    </div>
                </div>

            </div >
        </>
    )
}
