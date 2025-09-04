import { useLayoutEffect, useRef } from "react"
import RovIcon from "../assets/RovIcon.png"
import "./Footer.css"

const email = import.meta.env.VITE_EMAIL
const fb = import.meta.env.VITE_FB
const twitter = import.meta.env.VITE_TWITTER

function Separator() {
  return (
    <span
      className="separator"
      aria-hidden="true"
      style={{ backgroundImage: `url(${RovIcon})` }}
    />
  )
}

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      // mark JS-ready (so CSS can show separators after first calc)
      el.classList.add("js-ready")
      const seps = Array.from(el.querySelectorAll<HTMLSpanElement>(".separator"))

      // reset state
      seps.forEach(s => s.classList.remove("is-line-start"))

      // hide any separator that starts a new wrapped row
      seps.forEach(sep => {
        const prev = sep.previousElementSibling as HTMLElement | null
        if (!prev) {
          sep.classList.add("is-line-start")
          return
        }
        // If separator has a greater offsetTop than its previous item,
        // it wrapped onto a new line -> hide it.
        if (sep.offsetTop > prev.offsetTop) {
          sep.classList.add("is-line-start")
        }
      })
    }

    // Run once, and on resize/container size changes
    update()
    const ro = new ResizeObserver(() => update())
    ro.observe(el)
    window.addEventListener("resize", update)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <footer ref={ref} className="footer">
      <a href={`mailto:${email}`} className="footer-item">
        {email}
      </a>
      <Separator />
      <a href={fb} target="_blank" rel="noreferrer" className="footer-item">
        Facebook
      </a>
      <Separator />
      <a href={twitter} target="_blank" rel="noreferrer" className="footer-item">
        Twitter
      </a>
      <Separator />
      <span className="footer-item">Macungie, Pennsylvania</span>
    </footer>
  )
}
