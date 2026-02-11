import Links from "./Links"
import { useTranslation } from 'react-i18next'


const Card = () => {
  const { t } = useTranslation()
  
  return (
    <div id='about-me' className="flex justify-between items-center scroll-mt-24 paddings mt-15">
        <div>
          <h2 className="text-6xl font-bold m-4">{t("name")} <span className="text-emerald-500">Fabrizio!</span></h2>
          <p className="text-xl m-4">
            {t("presentation")}
          </p>
          <Links/>
        </div>
        <img
          className="rounded-full ml-20 mr-40"
          src="/public/Placeholder.jpg"
          alt="Card Image"
          width={300}
          height={300}
        />
    </div>
  )
}

export default Card