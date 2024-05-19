import Image from "next/image"
import { FaInstagram } from "react-icons/fa"


export default function Director() {


    return (
        <div id="director" className="w-full h-full bg-gray-900">
            <div className="text-white md:grid md:grid-cols-2 py-16">
                <div className="flex justify-center items-center">
                    <Image
                        className="inline-block rounded-xl ring-2 ring-white w-auto"
                        src='/img/director_profile.jpeg'
                        width={300}
                        height={300}
                        alt="Director Image" />
                </div>
                <div className="mx-16 my-10 md:my-0">
                    <h1 className="text-3xl mb-5">
                        The director
                    </h1>
                    <div>
                        <ul className="list-disc">
                            <li>Harvey Planer</li>
                            <li>I like cake for breakfast</li>
                        </ul>
                        <div className="my-10 text-xl font-bold">
                            <a href={"https://www.instagram.com/harveyplaner"} target="_blank">
                                <FaInstagram className="w-10 h-10 inline me-3" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}