import Image from 'next/image'

import contactSVG from '../../public/contact.svg'
import contactRing from '../../public/contactRing.svg'
import mail from '../../public/mail.svg'

export default function Footer() {
    return (
        <div className="footer-div relative">
            <div className="book-contact-div relative">
                <div className='overlay-div inset-0 bg-[#2d2d2d] h-full w-full absolute right-0 top-0 bottom-0 left-0 opacity-90'></div>
                <div className="content flex items-center justify-center gap-14 h-[11rem] relative">
                    <h2 className='text-white text-3xl font-bold'>
                        Book a car by getting in touch with us
                    </h2>
                    <span className='text-[#ff4d30] flex items-center gap-3 text-3xl font-bold'>
                        <Image src={ contactSVG } alt="contact svg" />
                        <p>(123) 456-7869</p>
                    </span>
                </div>
            </div>
            <div className="footer-links-div grid grid-cols-4 lg:max-w-[1500px] w-full mx-auto gap-[5rem] py-[6rem]">
                <div className="info-contact-div">
                    <div className="info">
                        <h2 className='text-2xl capitalize mb-3'>
                            <span className='uppercase font-bold'>car </span>
                            rental
                        </h2>
                        <p className='text-gray-500 mb-8'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    </div>
                    <div className="contact">
                        <div className="number flex items-center gap-2 mb-2 font-semibold">
                            <Image src={ contactRing } alt='contactRing svg' />
                            <span>(123) 456-7869</span>
                        </div>
                        <div className="mail flex items-center gap-2 mb-2 font-semibold">
                            <Image src={ mail } alt='mail svg' />
                            <span>carrental@gmail.com</span>
                        </div>
                        <div className="design">
                            <span className='text-sm italic'>Design by Someone</span>
                        </div>
                    </div>
                </div>
                <div className="links-div">
                    <h2 className='text-2xl uppercase font-bold mb-3'>company</h2>
                    <ul className="links flex flex-col gap-2">
                        <li className="link hover:text-[#ff4d30] cursor-pointer w-fit">New Delhi</li>
                        <li className="link hover:text-[#ff4d30] cursor-pointer w-fit">Careers</li>
                        <li className="link hover:text-[#ff4d30] cursor-pointer w-fit">Mobile</li>
                        <li className="link hover:text-[#ff4d30] cursor-pointer w-fit">Blog</li>
                        <li className="link hover:text-[#ff4d30] cursor-pointer w-fit">How we work</li>
                    </ul>
                </div>
                <div className="timings div">
                    <h2 className='text-2xl uppercase font-bold mb-3'>working hours</h2>
                    <ul className="time-list flex flex-col gap-2">
                        <li>Mon - Fri: 9:00 AM - 9:00 PM</li>
                        <li>Sat:  9:00 AM - 18:00 PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
                <div className="subscribe-div">
                    <h2 className='text-2xl uppercase font-bold mb-3'>subscription</h2>
                    <p className='mb-3'>Subscribe your Email address for latest news & updates.</p>
                    <form className="subscribe-form">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter Email Address'
                            className='bg-gray-200 py-3 px-5 mb-3 text-sm w-full rounded-sm'
                        />
                        <button
                            type='submit'
                            className='w-full bg-[#ff4d30] text-white shadow-lg py-3 font-semibold rounded-sm hover:bg-[#ff3e30]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
