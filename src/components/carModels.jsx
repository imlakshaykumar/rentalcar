"use client"

import { carData } from "@/data/carsData";
import Image from "next/image";
import { useState } from "react";

export default function CarModelHome() {

    const [activeCar, setActiveCar] = useState(carData[0])

    const handleCarClick = (car) => {
        setActiveCar(car);
    }

    return (
        <div className="max-w-[1500px] mx-auto pt-[2rem] mb-[8rem]">
            <div className="heading flex flex-col gap-4 items-center justify-center w-[40%] mx-auto text-center">
                <p className="text-xl font-semibold">Vehicle Models</p>
                <p className="text-4xl font-extrabold">Our rental fleet</p>
                <p className="text-gray-500 text-sm">Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>

            <div className="modelDetail-div">
                {
                    carData?.map((item, index) => {
                        return (
                            // TODO: fix this component and FIXME: fix the styling
                            <div key={ index } className="modelDetail ">
                                <ul className="name-list-div">
                                    <li className="list" onClick={ () => handleCarClick(item) }>{ item.name }</li>
                                </ul>
                                <div className="model-additional-info-div grid grid-cols-2">
                                    <div className="model-image-div">
                                        { activeCar === item && (<Image src={ item.image } alt={ item.name } />) }
                                    </div>
                                    <div className="additional-info-div">
                                        <div className="info-div">
                                            { activeCar === item && (
                                                <>
                                                    <div className="info">
                                                        <p>{ item.rent } /rent per day</p>
                                                        <p>
                                                            <span>Model</span>
                                                            <span>{ item.model }</span>
                                                        </p>
                                                        <p>
                                                            <span>mark</span>
                                                            <span>{ item.mark }</span>
                                                        </p>
                                                        <p>
                                                            <span>year</span>
                                                            <span>{ item.year }</span>
                                                        </p>
                                                        <p>
                                                            <span>doors</span>
                                                            <span>{ item.doors }</span>
                                                        </p>
                                                        <p>
                                                            <span>AC</span>
                                                            <span>{ item.AC }</span>
                                                        </p>
                                                        <p>
                                                            <span>Transmission</span>
                                                            <span>{ item.transmission }</span>
                                                        </p>
                                                        <p>
                                                            <span>Fuel</span>
                                                            <span>{ item.fuel }</span>
                                                        </p>
                                                        <div className="reserve-btn">
                                                            <button>Reserve now</button>
                                                        </div>
                                                    </div>
                                                </>
                                            ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
