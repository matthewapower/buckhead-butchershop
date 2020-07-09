import React, { useState } from "react"

import TextInput from "./textInput"

export default function Form(props) {
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const [submission, setSubmission] = useState({})

  const handleChange = e => {
    setSubmission({ ...submission, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    const form = e.target
    console.log("starting the submit")
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...submission,
      }),
    })
      .then(() => console.log("halfway through"))
      .catch(error => alert(error))
    e.preventDefault()
    console.log("ending the submit")
  }

  return (
    <form
      name="subscribeForm"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      id="subscribe-form"
      className="flex flex-col w-full"
    >
      <input type="hidden" name="form-name" value="subscribeForm" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="grid grid-cols-2 gap-4 w-full mb-12">
        <TextInput change={handleChange} name={"name"} type="text" />
        <TextInput change={handleChange} name={"email"} type="email" />
      </div>
      <label htmlFor="newsletter" className="mb-2">
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          onChange={handleChange}
          className="mr-4"
        />
        Please sign me up for Buckhead Butcher Shop’s monthly newsletter.
      </label>
      <label htmlFor="promotions" className="mb-8">
        <input
          type="checkbox"
          name="promotions"
          id="promotions"
          className="mr-4"
          onChange={handleChange}
        />
        Please sign me up for Buckhead Butcher Shop’s exclusive sales and
        promotional notices.
      </label>
      <button className="font-display uppercase bg-secondary text-white mx-auto inline-block py-2 px-12">
        Submit
      </button>
    </form>
  )
}
