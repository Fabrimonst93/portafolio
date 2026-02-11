import { SKILLS } from '../../data/skills'
import { useTranslation } from 'react-i18next'

const Skils = () => {
  const { t } = useTranslation()
  
  return (
    <div id='skills' className='flex flex-col justify-center paddings items-center gap-4 scroll-mt-24'>
        <h2 className='text-5xl font-bold m-6 mb-16'>{t("techs")}</h2>
        <div className='flex gap-16'>{SKILLS.map((skill) => (
          <div key={skill.alt} className='flex flex-col items-center gap-2'>
            <div
              className={`skills-container ${skill.padding}`}
              key={skill.alt}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <a className="text-white">{skill.alt}</a>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Skils