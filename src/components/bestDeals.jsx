/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

import bestDealHero from '../../public/images/home/dealsMain.png'
import bestDeal1 from '../../public/images/home/home1.png'
import bestDeal2 from '../../public/images/home/home2.png'
import bestDeal3 from '../../public/images/home/home3.png'

export default function BestDeals() {
    return (
        <div className="w-full">
            <div className="save-div py-16 bg-[#2d2d2d] text-white flex flex-col gap-4 items-center justify-center">
                <h2 className="text-6xl font-bold">Save big with our cheap car rental!</h2>
                <p className="text-2xl">Top Airports. Local Suppliers. <span className="text-[#ff4d30]">24/7</span> Support.</p>
            </div>
            <div className="save-content-div max-w-[1500px] mx-auto my-10 pt-8 pb-[8rem]">
                <Image src={ bestDealHero } alt="deal hero" className="mx-auto" />
                <div className="content flex items-start justify-around gap-5">
                    <div className="content-info flex flex-col gap-3 max-w-[35rem]">
                        <p className=" capitalize text-xl font-semibold mb-1">why choose us</p>
                        <p className="text-5xl font-bold mb-5">Best valued deals you will ever find</p>
                        <p className="text-gray-500 mb-5">Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                        <button className="bg-[#ff4d30] text-lg w-fit text-white py-4 px-8 font-semibold shadow-2xl rounded-sm">Find Details</button>
                    </div>
                    <div className="deals max-w-[35rem] flex flex-col gap-10 items-center justify-center">
                        <div className="deal flex items-center gap-5">
                            <Image src={ bestDeal1 } alt="deal1" />
                            <div className="info flex flex-col gap-2">
                                <p className="text-2xl font-bold">Cross Country Drive</p>
                                <p className="text-gray-500">Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                            </div>
                        </div>
                        <div className="deal flex items-center gap-5">
                            <Image src={ bestDeal2 } alt="deal2" />
                            <div className="info flex flex-col gap-2">
                                <p className="text-2xl font-bold">All Inclusive Pricing</p>
                                <p className="text-gray-500">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                            </div>
                        </div>
                        <div className="deal flex items-center gap-5">
                            <Image src={ bestDeal3 } alt="deal3" />
                            <div className="info flex flex-col gap-2">
                                <p className="text-2xl font-bold">No Hidden Charges</p>
                                <p className="text-gray-500">Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
