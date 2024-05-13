import Image from "next/image";


export default function CastCrew() {

    const crewList = [];

    for (let i = 1; i < 9; i++) {
        crewList.push(`/img/crew${i}.jpeg`);
    }


    return (
        <div className="w-full h-screen bg-lime-200 bg-cover bg-center">
            <div>
                <h1 className="text-xl">
                    Crew
                </h1>
            </div>
            <div className="flex overflow-scroll ms-8">
                {
                    crewList.map((crew, index) => (
                        <>
                            <Image
                                className="rounded-md"
                                src={crew}
                                height={300}
                                width={300}
                                alt={`Crew Image ${index}`}
                                key={index} />
                            <div>
                                Crew {index}
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}