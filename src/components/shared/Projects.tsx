import { PROJECTS } from "../../data/projects";
import { ExternalLink } from "lucide-react";
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <div id="proyectos" className="flex flex-col justify-center items-center gap-8 scroll-mt-24 my-16 px-6 w-full max-w-6xl mx-auto">

      <div className="text-center mb-8">
        <h2 className='text-5xl font-bold mb-8 mt-16'>{t("myProjects")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {PROJECTS.map((project) => (
          <div 
            key={project.title} 
            className="group bg-dark-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-700 flex flex-col overflow-hidden"
          >
            
            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
              {/* Si no tienes imagen aún, usa un div de color o un placeholder */}
              <img 
                src={project.image} 
                alt={t(project.title)} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col grow">
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {t(project.title)}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {t(project.description)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-100">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <img
                    className="invert"
                    src="/github.svg"
                    alt="GitHub"
                    width={18}
                    height={18}
                    />
                  {t("code")}
                </a>
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-700 transition-colors ml-auto"
                  >
                    {t("live")}
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;