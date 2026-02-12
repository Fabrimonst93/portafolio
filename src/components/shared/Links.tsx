import { toast } from 'sonner';
import { Button } from '../ui/button'
import { useTranslation } from 'react-i18next';

const Links = () => {
  const { t } = useTranslation()

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t("copied"));
  }


  return (
    <div className="flex flex-row gap-4 my-14 ml-8">
            <Button className="icons">Cv</Button>
            <a href="https://github.com/Fabrimonst93" target="_blank" rel="noopener noreferrer">
              <Button className="icons">
                <img
                  className='invert'
                  src="/github.svg"
                  alt="GitHub"
                  width={30}
                  height={30}
                />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/fabrizio-fernandez-384070269/" target="_blank" rel="noopener noreferrer">
              <Button className="icons">
                <img
                  className='invert'
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Button>
            </a>
            <Button
              className="icons"
              onClick={()=>handleCopy("FernandezFabrizio2@gmail.com")}
            >
              <img
                className='invert'
                src="/gmail.svg"
                alt="Gmail"
                width={25}
                height={25}
              />
            </Button>
            <Button
              className="icons"
              onClick={()=>handleCopy("fa.bri.zio@hotmail.com")}
            >
              <img 
                className='invert'
                src="/outlook.svg"
                alt="Outlook"
                width={25}
                height={25}
              />
            </Button>
          </div>
  )
}

export default Links