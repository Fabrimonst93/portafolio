import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Link } from 'react-scroll'
import { links } from "../../data/links"
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

const NavBar = () => {
  const { t, i18n } = useTranslation()
  const [activeSection, setActiveSection] = useState(links[0])


  const handleLanguageChange = (value: string) => {
    if (value) {
      i18n.changeLanguage(value)
    }
  }


  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentLink = links.find((link) => link.to === entry.target.id)
          if (currentLink) {
            setActiveSection(currentLink)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    links.forEach((link) => {
      const element = document.getElementById(link.to)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])



  return (
    <div className='navbar'>
      <div className='name'>
        Fabrizio 
        <span className="text-emerald-500 [text-shadow:0_0_30px_#10b981] block sm:inline">Fernandez</span>
      </div>


      <div className='hidden sm:flex nav-links gap-4'>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={1000}
            offset={link.to === "about-me" ? -100 : -50}
            className={`link cursor-pointer ${activeSection.to === link.to ? "after:w-full" : ""}`}
          >
            {t(link.label)}
          </Link>
        ))}
      </div>


      <div
        className="sm:hidden text-white [text-shadow:0_0_30px_white] font-bold"
      >
        {t(activeSection.label)}
      </div>


      <div>
        <ToggleGroup
          className="flex sm:ml-35"
          type="single"
          value={i18n.language}
          onValueChange={handleLanguageChange}
          variant="outline"
        >
          <ToggleGroupItem value="es" aria-label="Toggle español">ES</ToggleGroupItem>
          <ToggleGroupItem value="en" aria-label="Toggle english">EN</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  )
}

export default NavBar