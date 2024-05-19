export const dynamic = 'force-dynamic' // defaults to auto

async function validateCaptcha(gRecaptchaToken) {

    const validateURL = process.env.RECAPTCHA_VALIDATE_URL + new URLSearchParams(
        {
            "secret": process.env.RECAPCHA_SECRET_KEY,
            "response": gRecaptchaToken,
        }
    );

    const recaptchaResponse = await fetch(
        validateURL,
        { method: "POST" }
    )
    const recaptchaData = await recaptchaResponse.json();

    console.log(recaptchaData)

    return recaptchaData.success
}

export async function POST(request) {


    let statusCode = 200;
    let responseBody = {};

    const requestBody = await request.json();

    // console.log(requestBody)

    const isCaptchaValid = await validateCaptcha(requestBody.gRecaptchaToken);


    // return if captcha is invalid
    if (!isCaptchaValid) {
        statusCode = 403;
        responseBody = {
            "status": "failure",
            "error": "Invalid Captcha"
        }

        return new Response(
            JSON.stringify(responseBody),
            {
                status: statusCode,
            })
    }

    





    return new Response(
        JSON.stringify(responseBody),
        {
            status: statusCode,
        })
}