import Image from "next/image"
import aboutMain from '../../../public/images/about/about-main.jpg'
import stat1 from '../../../public/images/about/1.png'
import stat2 from '../../../public/images/about/2.png'
import stat3 from '../../../public/images/about/3.png'
import AboutComponent from "@/components/about"

export default function About() {
    return (
        <>

            <div className="contact-heading-div flex flex-col h-[25rem] items-start justify-center">
                <h2 className=" text-4xl font-bold mb-1 w-full">About</h2>
                <h3 className="font-semibold text-lg w-full">Home / About</h3>

            </div>
            <div className="about-content flex justify-center mx-auto w-fit items-center pt-[5rem] pb-[10rem]">
                <div className="image-div w-fit block">
                    <Image src={ aboutMain } alt="about-main image" className=" object-contain" />
                </div>
                <div className="content w-1/2 flex flex-col gap-5 px-[5rem]">
                    <p className="capitalize text-lg font-semibold">about company</p>
                    <p className="text-6xl font-bold">You start the engine and your adventure begins</p>
                    <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                    <div className="stats-div flex items-center justify-between">
                        <div className="stat flex flex-col gap-2 items-center">
                            <Image src={ stat1 } alt="stat1" />
                            <div className="content flex items-end gap-2">
                                <span className="text-4xl font-bold">20</span>
                                <p>car <br /> types</p>
                            </div>
                        </div>
                        <div className="stat flex flex-col gap-2 items-center">
                            <Image src={ stat2 } alt="stat1" />
                            <div className="content flex items-end gap-2">
                                <span className="text-4xl font-bold">85</span>
                                <p>rental <br /> outlets</p>
                            </div>
                        </div>
                        <div className="stat flex flex-col gap-2 items-center">
                            <Image src={ stat3 } alt="stat1" />
                            <div className="content flex items-end gap-2">
                                <span className="text-4xl font-bold">75</span>
                                <p>repair <br /> shops</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutComponent />
        </>
    )
}
