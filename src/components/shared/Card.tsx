import Links from "./Links"
import { useTranslation } from 'react-i18next'


const Card = () => {
  const { t } = useTranslation()
  
  return (
    <div 
      id='about-me' 
      className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-12 scroll-mt-24 paddings mt-10 md:mt-15 max-w-6xl mx-auto"
    >
      {/* Contenedor de Texto */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          {t("name")} <span className="text-emerald-500">Fabrizio!</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
          {t("presentation")}
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <Links />
        </div>
      </div>

      {/* Contenedor de Imagen */}
      <div className="shrink-0">
        <img
          className="rounded-full object-cover shadow-2xl border-4 border-emerald-500/20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          src="/Perfil3.jpg"
          alt="Card Image"
        />
      </div>
    </div>
  )
}

export default Card