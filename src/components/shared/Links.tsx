import { Button } from '../ui/button'

const Links = () => {
  return (
    <div className="flex flex-row gap-4 my-16">
            <Button className="icons">Cv</Button>
            <Button className="icons">
              <img
                className='invert'
                src="/github.svg"
                alt="GitHub"
                width={30}
                height={30}
              />
            </Button>
            <Button className="icons">
              <img
                className='invert'
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </Button>
            <Button className="icons">
              <img
                className='invert'
                src="/gmail.svg"
                alt="Gmail"
                width={25}
                height={25}
              />
            </Button>
            <Button className="icons">
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