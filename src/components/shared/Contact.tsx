import { toast } from 'sonner'
import { CONTACTS } from '../../data/contacts'
import { useTranslation } from 'react-i18next'


const Contact = () => {
  const { t } = useTranslation()

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t("copied"));
  }
  const handleLink = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div id='contacts' className='flex flex-col gap-4 scroll-mt-24 paddings'>
      <div className='flex justify-center items-center'>
        <h2 className='text-5xl font-bold mb-6'>{t("contact_me")}</h2>
      </div>

      <p className='text-lg'>{t("contact_text")}</p>
      
      <div className='flex flex-col justify-center'>
        {CONTACTS.map((contact) => (
          <div 
            key={contact.alt} 
            onClick={() => contact.alt.includes("LinkedIn") ? handleLink(contact.content) : handleCopy(contact.content)}
            className='flex gap-2 items-center cursor-pointer group hover:bg-white/5 p-3 rounded-lg transition-all active:scale-95 w-fit'
            title="Click para copiar"
          >
              <img 
                src={contact.src} 
                alt={contact.alt} 
                className='w-5 h-5 invert mr-5' 
              />
            <div>
              <p className="text-white group-hover:underline font-mono">
                {contact.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact