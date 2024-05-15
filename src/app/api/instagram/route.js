export const dynamic = 'force-dynamic' // defaults to auto

const getMainPost = () => {
    // TODO fetch newest post from instagram

    return {
        "status": "success",
        "href": "/img/instagram1.jpeg"
    }
}

const getRandomPost = () => {

    return {
        "status": "success",
        "href": [
            "/img/instagram1.jpeg",
            "/img/instagram2.jpeg",
            "/img/instagram3.jpeg",
            "/img/instagram4.jpeg",
        ]
    }
}


export async function GET(request) {

    const urlParams = request.nextUrl.searchParams
    let responseStatus = 403;
    let responseBody = {};


    console.log(urlParams)
    console.log(urlParams.get("main"))

    // check for which type of post to return
    if (urlParams.get("postType") == "main") {
        responseStatus = 200;
        responseBody = getMainPost();
    } else if (urlParams.get("postType") == "random") {
        responseStatus = 200;
        responseBody = getRandomPost();
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