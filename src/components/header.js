import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect } from "react"
import { useSpring, animated } from "react-spring"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [desktop, setDesktop] = useState(null)
  const animation = useSpring({
    transform: navOpen || desktop ? "translateX(0)" : "translateX(-100%)",
    x: navOpen ? 100 : 0,
    from: { x: 0 },
  })
  const { contentfulHomePage } = useStaticQuery(
    graphql`
      query {
        contentfulHomePage(id: { eq: "82344217-8cbf-536d-a1bd-b50288c7d4f4" }) {
          menu {
            file {
              url
            }
          }
          googleMapsLocation
        }
      }
    `
  )

  useEffect(() => {
    let resize = () => {
      if (window.innerWidth < 768 && desktop) {
        setNavOpen(false)
        setDesktop(false)
      } else if (window.innerWidth > 768 && desktop === false) {
        setNavOpen(false)
        setDesktop(true)
      }
    }
    let resizeEvent = window.addEventListener("resize", () => {
      resize()
    })

    if (desktop === null) {
      setDesktop(typeof window !== "undefined" && window.innerWidth > 768)
    }

    resize()

    return () => {
      window.removeEventListener("resize", resizeEvent)
    }
  }, [desktop])

  return (
    <>
      <header className="flex w-full md:w-auto justify-end items-center p-4 z-20 fixed md:absolute">
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden">
          <animated.svg viewBox="0 0 20 20" className="w-8">
            <animated.path
              d="M0 5 H20"
              stroke={navOpen ? "black" : "white"}
              strokeDashoffset={animation.x.interpolate({
                range: [0, 100],
                output: [0, 100],
              })}
              strokeDasharray="100"
            />
            <animated.path
              d="M0 10 H20"
              stroke={navOpen ? "black" : "white"}
              strokeDashoffset={animation.x.interpolate({
                range: [0, 100],
                output: [0, -100],
              })}
              strokeDasharray="100"
            />
            <animated.path
              d="M0 15 H20"
              stroke={navOpen ? "black" : "white"}
              strokeDashoffset={animation.x.interpolate({
                range: [0, 100],
                output: [0, 100],
              })}
              strokeDasharray="100"
            />
            <animated.path
              d="M0 0 L20 20"
              stroke={navOpen ? "black" : "white"}
              strokeDashoffset={animation.x.interpolate({
                range: [0, 100],
                output: [100, 0],
              })}
              strokeDasharray="100"
            />
            <animated.path
              d="M20 0 L0 20"
              stroke={navOpen ? "black" : "white"}
              strokeDashoffset={animation.x.interpolate({
                range: [0, 100],
                output: [100, 0],
              })}
              strokeDasharray="100"
            />
          </animated.svg>
        </button>
      </header>
      <animated.nav
        style={animation}
        className="font-display uppercase fixed md:absolute bg-primary md:bg-transparent inset-0 md:top-0 md:left-0 md:right-auto md:bottom-auto flex md:block flex-col items-center justify-center z-10"
      >
        <ul className="text-center md:text-left md:text-white tracking-wider md:m-16">
          <li className="mb-6">
            <Link to="/" className={`p-2 md:bg-black`}>
              Home
            </Link>
          </li>
          {contentfulHomePage.menu.file ? (
            <li className="mb-6">
              <a
                href={contentfulHomePage.menu.file.url}
                className={`p-2 md:bg-black`}
              >
                Menu
              </a>
            </li>
          ) : (
            ""
          )}
          <li className="mb-6">
            <Link to="/team" className={`p-2 md:bg-black`}>
              Team
            </Link>
          </li>
          <li className="mb-6">
            <a
              href={contentfulHomePage.googleMapsLocation}
              target="_blank"
              className={`p-2 md:bg-black`}
            >
              Location
            </a>
          </li>
          <li className="mb-6">
            <Link to="/contact" className={`p-2 md:bg-black`}>
              Contact
            </Link>
          </li>
        </ul>
      </animated.nav>
    </>
  )
}

export default Header
