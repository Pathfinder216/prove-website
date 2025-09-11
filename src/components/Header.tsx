import { useState } from "react"
import { Menu, X } from "lucide-react"

import ProveLogo from '../assets/Logo.jpg'

const links = [
  { href: "home.htm", label: "Home" },
  { href: "team.htm", label: "Team" },
  { href: "media.htm", label: "Media" },
  { href: "poseidon.htm", label: "Poseidon" },
  { href: "finance.htm", label: "Finance" },
]

function Header() {
  const [open, setOpen] = useState(false)

  let currentPath = window.location.pathname.split("/").pop()
  if (!currentPath) {
    currentPath = "home.htm"
  }

  return (
    <header className="bg-prove-primary shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="home.htm" className="flex items-center gap-2">
            <img src={ProveLogo} alt="pROVe logo" className="h-10 w-auto" />
            <span className="font-bold text-lg text-prove-accent hidden sm:inline">
              Pennsylvania ROV Engineers
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {links.map(link => {
              const isActive = currentPath === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative font-medium transition-colors pb-1
                    ${isActive
                      ? "text-prove-accent"
                      : "text-slate-100 hover:text-prove-accent"
                    }
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-prove-accent
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </a>
              )
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open
              ? <X className="h-6 w-6 text-slate-100" />
              : <Menu className="h-6 w-6 text-slate-100" />
            }
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {
        open && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-sm">
            <ul className="flex flex-col p-4 space-y-2">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded-md ${(currentPath === link.href)
                      ? "bg-prove-accent text-slate-100"
                      : "text-slate-100 hover:bg-prove-accent hover:text-slate-100"
                      }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )
      }
    </header >
  )
}

export default Header
