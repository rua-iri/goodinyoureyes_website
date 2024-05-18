"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import SectionHeader from "./SectionHeader"


function getInstaPost(postType, setPost) {

    fetch(`/api/instagram?postType=${postType}`)
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data)

            if (postType == "main") {
                setPost(data.href)
            } else if (postType == "random") {
                setPost(data.href)
            }
        })

}


export default function Instagram() {

    const [mainPostHref, setMainPostHref] = useState("/img/thumb-placeholder.webp");
    const [randPostsHref, setRandPostsHref] = useState(
        [
            "/img/thumb-placeholder.webp",
            "/img/thumb-placeholder.webp",
            "/img/thumb-placeholder.webp",
            "/img/thumb-placeholder.webp"
        ]
    );


    useEffect(() => {
        getInstaPost("main", setMainPostHref);
        getInstaPost("random", setRandPostsHref);
    }, [])


    const instaList = [];

    for (let i = 1; i < 5; i++) {
        instaList.push(`/img/instagram${i}.jpeg`);
    }

    return (
        <div id="instagram" className="w-full h-full pb-24 bg-amber-100">
            <SectionHeader title={"Instagram"} />
            <div className="mx-10 md:grid md:grid-cols-2 gap-24">
                <a
                    className=""
                    href="https://www.instagram.com/goodinyoureyes_thefilm/"
                    target="_blank"
                >
                    <Image
                        className="my-3 inline-block rounded-xl ring-2 ring-white"
                        src={mainPostHref}
                        width={400}
                        height={400}
                        alt="Instagram Feed Image"
                    />
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, cum nesciunt, nam iste at quasi commodi, earum eum corporis voluptatum nobis sed rerum neque doloremque.
                    </div>
                </a>
                <div className="my-3 grid grid-cols-2 place-items-center gap-3">
                    {
                        randPostsHref.map((post, index) => (
                            <a href="https://www.instagram.com/goodinyoureyes_thefilm/" target="_blank" key={index}>
                                <Image
                                    className="rounded-md"
                                    src={post}
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