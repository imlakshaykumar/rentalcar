import Image from "next/image";

import googleapp from '../../public/googleapp.svg'
import appstore from '../../public/appstore.svg'

export default function Download() {
    return (
        <div className="download-div w-full h-auto bg-[#f8f8f8]">
            <div className="download-content max-w-[1500px] mx-auto w-full">
                <div className="content w-1/2 flex flex-col gap-10 py-[6rem]">
                    <p className="text-5xl font-bold">Download our app to get most out of it</p>
                    <p className="text-lg text-gray-500">Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                    <div className="download-icons flex gap-5 items-center w-full">
                        <Image src={ googleapp } alt="google app" />
                        <Image src={ appstore } alt="app store" />
                    </div>
                </div>
            </div>
        </div>
    )

}
