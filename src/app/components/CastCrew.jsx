"use client"
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { crewList } from "./crewList";
import { FaInstagram } from "react-icons/fa";


export default function CastCrew() {

    const [activeCrew, setActiveCrew] = useState(null);

    // const crewList = [];

    // for (let i = 1; i < 10; i++) {
    //     crewList.push({href: `/img/crew${i}.jpeg`, bio: `The bio for crew member number ${i}. Lorem ipsum dolor sit amet.`});
    // }

    function handleActiveChange(crewName) {
        if (crewName == activeCrew) {
            setActiveCrew(null)
        } else {
            setActiveCrew(crewName);
        }
    }


    return (
        <div id="crew" className="w-full h-full pb-24 bg-lime-100">
            <SectionHeader title={"Crew"} />
            <div className="flex overflow-scroll md:mx-16 gap-6">
                {
                    crewList.map((crew, index) => (
                        <figure
                            className="relative transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
                            key={index}
                            onClick={() => handleActiveChange(index)}
                        >
                            <Image
                                className="rounded-md max-w-max"
                                src={crew.imgSrc}
                                height={300}
                                width={300}
                                alt={`Crew Image ${index + 1}`}
                            />
                            <figcaption className="absolute px-4 py-1.5 w-full text-lg bg-slate-800 opacity-80 text-white bottom-0">
                                <p className="font-bold">
                                    {crew.name}
                                </p>

                                {index === activeCrew
                                    ? <>
                                        <div className="py-3">
                                            {crew.bio}
                                        </div>
                                        <div className="py-2 text-xl font-bold">
                                            <a href={crew.linkHref} target="_blank">
                                                <FaInstagram className="w-10 h-10 inline me-3" />
                                                Instagram
                                            </a>
                                        </div>
                                    </>
                                    : ""}

                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        </div>
    )
}