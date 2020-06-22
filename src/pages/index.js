import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = ({ data }) => {
  const content = data.allContentfulHomePage.nodes[0]
  return (
    <Layout>
      <SEO title="Home" />
      <section
        className="h-screen"
        style={{
          background: `url(${content.mainBackground.fluid.src}) center center/cover`,
        }}
      />
      <section>
        <div className="bg-secondary text-white max-w-4xl p-12 transform -translate-y-1/2">
          <h1 className="font-display text-4xl tracking-wider">
            {content.heroTitle}
          </h1>
          <p className="font-sans text-lg">
            {content.heroParagraph.internal.content}
          </p>
        </div>
      </section>
      <section id="menu">
        <div className="grid w-full grid-cols-5 h-56 gap-4 container mx-auto">
          {content.sliderImages.map((s, i) => (
            <div
              key={i}
              style={{
                background: `url(${s.fluid.src}) center center/cover`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto my-16 flex flex-col items-center justify-center">
          <h2 className="text-center font-display text-4xl tracking-wider">
            {content.sliderTitle}
          </h2>
          <p className="max-w-3xl mx-auto font-sans">
            {content.sliderDescription.sliderDescription}
          </p>
          <a
            href={content.menu.file.url}
            className="font-display uppercase bg-secondary text-white mx-auto inline-block py-2 px-12"
          >
            View Our Menu
          </a>
        </div>
      </section>
      <section
        className="py-20 relative"
        style={{
          background: `url(${content.contactBackground.fluid.src}) center center/cover`,
        }}
      >
        <div className="container mx-auto my-16 flex flex-col items-center justify-center max-w-3xl text-white">
          <h2 className="text-center font-display text-4xl tracking-wider">
            {content.contactTitle}
          </h2>
          <p className="mx-auto font-sans">
            {content.contactDescription.contactDescription}
          </p>
          <Form />
        </div>
        <img
          className="absolute bottom-0 right-0 mb-0"
          src={content.contactAccentImage.fluid.src}
          alt="Buckhead Butcher Shop"
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulHomePage(limit: 1) {
      nodes {
        mainBackground {
          fluid {
            src
          }
        }
        heroTitle
        heroParagraph {
          internal {
            content
          }
        }
        sliderImages {
          fluid {
            src
          }
        }
        sliderTitle
        sliderDescription {
          sliderDescription
        }
        menu {
          file {
            url
          }
        }
        contactTitle
        contactDescription {
          contactDescription
        }
        contactBackground {
          fluid {
            src
          }
        }
        contactAccentImage {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default IndexPage
