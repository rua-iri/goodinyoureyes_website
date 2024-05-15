"use client"
import { useFormik } from "formik"


export default function Contact() {

    const formik = useFormik({
        initialValues: {
            "name": "",
            "email": "",
            "message": "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <div id="contact" className="w-full h-screen bg-jo-sky">
            <div className="mx-10">
                <h1 className="text-3xl py-14">
                    Contact
                </h1>
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
                        className="bg-gray-800 hover:bg-indigo-900 focus:ring-4 focus:outline-none focus:ring-indigo-400 rounded-lg text-sm px-6 py-3 text-white text-center"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}