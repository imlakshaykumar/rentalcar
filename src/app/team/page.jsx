import Image from "next/image";

import { teamData } from "@/data/teamData";

export default function Team() {
    return (
        <div className="max-w-[1500px] mx-auto">
            <div className="contact-heading-div flex flex-col h-[25rem] items-start justify-center">
                <h2 className=" text-4xl font-bold mb-1 w-full">Out Team</h2>
                <h3 className="font-semibold text-lg w-full">Home / Our Team</h3>
            </div>

            <div className="team-content-div grid grid-cols-3 gap-12 w-fit mx-auto mt-[3rem] mb-[6rem]">
                {
                    teamData?.map((item, index) => {
                        return (
                            <>
                                <div key={ index } className="team w-fit flex flex-col items-center justify-center shadow-xl  ">
                                    <Image src={ item.image } alt="team member" className="bg-[#f2f2f2]" />
                                    <div className="team-info flex flex-col items-center justify-center capitalize py-5">
                                        <p className="text-xl font-bold">{ item.name }</p>
                                        <p className="text-sm text-gray-500">{ item.profile }</p>
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
