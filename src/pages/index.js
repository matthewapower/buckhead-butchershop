import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="h-screen"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
      }}
    />
    <section>
      <div className="bg-secondary text-white max-w-4xl p-12 transform -translate-y-1/2">
        <h1 className="font-display text-4xl tracking-wider">
          DEFINING THE NEW TRADITION.
        </h1>
        <p className="font-sans text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
    <section id="menu">
      <div className="grid w-full grid-cols-5 h-56 gap-4 container mx-auto">
        <div
          style={{
            background:
              "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
          }}
        />
        <div
          style={{
            background:
              "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
          }}
        />
        <div
          style={{
            background:
              "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
          }}
        />
        <div
          style={{
            background:
              "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
          }}
        />
        <div
          style={{
            background:
              "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
          }}
        />
      </div>
      <div className="container mx-auto my-16 flex flex-col items-center justify-center">
        <h2 className="text-center font-display text-4xl tracking-wider">
          QUALITY PROTEINS. ATLANTA BORN.
        </h2>
        <p className="max-w-3xl mx-auto font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a
          href="#"
          className="font-display uppercase bg-secondary text-white mx-auto inline-block py-2 px-12"
        >
          View Our Menu
        </a>
      </div>
    </section>
    <section
      className="py-20 bg-black"
      // style={{
      //   background:
      //     "url(https://images.unsplash.com/photo-1592565276465-eb37e77054a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80) center center/cover",
      // }}
    >
      <div className="container mx-auto my-16 flex flex-col items-center justify-center max-w-3xl text-white">
        <h2 className="text-center font-display text-4xl tracking-wider">
          HERE TO SERVE YOU
        </h2>
        <p className="mx-auto font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Form />
      </div>
    </section>
  </Layout>
)

export default IndexPage
