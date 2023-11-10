import React from "react"
import { useLocation } from "react-router-dom"
import MainDetails from "./MainDetails"
import AddNewProject from "./AddNewProject"
import EditExistingProject from "./EditExistingProject"

const Editor = () => {
  const location = useLocation()

  const pageControllerDetails = [
    {
      path: "edit-details",
      element: <MainDetails />,
    },
    {
      path: "add-new-project",
      element: <AddNewProject />,
    },
    {
      path: "edit-existing-projects",
      element: <EditExistingProject />,
    },
  ]

  return (
    <div>
      {pageControllerDetails.map((p) => (
        <div key={p.path}>{p.path === location.state && p.element}</div>
      ))}
    </div>
  )
}

export default Editor
