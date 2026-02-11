import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (value: string) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <div className='navbar'>
      <div className='name'>
        Fabrizio <span className="text-emerald-500 [text-shadow:0_0_30px_#10b981]">Fernandez</span>
      </div>

      <div className='nav-links'>
        <Link to="about-me" smooth={true} duration={1000} offset={-100} className="link">
          {t('about_me')} 
        </Link>
        <Link to="skills" smooth={true} duration={1000} offset={-50} className="link">
          {t('skills')}
        </Link>
        <Link to="projects" smooth={true} duration={1000} offset={-50} className="link">
          {t('projects')}
        </Link>
        <Link to="education" smooth={true} duration={1000} offset={-50} className="link">
          {t('education')}
        </Link>
        <Link to="contacts" smooth={true} duration={1000} offset={-50} className="link">
          {t('contact_me')}
        </Link>
      </div>

      <div className="ml-20">
        <ToggleGroup
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