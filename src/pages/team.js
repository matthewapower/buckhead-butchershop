import React, { useState, useLayoutEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import logo from "../images/bbs-logo.png"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import useDimensions from "react-use-dimensions"

const TeamPage = ({ data }) => {
  const content = data.contentfulTeamPage
  const [pages, setPages] = useState(1)
  const [teamRef, teamSize] = useDimensions()
  const desktop = typeof window !== "undefined" && window.innerWidth > 768
  let parallax

  useLayoutEffect(() => {
    let teams = Math.round((teamSize.height / window.innerHeight) * 10) / 10
    if (desktop) {
      setPages(teams)
    } else {
      setPages(teams + 0.5)
    }
  }, [teamSize])

  return (
    <Layout>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription.seoDescription}
      />
      <Parallax
        pages={pages ? pages : 1}
        ref={ref => (parallax = ref)}
        className="bg-secondary"
      >
        <div className="absolute inset-0 border border-primary m-1 md:m-4 z-10 pointer-events-none" />
        <Footer />
        <ParallaxLayer offset={0.1} speed={1.5}>
          <img
            src={logo}
            alt="Buckhead Butcher Shop"
            className="mx-auto w-64 md:w-full md:max-w-sm"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={0.6} factor={0.5}>
          <div className="bg-secondary text-white text-center max-w-4xl py-12 px-4 md:p-12 mx-auto">
            <h1 className="font-display text-2xl md:text-4xl tracking-wider leading-normal">
              {content.h1}
            </h1>
            <p className="font-sans text-base md:text-lg">
              {content.description.description}
            </p>
            <h2 className="font-display text-2xl tracking-wider leading-normal">
              {content.h2}
            </h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div
            ref={teamRef}
            className="container mx-auto text-white px-4 grid gap-40"
          >
            {content.teamSection.map((t, i) => {
              return (
                <div key={i} className="grid md:grid-cols-2 gap-8">
                  <div
                    style={{
                      background: `url(${t.headshot.fluid.src}) center center/cover`,
                      minHeight: "50vh",
                    }}
                    className="h-64 mb-10 md:mb-0 md:mr-20 relative"
                  >
                    <span className="bg-primary hidden md:block md:w-px absolute bottom-0 inset-y-0 right-0 -mr-10" />
                  </div>
                  <div className="md:pb-20">
                    <h2 className="font-display uppercase tracking-wider border-b border-primary pb-4">
                      {t.name}
                    </h2>
                    <h3 className="font-display uppercase tracking-wider">
                      {t.jobTitle}
                    </h3>
                    <p className="font-sans">{t.bio.bio}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
    contentfulTeamPage(id: { eq: "e887e663-d8a2-54c5-8cac-3849fb6de50c" }) {
      h1
      description {
        description
      }
      h2
      teamSection {
        name
        jobTitle
        bio {
          bio
        }
        headshot {
          fluid(maxWidth: 1000, quality: 100) {
            src
          }
        }
      }
      seoTitle
      seoDescription {
        seoDescription
      }
    }
  }
`

export default TeamPage
