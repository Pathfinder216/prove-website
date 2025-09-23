import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

import ProveLogo from '../assets/Logo.jpg'

const links = [
  { path: "/", label: "Home" },
  { path: "/team", label: "Team" },
  { path: "/media", label: "Media" },
  { path: "/poseidon", label: "Poseidon" },
  { path: "/finance", label: "Finance" },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const currentPath = useLocation().pathname

  return (
    <header className="bg-prove-primary shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={ProveLogo} alt="pROVe logo" className="h-10 w-auto" />
            <span className="font-bold text-lg text-prove-accent hidden sm:inline">
              Pennsylvania ROV Engineers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {links.map(link => {
              const isCurrentPage = (
                (link.path === "/")
                  ? currentPath === "/"
                  : currentPath.startsWith(link.path)
              );

              return (
                <Link
                  to={link.path}
                  className={`group relative font-medium transition-colors pb-1
                    ${isCurrentPage
                      ? "text-prove-accent"
                      : "text-slate-100 hover:text-prove-accent"
                    }
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-prove-accent
                      transition-all duration-300
                      ${isCurrentPage ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen
              ? <X className="h-6 w-6 text-prove-accent" />
              : <Menu className="h-6 w-6 text-prove-accent" />
            }
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {
        isOpen && (
          <nav className="md:hidden bg-prove-primary border-gray-200 shadow-sm">
            <ul className="flex flex-col p-4 space-y-2">
              {links.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-2 px-3 rounded-md ${(currentPath === link.path)
                      ? "bg-prove-accent text-slate-100"
                      : "text-slate-100 hover:bg-prove-accent hover:text-slate-100"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
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
