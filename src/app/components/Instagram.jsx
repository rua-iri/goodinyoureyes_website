"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import SectionHeader from "./SectionHeader"


function getInstaPost(postType, setPost, setCaption) {

    fetch(`/api/instagram?postType=${postType}`)
        .then((response) => { return response.json() })
        .then((data) => {
            // console.log(data)

            if (postType == "main") {
                setPost(data.href)
                setCaption(data.caption)
            } else if (postType == "random") {
                setPost(data.href)
            }
        })

}


export default function Instagram() {

    const [mainPostHref, setMainPostHref] = useState("/img/thumb-placeholder.webp");
    const [mainPostCaption, setMainPostCaption] = useState("");
    const [randPostsHref, setRandPostsHref] = useState(
        [
            "/img/thumb-placeholder.webp",
            "/img/thumb-placeholder.webp",
            "/img/thumb-placeholder.webp",
            "/img/thumb-placeholder.webp"
        ]
    );


    useEffect(() => {
        getInstaPost("main", setMainPostHref, setMainPostCaption);
        getInstaPost("random", setRandPostsHref, setMainPostCaption);
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
                    className="flex flex-col justify-center items-center"
                    href="https://www.instagram.com/goodinyoureyes_thefilm/"
                    target="_blank"
                >
                    <img
                        className="my-3 inline-block rounded-xl ring-2 ring-white"
                        src={mainPostHref}
                        width={400}
                        height={400}
                        alt="Instagram Feed Image"
                    />
                    <div className="bg-white rounded-md p-3">
                        {mainPostCaption}
                    </div>
                </a>
                <div className="my-3 flex flex-col justify-center items-center md:grid md:grid-cols-2 place-items-center">
                    {
                        randPostsHref.map((post, index) => (
                            <a href="https://www.instagram.com/goodinyoureyes_thefilm/" target="_blank" key={index}>
                                <img
                                    className="rounded-md h-200 w-auto"
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