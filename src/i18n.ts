
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
      presentation: "Full Stack Jr. Developer passionate about creating efficient and attractive web solutions, computer engineering student.",


      techs: "Skills",


      myProjects: "My Projects",


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
      presentation: "Desarrollador Full Stack Jr. apasionado por crear soluciones web eficientes y atractivas, estudiante de ingenieria informatica.",


      techs: "Habilidades",


      myProjects: "Mis Proyectos",


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