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
    console.log(submission)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...submission,
      }),
    })
      .then(() => props.close())
      .catch(error => alert(error))
  }

  return (
    <form
      action="#"
      name="subscribeForm"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      id="subscribe-form"
    >
      <input type="hidden" name="form-name" value="subscribeForm" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <TextInput change={handleChange} name={"name"} type="text" />
      <TextInput change={handleChange} name={"email"} type="email" />
      <label htmlFor="newsletter">
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          onChange={handleChange}
        />
        Please sign me up for Buckhead Butcher Shop’s monthly newsletter.
      </label>
      <label htmlFor="promotions">
        <input
          type="checkbox"
          name="promotions"
          id="promotions"
          onChange={handleChange}
        />
        Please sign me up for Buckhead Butcher Shop’s monthly newsletter.
      </label>
      <input
        type="submit"
        value="Submit"
        className="font-display uppercase bg-secondary text-white mx-auto inline-block py-2 px-12"
      />
    </form>
  )
}
