export const dynamic = 'force-dynamic' // defaults to auto

async function getMainPost() {
    // TODO fetch newest post from instagram

    const apiurl = "https://graph.instagram.com/me/media?" + new URLSearchParams({ "fields": "id", "access_token": process.env.INSTAGRAM_API_KEY })

    const allPostsResponse = await fetch(apiurl)
    const allPostsData = await allPostsResponse.json();
    const recentPostID = await allPostsData.data[0].id;


    const recentPostResponse = await fetch(
        `https://graph.instagram.com/${recentPostID}?`
        + new URLSearchParams(
            {
                "fields": "id,media_type,media_url,username,timestamp,caption",
                "access_token": process.env.INSTAGRAM_API_KEY
            }
        ));
    const recentPostData = await recentPostResponse.json();

    // console.log(recentPostData)


    return {
        "status": "success",
        "href": recentPostData.media_url,
        "caption": recentPostData.caption,
    }
}

async function getRandomPost() {

    const apiurl = "https://graph.instagram.com/me/media?" + new URLSearchParams({ "fields": "id", "access_token": process.env.INSTAGRAM_API_KEY, "since": 1714176000 })

    const postsArray = [];
    const allPostsResponse = await fetch(apiurl)
    const allPostsData = await allPostsResponse.json();

    // get four random posts
    for (let i = 0; i < 4; i++) {
        const postID = allPostsData.data.splice(Math.floor(Math.random() * allPostsData.data.length), 1)[0].id
        const randomPostResponse = await fetch(
            `https://graph.instagram.com/${postID}?`
            + new URLSearchParams(
                {
                    "fields": "id,media_type,media_url,username,timestamp,thumbnail_url",
                    "access_token": process.env.INSTAGRAM_API_KEY
                }
            ));
        const randomPostData = await randomPostResponse.json();

        // console.log(randomPostData)
        if (randomPostData.media_type == 'IMAGE') {
            postsArray.push(randomPostData.media_url)
        } else if (randomPostData.media_type == 'VIDEO') {
            postsArray.push(randomPostData.thumbnail_url)
        }
    }


    // console.log(postsArray)

    return {
        "status": "success",
        "href": postsArray
    }
}


export async function GET(request) {

    const urlParams = request.nextUrl.searchParams
    let responseStatus = 500;
    let responseBody = {};


    // check for which type of post to return
    if (urlParams.get("postType") == "main") {
        responseStatus = 200;
        responseBody = await getMainPost();
    } else if (urlParams.get("postType") == "random") {
        responseStatus = 200;
        responseBody = await getRandomPost();
    } else {
        responseStatus = 403;
        responseBody = {
            "status": "failure",
            "error": "Invalid Route"
        }
    }


    return new Response(
        JSON.stringify(responseBody),
        {
            status: responseStatus,
        }
    )
}