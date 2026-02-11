import { Check, BookOpen } from "lucide-react"
import { EDUCATION } from "../../data/education"
import { useTranslation } from 'react-i18next'

const Education = () => {
  const { t } = useTranslation()
  
  return (
    <div id='education' className='flex flex-col justify-center items-center gap-8 scroll-mt-24 px-6'>
      
      <h2 className='text-5xl font-bold mb-8 mt-16'>{t("education")}</h2>
      
      <div className='flex flex-col w-full max-w-3xl'>
        {EDUCATION.map((item, index) => (
          <div key={index} className="flex gap-6 relative">
            <div className="flex flex-col items-center">
              <div 
                className={`z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0 
                  ${item.status === 'completed' 
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : item.status === 'current'
                    ? 'bg-white border-emerald-500 text-emerald-500'
                    : 'bg-white border-gray-300 text-gray-300'
                  }`}
              >
                {item.status === 'completed' && <Check size={20} />}
                {item.status === 'current' && <BookOpen size={20} />} 
              </div>

              {index !== EDUCATION.length - 1 && (
                <div 
                  className={`w-1 grow my-2 rounded-full 
                    ${item.status === 'completed' ? 'bg-emerald-500' : 'bg-gray-200'}`} 
                />
              )}
            </div>
            <div className="pb-12 pt-1"> 
              <h3 className={`text-2xl font-semibold ${item.status === 'current' ? 'text-emerald-500' : 'text-white'}`}>
                {t(item.title)}
              </h3>
              <p className='text-gray-400 font-medium'>
                {t(item.institution)}
              </p>
              <p className='text-gray-500 text-sm mt-1'>
                {t(item.period)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education