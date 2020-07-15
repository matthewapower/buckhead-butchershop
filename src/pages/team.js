import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"
import logo from "../images/bbs-logo.png"

const TeamPage = ({ data }) => {
  const content = data.contentfulTeamPage

  return (
    <Layout>
      <SEO
        title={content.seoTitle}
        description={content.seoDescription.seoDescription}
      />
      <section className="bg-secondary py-32">
        <div className="absolute inset-0 border border-primary m-1 md:m-4 z-10 pointer-events-none" />
        <Footer />
        <img
          src={logo}
          alt="Buckhead Butcher Shop"
          className="mx-auto w-64 md:w-full md:max-w-sm"
        />

        <div className="bg-secondary text-white text-center max-w-4xl py-12 px-4 md:p-12 mx-auto mb-24">
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

        <div className="container mx-auto text-white px-4 grid gap-24">
          {content.teamSection.map((t, i) => {
            return (
              <div key={i} className="grid md:grid-cols-2 gap-8">
                <div
                  style={{
                    background: `url(${t.headshot.fluid.src}) center center/cover`,
                    paddingBottom: "50%",
                  }}
                  className="mb-4 md:mb-0 mx-auto md:mr-20 relative w-1/2 self-start md:ml-auto"
                >
                  <span className="bg-primary hidden md:block md:w-px absolute bottom-0 inset-y-0 right-0 -mr-10" />
                </div>
                <div>
                  <h2 className="text-center md:text-left font-display uppercase tracking-wider border-b border-primary pb-4">
                    {t.name}
                  </h2>
                  <h3 className="text-center md:text-left font-display uppercase tracking-wider">
                    {t.jobTitle}
                  </h3>
                  <p className="text-center md:text-left font-sans">
                    {t.bio.bio}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
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
