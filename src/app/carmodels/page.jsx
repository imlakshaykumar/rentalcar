import Image from "next/image";

import { carData } from "@/data/carsData";
// import fillstar from '../../../public/fillstar.svg'
import emptystar from '../../../public/emptystar.svg'
import carSVG from '../../../public/car.svg'

export default function CarModel() {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="contact-heading-div flex flex-col h-[25rem] items-start justify-center">
                <h2 className=" text-4xl font-bold mb-1 w-full">Vehicle Models</h2>
                <h3 className="font-semibold text-lg w-full">Home / Vehicle Models</h3>
            </div>

            <div className="car-content-div">

                <div className="content grid grid-cols-3 gap-y-[5rem] gap-x-[3rem] w-fit mx-auto mt-[5rem] mb-[10rem]">
                    {
                        carData?.map((item, index) => {
                            return (
                                <div key={ index } className="car-content bg-[#f2f2f2] shadow-xl rounded-md">
                                    <Image src={ item.image } alt="Car Image" className="block w-full h-[15rem] object-cover" />
                                    <div className="car-data-div py-4 px-8 capitalize">
                                        <div className="car-data flex items-center justify-between py-4">
                                            <div className="name_rating flex flex-col gap-2">
                                                <p className="text-xl font-bold">{ item.name }</p>
                                                <div className="rating flex">
                                                    <Image src={ emptystar } alt="star" />
                                                    <Image src={ emptystar } alt="star" />
                                                    <Image src={ emptystar } alt="star" />
                                                    <Image src={ emptystar } alt="star" />
                                                    <Image src={ emptystar } alt="star" />
                                                </div>
                                            </div>
                                            <div className="rent flex flex-col gap-1">
                                                <p className="text-xl font-bold">{ item.rent }</p>
                                                <p>per day</p>
                                            </div>
                                        </div>
                                        <div className="additional-info grid grid-cols-2 gap-x-[10rem] gap-y-2 py-4 mb-5">
                                            <div className="info flex gap-1 items-center">
                                                <Image src={ carSVG } alt="carSVG" width={ 20 } />
                                                <p className="w-full">{ item.mark }</p>
                                            </div>
                                            <div className="info flex gap-2 items-center">
                                                <p className="w-full text-right">{ item.doors }</p>
                                                <Image src={ carSVG } alt="carSVG" width={ 20 } />
                                            </div>
                                            <div className="info flex gap-2 items-center">
                                                <Image src={ carSVG } alt="carSVG" width={ 20 } />
                                                <p className="w-full">{ item.transmission }</p>
                                            </div>
                                            <div className="info flex gap-2 items-center">
                                                <p className="w-full text-right">{ item.fuel }</p>
                                                <Image src={ carSVG } alt="carSVG" width={ 20 } />
                                            </div>
                                        </div>
                                        <div className="book-btn-div border-t border-gray-300 w-full text-center py-5">
                                            <button className="text-xl font-semibold capitalize bg-[#ff4d30] w-full py-4 rounded-md text-white shadow-md">book ride</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
