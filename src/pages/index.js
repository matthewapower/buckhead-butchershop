import React, { useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import logo from "../images/bbs-logo.png"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Glide from "react-glidejs"

import "react-glidejs/dist/index.css"

const IndexPage = ({ data }) => {
  const content = data.allContentfulHomePage.nodes[0]
  const gliderRef = useRef(null)
  let parallax
  return (
    <Layout>
      <SEO title="Home" />
      <Parallax pages={2.4} ref={ref => (parallax = ref)} className="bg-white">
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.2}
          style={{
            background: `url(${content.mainBackground.fluid.src}) center center/cover`,
          }}
        >
          <section
            className="pt-16 h-full"
            style={{
              background: `url(${content.mainBackground.fluid.src}) center center/cover`,
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1.5}>
          <img
            src={logo}
            alt="Buckhead Butcher Shop"
            className="mx-auto max-w-sm"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1} factor={0.5}>
          <section>
            <div className="bg-secondary text-white max-w-4xl p-12">
              <h1 className="font-display text-4xl tracking-wider">
                {content.heroTitle}
              </h1>
              <p className="font-sans text-lg">
                {content.heroParagraph.internal.content}
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={0.5}
          className="flex items-center justify-center"
        >
          <section id="menu" className="bg-white">
            <Glide
              ref={gliderRef}
              type="slider"
              perView={5}
              startAt={0}
              focusAt="0"
              bound={true}
              className="container mx-auto"
            >
              {content.sliderImages.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: `url(${s.fluid.src}) center center/cover`,
                    height: "400px",
                  }}
                />
              ))}
            </Glide>

            <div className="container mx-auto my-16 flex flex-col items-center justify-center text-black">
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
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1.2}>
          <section
            className="py-20 absolute inset-0"
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
        </ParallaxLayer>
      </Parallax>
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
