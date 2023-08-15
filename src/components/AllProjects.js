import React, { useEffect, useState } from "react"
import axios from "axios"
import AllProjectsImagePart from "./allProjectsStuff/AllProjectsImagePart"
import AllProjectsNamePart from "./allProjectsStuff/AllProjectsNamePart"
import AllProjectsNamePartV2 from "./allProjectsStuff/AllProjectsNamePartV2"
import AllProjectsNamePartV3 from "./allProjectsStuff/AllProjectsNamePartV3"

const AllProjects = (menuOpen) => {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    const fetchAllProjects = async () => {
      const { data } = await axios.get(
        "https://portfolio-2cf75-default-rtdb.firebaseio.com/singleProjectData.json"
      )
      setProjectData(Object.entries(data))
    }
    fetchAllProjects()
  }, [])

  return (
    <div id="projects" className="pt-20 px-5 h-full font-semibold">
      <div className="flex flex-col  items-center justify-evenly">
        <div className="customContainer px-7 sm:px-20 lg:px-0">
          <div className="text-lg font-semibold sm:text-2xl">
            <h1 className="mb-10 w-full">Stuff That I've Created</h1>
          </div>
          {projectData.map((item, index) => (
            <div key={index} className="my-20 flex flex-col md:flex-row">
              {index % 2 === 0 ? (
                <>
                  <AllProjectsImagePart menuOpen={menuOpen} item={item} />
                  <AllProjectsNamePart item={item} />
                </>
              ) : (
                <>
                  <AllProjectsNamePartV2 item={item} />
                  <AllProjectsImagePart menuOpen={menuOpen} item={item} />
                  <AllProjectsNamePartV3 item={item} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProjects
