import Image from "next/image"


export default function Instagram() {

    const instaList = [];

    for (let i = 1; i < 5; i++) {
        instaList.push(`/img/instagram${i}.jpeg`);
    }

    return (
        <div id="instagram" className="w-full h-full pb-24 bg-jo-sand">
            <div className="mx-10">
                <h1 className="text-3xl py-14">
                    Instagram
                </h1>
            </div>
            <div className="mx-10 md:columns-2 gap-24">
                <a
                    className=""
                    href="https://www.instagram.com/goodinyoureyes_thefilm/"
                    target="_blank"
                >
                    <Image
                        className="my-3 inline-block rounded-xl ring-2 ring-white"
                        src={'/img/instagram1.jpeg'}
                        width={400}
                        height={400}
                        alt="Instagram Feed Image"
                    />
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, cum nesciunt, nam iste at quasi commodi, earum eum corporis voluptatum nobis sed rerum neque doloremque.
                    </div>
                </a>
                <div className="my-3 grid grid-cols-2 gap-3">
                    {
                        instaList.map((crew, index) => (
                            <a href="https://www.instagram.com/goodinyoureyes_thefilm/" target="_blank" key={index}>
                                <Image
                                    className="rounded-md"
                                    src={crew}
                                    height={200}
                                    width={200}
                                    alt={`Crew Image ${index + 1}`}

                                />
                            </a>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}