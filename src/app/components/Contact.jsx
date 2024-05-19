"use client"
import { useFormik } from "formik"
import SectionHeader from "./SectionHeader";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { POST } from "../api/contact/route";


export default function Contact() {

    const { executeRecaptcha } = useGoogleReCaptcha();

    async function submitForm(values) {

        if (!executeRecaptcha) {
            alert("Captcha not ready")
            return
        }

        const recaptchaToken = await executeRecaptcha("test");
        values.gRecaptchaToken = recaptchaToken;

        console.log(values)

        const contactResponse = await fetch(
            "/api/contact",
            {
                body: values,
                method: "POST"
            }
        )

        const contactData = await contactResponse.json();

        console.log(contactData)


    }



    const formik = useFormik({
        initialValues: {
            // "name": "asdfaadsf",
            // "email": "asdf@example.com",
            // "message": "this is a test message",
            "name": "",
            "email": "",
            "message": "",
        },
        onSubmit: values => {
            submitForm(values);
        }
    })

    return (
        <div id="contact" className="w-full h-screen bg-cyan-50">
            <SectionHeader title={"Contact"} />
            <div className="mx-10">
                <p>
                    If you would like to contact...
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla eius ullam expedita quaerat asperiores culpa ut, vitae libero inventore?
                </p>
            </div>

            <form className="m-10" onSubmit={formik.handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5 my-8">
                    <div>
                        <label className="input-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="txt-input"
                            type="name"
                            name="name"
                            id="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div>
                        <label className="input-label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="txt-input"
                            type="email"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                </div>
                <div className="my-8">
                    <label className="input-label" htmlFor="email">
                        Message
                    </label>
                    <textarea
                        className="txt-input"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        name="message"
                        id="message"
                        rows={4}
                    >
                    </textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}