"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";


export default function RecaptchaWrapper({children}) {

    const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

    return (
        <GoogleReCaptchaProvider
        reCaptchaKey={reCaptchaKey}
        useEnterprise={true}
        >
            {children}
        </GoogleReCaptchaProvider>
    )

}
