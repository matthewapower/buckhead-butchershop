import React, { useRef } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import Footer from "../components/footer"
import logo from "../images/bbs-logo.png"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Glide from "react-glidejs"

import "react-glidejs/dist/index.css"

const IndexPage = ({ data }) => {
  const content = data.contentfulHomePage
  const gliderRef = useRef(null)
  const desktop = typeof window !== "undefined" && window.innerWidth > 768
  let parallax
  return (
    <Layout>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription.seoDescription}
      />
      <Parallax pages={desktop ? 3 : 3.2} ref={ref => (parallax = ref)}>
        <div className="absolute inset-0 border border-primary m-1 md:m-4 z-10 pointer-events-none" />
        <Footer />
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.2}
          style={{
            backgroundColor: "black",
            background: `url(${content.mainBackground.fluid.src}) center center/cover`,
          }}
          className="pt-16 h-full bg-black"
        ></ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1.5}>
          <img
            src={logo}
            alt="Buckhead Butcher Shop"
            className="mx-auto w-64 md:w-full md:max-w-sm"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={1} factor={0.5}>
          <section>
            <div className="bg-secondary text-white text-center mx-auto max-w-4xl py-12 px-4 md:p-12">
              <h1 className="font-display text-2xl md:text-4xl tracking-wider leading-normal">
                {content.heroTitle}
              </h1>
              <p className="font-sans text-base md:text-lg">
                {content.heroParagraph.internal.content}
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={desktop ? 0.5 : 0.8}
          factor={desktop ? 1 : 1.5}
          className="flex flex-col items-center justify-center bg-white pt-20 max-w-full"
        >
          <Glide
            ref={gliderRef}
            type="slider"
            perView={5}
            startAt={0}
            focusAt="0"
            bound={true}
            breakpoints={{
              768: {
                perView: 1,
              },
            }}
            className="container mx-auto"
            css={css`
              .glide__slides {
                margin-left: 0;
              }
              min-height: 400px;
            `}
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

          <div className="container px-4 md:mx-auto my-16 flex flex-col">
            <h2 className="text-center font-display text-2xl md:text-4xl leading-relaxed tracking-wider">
              {content.sliderTitle}
            </h2>
            <p className="w-full max-w-3xl mx-auto font-sans">
              {content.sliderDescription.sliderDescription}
            </p>
            {content.menu.file ? (
              <a
                href={content.menu.file.url}
                className="font-display uppercase bg-secondary text-white mx-auto py-2 px-12"
              >
                View Our Menu
              </a>
            ) : (
              ""
            )}
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={desktop ? 0.3 : 0.5}
          factor={desktop ? 1 : 1.3}
          className="py-20 flex items-center justify-center"
          style={{
            background: `url(${content.contactBackground.fluid.src}) center center/cover`,
          }}
        >
          <div className="container p-4 mx-auto my-16 flex flex-col items-center justify-center max-w-3xl text-white">
            <h2 className="text-center font-display text-2xl md:text-4xl tracking-wider">
              {content.contactTitle}
            </h2>
            <p className="mx-auto font-sans text-sm">
              {content.contactDescription.contactDescription}
            </p>
            <Form />
          </div>
          <img
            className="hidden md:block absolute bottom-0 right-0 mb-0"
            src={content.contactAccentImage.fluid.src}
            alt="Buckhead Butcher Shop"
          />
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    contentfulHomePage(id: { eq: "82344217-8cbf-536d-a1bd-b50288c7d4f4" }) {
      mainBackground {
        fluid(maxWidth: 4000, quality: 100) {
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
        fluid(maxWidth: 800, quality: 100) {
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
        fluid(maxWidth: 4000, quality: 100) {
          src
        }
      }
      contactAccentImage {
        fluid(maxWidth: 500, quality: 100) {
          src
        }
      }
      seoTitle
      seoDescription {
        seoDescription
      }
    }
  }
`

export default IndexPage
