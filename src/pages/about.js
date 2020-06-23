import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

const About = () => {
  let parallax
  return (
    <Layout>
      <SEO title="About" />
      <Parallax
        pages={4}
        scrolling={true}
        vertical
        ref={ref => (parallax = ref)}
        className="bg-black text-white"
      >
        <ParallaxLayer offset={0} speed={0.5}>
          <span onClick={() => parallax.scrollTo(1)}>
            Layers can contain anything
          </span>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} className="bg-primary" />
        <ParallaxLayer offset={1} speed={1}>
          <h2>Hello</h2>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default About
