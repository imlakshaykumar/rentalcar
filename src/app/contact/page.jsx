import Image from "next/image"

import contactRing from '../../../public/contactRing.svg'
import mail from '../../../public/mail.svg'
import location from '../../../public/location.svg'
import message from '../../../public/message.svg'

export default function Contact() {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="contact-heading-div relative">

                {/* <div className="hero-overlay absolute inset-0 w-full h-full right-0 top-0 left-0 bottom-0 opacity-90"></div> */ }

                <div className="heading flex flex-col h-[25rem] items-start justify-center">
                    <h2 className=" text-4xl font-bold mb-1 w-full">Contact</h2>
                    <h3 className="font-semibold text-lg w-full">Home / Contact</h3>
                </div>
            </div>
            <div className="contact-form relative">

                <div className='overlay-div inset-0 h-full w-full absolute right-0 top-0 bottom-0 left-0 opacity-90 z-[-999]'></div>

                <div className="content flex items-start justify-center gap-14 pt-[6rem] pb-[10rem] px-5 z-[999]">
                    <div className="content-info w-1/2 flex flex-col gap-3">
                        <div className="info flex flex-col gap-5">
                            <h2 className='text-5xl capitalize mb-3 font-bold'>Need additional information?</h2>
                            <p className="text-gray-500 mb-8 w-[67%]">A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                        </div>
                        <div className="contact-info flex flex-col gap-2">
                            <div className="number flex items-center gap-2 mb-2 font-semibold">
                                <Image src={ contactRing } alt='contactRing svg' />
                                <span>(123) 456-7869</span>
                            </div>
                            <div className="mail flex items-center gap-2 mb-2 font-semibold">
                                <Image src={ mail } alt='mail svg' />
                                <span>carrental@gmail.com</span>
                            </div>
                            <div className="mail flex items-center gap-2 mb-2 font-semibold">
                                <Image src={ location } alt='location svg' />
                                <span>New Delhi, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-div w-1/2">
                        <form className="form flex flex-col gap-3">
                            <div className="form-item flex flex-col">
                                <label htmlFor="fullname" className="font-semibold mb-1">
                                    Full Name
                                    <span className="text-[#ff4d30]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    placeholder="eg: Lakshay Kumar"
                                    className='bg-[#f2f2f2] py-3 px-5 mb-3 w-full rounded-md outline-none'
                                />
                            </div>
                            <div className="form-item flex flex-col">
                                <label htmlFor="email" className="font-semibold mb-1">
                                    Email
                                    <span className="text-[#ff4d30]">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="yourmail@example.com"
                                    className='bg-[#f2f2f2] py-3 px-5 mb-3 w-full rounded-md outline-none'
                                />
                            </div>
                            <div className="form-item flex flex-col">
                                <label htmlFor="about" className="font-semibold mb-1">
                                    Tell us about it
                                    <span className="text-[#ff4d30]">*</span>
                                </label>
                                <textarea
                                    name="about"
                                    id="about"
                                    rows="7"
                                    placeholder="Write Here..."
                                    className='bg-[#f2f2f2] py-3 px-5 mb-3 w-full rounded-md outline-none'
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#ff4d30] flex justify-center items-center py-4 rounded-md capitalize text-white shadow-lg gap-3 font-bold text-lg hover:bg-[#ff3e30]"
                            >
                                <Image src={ message } alt="msg svg" />
                                send message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
