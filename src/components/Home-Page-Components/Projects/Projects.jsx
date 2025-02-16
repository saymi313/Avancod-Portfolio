

import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import projectsData from "../../../data/projects.json"
const Projects = () => {
  const { projects } = projectsData
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 3

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="py-16 px-5 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-[#00386C] mb-12 text-center max-w-4xl mx-auto">
        Take a look at projects we have successfully completed and handed over to our numerous satisfied clients
      </h2>
      <div className="flex flex-col gap-4">
        {currentProjects.map((project, index) => (
          <div key={index} className="relative h-[500px] md:h-[400px]">
            {/* Background blue div */}
            <div
              className={`absolute ${index % 2 === 0 ? "right-[12%]" : "left-[12%]"
                } w-[45%] h-[85%] bottom-[-5%] bg-[#00386C] rounded-md z-0`}
            />

            {/* Image container */}
            <div className={`absolute ${index % 2 === 0 ? "right-[10%]" : "left-[10%]"} w-[45%] h-[115%] z-10`}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-[100%] object-contain rounded-md"
              />
            </div>

            {/* glassmorphism content */}
            <div
              className={`absolute ${index % 2 === 0 ? "left-[0%]" : "right-[0%]"
                } w-[55%] h-[70%] top-[25%] z-5 rounded-2xl overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6bb2f5] via-[#42A4FF] to-white opacity-80"></div>
              <div className="absolute inset-0 backdrop-blur-sm"></div>
              <div
  className={`relative  h-full px-10 flex flex-col justify-center ${index % 2 === 0 ? "mr-[0%]" : "ml-[15%]"}`}
>

                <h3 className="text-lg font-medium text-white">Featured Project</h3>
                <h2 className="text-2xl font-bold text-[#00386C] mt-2">{project.title}</h2>
                <p className="text-[#00386C]/90 mt-4 leading-relaxed max-w-[500px]">{project.description}</p>
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.demoLink}
                    className="inline-flex items-center px-6 py-1.5 rounded-lg bg-[#00386C] text-white hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center gap-2 px-6 py-1.5 rounded-lg border-2 border-[#00386C] text-[#00386C] hover:bg-[#00386C] hover:text-white transition-colors duration-300"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>




      
      <div className="flex justify-center mt-10 gap-6 items-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="text-[#00386C] text-3xl hover:text-[#42A4FF] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BsArrowLeftCircle />
        </button>
        <span className="text-[#00386C] text-xl">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="text-[#00386C] text-3xl hover:text-[#42A4FF] transition-colors duration-300  disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BsArrowRightCircle />
        </button>
      </div>
    </div>









    
  )
}

export default Projects

