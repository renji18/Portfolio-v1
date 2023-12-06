import React, { useEffect, useState } from "react"
import { useFirebase } from "../../../../firebase"
import { useDispatch } from "react-redux"
import { toggleMainLoader } from "../../../../redux/actions"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import AddIcon from "@mui/icons-material/Add"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import { useNavigate } from "react-router-dom"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const AboutMe = ({ data }) => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [aboutData, setAboutData] = useState(data)

  const handleModifyDataFormat = () => {
    if (data && data?.skills) {
      const modifiedSkills = data?.skills?.map((s, i) => ({
        indexRef: i + 1,
        skill: s,
      }))
      const updatedData = { ...data, skills: modifiedSkills }
      setAboutData(updatedData)
    }
  }

  useEffect(() => {
    handleModifyDataFormat()
  }, [data])

  const handleChange = (property, index, value) => {
    const prevData = Array.from(aboutData[property])
    if (property === "boasting") prevData[index] = value
    else {
      prevData[index] = {
        indexRef: prevData?.length,
        skill: value,
      }
    }
    setAboutData((prev) => ({ ...prev, [property]: prevData }))
  }

  const addNewElement = (property, index) => {
    const prevData = Array.from(aboutData[property])
    let data = ""
    if (property === "boasting")
      data = "Remove this and write description here."
    else {
      data = {
        indexRef: prevData?.length + 1,
        skill: "",
      }
    }

    prevData?.splice(index + 1, 0, data)
    setAboutData((prev) => ({ ...prev, [property]: prevData }))
  }

  const removeElement = (property, index) => {
    const prevData = Array.from(aboutData[property])
    prevData?.splice(index, 1)
    setAboutData((prev) => ({ ...prev, [property]: prevData }))
  }

  const moveElement = (currentPosition, nextPosition) => {
    const prevData = Array.from(aboutData["skills"])
    prevData?.splice(nextPosition, 0, prevData?.splice(currentPosition, 1)[0])
    setAboutData((prev) => ({ ...prev, skills: prevData }))
  }

  const handleUpdate = () => {
    const skills = []
    aboutData?.skills?.map(
      (s) => s?.skill?.split("-")[0] === "devicon" && skills?.push(s.skill)
    )
    const updatedAboutData = { ...aboutData, skills }
    // dispatch(toggleMainLoader(true))
    // firebase.handleSaveUserData("aboutMe", updatedAboutData)
    // navigate("/")
  }

  return (
    <div className="customContainer px-7 sm:px-20 lg:px-0">
      <button className="bg-rose-500" onClick={handleModifyDataFormat}>
        Reset
      </button>
      <div>
        <div>
          {aboutData?.boasting?.length > 0 ? (
            aboutData?.boasting?.map((item, index) => (
              <div key={index} className="flex mb-8">
                <textarea
                  onChange={(e) =>
                    handleChange("boasting", index, e.target.value)
                  }
                  key={index}
                  value={item}
                  rows={5}
                  className="w-full"
                />
                <div className="flex flex-col justify-between p-2">
                  <button
                    title="Delete paragraph"
                    onClick={() => removeElement("boasting", index)}
                    className="text-xl bg-[#00ffc3] text-black p-1 rounded-full -top-4 -right-4 flex justify-center items-center "
                  >
                    <DeleteForeverIcon />
                  </button>
                  <button
                    title="Add new paragraph"
                    onClick={() => addNewElement("boasting", index)}
                    className="text-xl bg-[#00ffc3] text-black p-1 flex justify-center items-center rounded-full -top-4 -right-4"
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <button onClick={() => addNewElement("boasting", 0)}>
                Add Description
              </button>
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-3">
          {aboutData?.skills?.length > 0 ? (
            <DragDropContext
              onDragEnd={(dragger) =>
                moveElement(dragger?.source?.index, dragger?.destination?.index)
              }
            >
              <Droppable droppableId="droppable-1">
                {(provided, _) => (
                  <div
                    ref={provided.innerRef}
                    className="flex flex-col gap-3"
                    {...provided.droppableProps}
                  >
                    {aboutData?.skills?.map((item, index) => (
                      <Draggable
                        index={index}
                        key={item?.indexRef}
                        draggableId={`draggable-${item?.indexRef}`}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="flex justify-center items-center gap-5"
                          >
                            {aboutData?.skills?.length > 1 && (
                              <span {...provided.dragHandleProps}>
                                <DragHandleIcon />
                              </span>
                            )}
                            <i className={`${item?.skill} text-2xl`} />
                            <input
                              onChange={(e) =>
                                handleChange("skills", index, e.target.value)
                              }
                              placeholder="Copy skill class name from (https://devicon.dev/)"
                              type="text"
                              value={item?.skill}
                              className="flex-1"
                            />
                            <button
                              title="Delete skill"
                              onClick={() => removeElement("skills", index)}
                              className="text-xl bg-[#00ffc3] text-black p-1 rounded-full -top-4 -right-4 flex justify-center items-center "
                            >
                              <DeleteForeverIcon />
                            </button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    <div className="flex justify-center mb-5 mt-10">
                      <button
                        title="Add new skill"
                        onClick={() =>
                          addNewElement("skills", aboutData?.skills?.length)
                        }
                        className="text-xl max-w-min bg-[#00ffc3] text-black p-1 flex justify-center items-center rounded-full -top-4 -right-4"
                      >
                        <AddIcon />
                      </button>
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            <div className="flex justify-center items-center">
              <button onClick={() => addNewElement("skills", 0)}>
                Add Skill
              </button>
            </div>
          )}
        </div>
      </div>
      <button className="bg-rose-500" onClick={handleUpdate}>
        Update
      </button>
    </div>
  )
}

export default AboutMe
