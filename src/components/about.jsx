/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

import about1 from '../../public/images/about/aboutpage1.png'
import about2 from '../../public/images/about/aboutpage2.png'
import about3 from '../../public/images/about/aboutpage3.png'

export default function AboutComponent() {
    return (
        <div className="mt-[3rem] mb-[10rem]">
            <div className="head-div flex flex-col gap-3 items-center justify-center mb-[5rem]">
                <p className="text-2xl font-semibold">Plan your trip now</p>
                <h2 className="text-5xl font-bold">Quick & easy car rental</h2>
            </div>
            <div className="aboutContent-div grid grid-cols-3 text-center mx-auto gap-5">
                <div className="aboutContent flex flex-col gap-3 items-center justify-center w-[70%] mx-auto">
                    <Image src={ about1 } alt="about image" />
                    <p className=" capitalize text-2xl font-bold">select car</p>
                    <p className="text-gray-500">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className="aboutContent flex flex-col gap-3 items-center justify-center w-[70%] mx-auto">
                    <Image src={ about2 } alt="about image" />
                    <p className=" capitalize text-2xl font-bold">contact operator</p>
                    <p className="text-gray-500">Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className="aboutContent flex flex-col gap-3 items-center justify-center w-[70%] mx-auto">
                    <Image src={ about3 } alt="about image" />
                    <p className=" capitalize text-2xl font-bold">let's drive</p>
                    <p className="text-gray-500">Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}
