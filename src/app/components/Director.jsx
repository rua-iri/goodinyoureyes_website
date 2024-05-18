import Image from "next/image"


export default function Director() {
    

    return (
        <div id="director" className="w-full h-full bg-gray-900">
            <div className="text-white md:columns-2 py-16">
                <div className="flex justify-center items-center">
                    <Image
                        className="inline-block rounded-xl ring-2 ring-white"
                        src='/img/director_profile.jpeg'
                        width={300}
                        height={300}
                        alt="Director Image" />
                </div>
                <div className="mx-16">
                    <h1 className="text-3xl mb-3">
                        The director
                    </h1>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur, itaque repudiandae, modi magni officiis at exercitationem asperiores corrupti debitis excepturi cumque amet porro officia eius perspiciatis facere eum, blanditiis animi vitae. Ad odio ullam magni, sint incidunt dolore possimus deserunt in consequuntur doloremque quod fugiat facilis alias ab, hic nisi nemo consequatur maiores aut voluptatibus. Repellat fuga aspernatur ratione nesciunt amet delectus ut! Ab eius suscipit iste quibusdam unde quasi illum itaque ut, laborum voluptas aspernatur ullam necessitatibus? Deleniti, consequuntur veritatis molestiae dignissimos in nobis magni exercitationem vel dolore ipsa quos vero unde ab eius ducimus qui deserunt aperiam.
                    </div>
                </div>
            </div>
        </div>
    )
}