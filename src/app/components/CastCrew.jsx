"use client"
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useState } from "react";


export default function CastCrew() {

    const [activeCrew, setActiveCrew] = useState(null);

    const crewList = [];

    for (let i = 1; i < 10; i++) {
        crewList.push(`/img/crew${i}.jpeg`);
    }

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
            <div className="flex overflow-scroll ms-8 gap-6">
                {
                    crewList.map((crew, index) => (
                        <figure
                            className="relative transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
                            key={index}
                            onClick={() => handleActiveChange(index)}
                        >
                            <Image
                                className="rounded-md max-w-max"
                                src={crew}
                                height={300}
                                width={300}
                                alt={`Crew Image ${index + 1}`}
                            />
                            <figcaption className="absolute px-4 py-1.5 w-full text-lg bg-slate-800 opacity-80 text-white bottom-0">
                                Crew {index + 1}
                                {/* <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque recusandae animi accusamus, quod blanditiis praesentium omnis placeat quos molestiae voluptatibus nemo sapiente. Quam ipsam qui neque commodi provident sapiente.
                                </p> */}

                                {index === activeCrew
                                    ? <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque recusandae animi accusamus, quod blanditiis praesentium omnis placeat quos molestiae voluptatibus nemo sapiente. Quam ipsam qui neque commodi provident sapiente.
                                    </p>
                                    : ""}

                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        </div>
    )
}