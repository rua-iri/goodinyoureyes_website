import Image from "next/image";


export default function CastCrew() {

    const crewList = [];

    for (let i = 1; i < 10; i++) {
        crewList.push(`/img/crew${i}.jpeg`);
    }


    return (
        <div id="crew" className="w-full h-full pb-24 bg-jo-green">
            <div className="mx-10">
                <h1 className="text-3xl py-14">
                    Crew
                </h1>
            </div>
            <div className="flex overflow-scroll ms-8 gap-6">
                {
                    crewList.map((crew, index) => (
                        <figure className="relative transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer" key={index}>
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
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
        </div>
    )
}