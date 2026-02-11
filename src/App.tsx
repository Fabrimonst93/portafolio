import { createRoot } from 'react-dom/client'
import './i18n'
import NavBar from './components/shared/NavBar'
import './globals.css'

import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import Card from './components/shared/Card';
import Skils from './components/shared/Skils';
import Projects from './components/shared/Projects';
import Education from './components/shared/Education';
import Contact from './components/shared/Contact';
import { Toaster } from './components/ui/sonner';


createRoot(document.getElementById('root')!).render(
  <div className='main-container smooth-scroll'>
    <NavBar/>
    <Card/>
    <Skils/>
    <Projects/>
    <Education/>
    <Contact/>
    <Toaster
      duration={1000}
    />
  </div>
)
