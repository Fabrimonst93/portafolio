
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


const resources = {
  en: {
    translation: {
      about_me: "About Me",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact_me: "Contact Me",


      name: "Hello, I'm",
      presentation: "A passionate Argentinian Jr. Full Stack Developer eager to create efficient and attractive web solutions, currently studying computer engineering at the Catholic University of Salta.",


      techs: "Skills",


      myProjects: "My Projects",
      "projects.pp.title": "Personal Portfolio",
      "projects.pp.description": "My personal website optimized for performance, with smooth animations.",
      
      "projects.sm.title": "Social Media App",
      "projects.sm.description": "A social media application that allows users to share posts, create communities, like and comment on posts, using Next.js and MongoDB.",
      
      "projects.ic.title": "Instagram Clone",
      "projects.ic.description": "An Instagram cloned application with functionalities to share photos, and comment on posts.",

      code: "Code",
      live: "Visit",


      "education.hs.title": "High School Degree in IT",
      "education.hs.inst": "Institute Model School N°8067",
      "education.hs.period": "2004 - 2018",

      "education.100prog.title": "100 Programmers of Salta",
      "education.100prog.inst": "Municipality of Salta",
      "education.100prog.period": "2021",

      "education.uni.title": "Computer Engineering",
      "education.uni.inst": "Catholic University of Salta (UCASAL)",
      "education.uni.period": "2019 - Present",


      copied: "Copied to clipboard",
      contact_text: "If you want to contact me, you can find me at:",
    }
  },

  
  es: {
    translation: {
      about_me: "Acerca de mi",
      skills: "Habilidades",
      projects: "Proyectos",
      education: "Educación",
      contact_me: "Contáctame",


      name: "Hola, soy",
      presentation: "Desarrollador Full Stack Jr. de Argentina apasionado por crear soluciones web eficientes y atractivas, estudiante de ingenieria informatica en la Universidad Catolica de Salta.",


      techs: "Habilidades",


      myProjects: "Mis Proyectos",
      "projects.pp.title": "Portafolio Personal",
      "projects.pp.description": "Mi sitio web personal optimizado para su performance, con animaciones suaves.",
      
      "projects.sm.title": "Aplicación de Red Social",
      "projects.sm.description": "Una aplicación de red social que permite a los usuarios compartir posts, crear comunidades, dar likes y comentar en publicaciones, utilizando Next.js y MongoDB.",
      
      "projects.ic.title": "Clon de Instagram",
      "projects.ic.description": "Una aplicación de Instagram clonada con funcionalidades de compartir fotos, y comentar en publicaciones.",

      code: "Código",
      live: "Visitar",
      

      "education.hs.title": "Bachillerato en informática",
      "education.hs.inst": "Colegio Instituto Modelo N°8067",
      "education.hs.period": "2004 - 2018",

      "education.100prog.title": "100 Programadores Salteños",
      "education.100prog.inst": "Municipalidad de Salta",
      "education.100prog.period": "2021",

      "education.uni.title": "Ingeniería en Informática",
      "education.uni.inst": "Universidad Católica de Salta (UCASAL)",
      "education.uni.period": "2019 - Presente",
      

      copied: "Copiado al portapapeles",
      contact_text: "Si deseas contactarme, puedes encontrarme en:",
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n