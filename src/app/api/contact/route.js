export const dynamic = 'force-dynamic' // defaults to auto
import { Resend } from "resend";

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

    // console.log(recaptchaData)

    return recaptchaData.success
}


async function sendEmail(emailData) {

    const emailHTML = `<h3>email from ${emailData.name} (${emailData.email})</h3><p>${emailData.message}</p>`


    const resend = new Resend(process.env.RESEND_API_KEY);
    const {data, error} = await resend.emails.send({
        from: process.env.FROM_EMAIL_ADDRESS,
        to: [process.env.TO_EMAIL_ADDRESS],
        subject: "Good In Your Eyes Email",
        html: emailHTML
    })

    // console.log(data)
    // console.log(error)
}


export async function POST(request) {

    try {

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


        // remove captcha from body
        delete requestBody.gRecaptchaToken;

        const resendResponse = await sendEmail(requestBody);

        responseBody = {
            "status": "success",
            "message": "Message Sent Successfully"
        }


        return new Response(
            JSON.stringify(responseBody),
            {
                status: statusCode,
            })

    } catch (error) {
        console.log(error);

        return new Response(
            JSON.stringify({
                "status": "failure",
                "error": "Internal Server Error"
            }),
            {
                status: statusCode,
            })
    }
}