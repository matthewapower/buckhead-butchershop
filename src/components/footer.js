import React from "react"

export default function Footer() {
  return (
    <footer className="text-center absolute inset-x-0 bottom-0 font-display text-white text-xs z-10 m-2 md:m-6">
      © {new Date().getFullYear()} BUCKHEAD BUTCHER SHOP - ATLANTA, GA - 1451
      PACES FERRY ROAD
    </footer>
  )
}
