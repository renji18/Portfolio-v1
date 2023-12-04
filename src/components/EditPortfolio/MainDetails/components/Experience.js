import React, { useEffect, useState } from "react"
import { useFirebase } from "../../../../firebase"
import { useDispatch } from "react-redux"
import { toggleMainLoader } from "../../../../redux/actions"
import { Link, useNavigate } from "react-router-dom"
import AddIcon from "@mui/icons-material/Add"
import DragHandleIcon from "@mui/icons-material/DragHandle"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const Experience = ({ data }) => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [expData, setExpData] = useState(data)

  const handleModifyDataFormat = () => {
    if (data) {
      const modifiedExperience = data?.map((e, i) => ({
        indexRef: i + 1,
        ...e,
      }))
      setExpData(modifiedExperience)
    }
  }

  useEffect(() => {
    handleModifyDataFormat()
  }, [data])

  const handleChange = (index, key, value) => {
    setExpData((prev) =>
      prev?.map((p) =>
        p?.indexRef === index ? { ...p, [key]: value } : { ...p }
      )
    )
  }

  const addNewExperience = () => {
    const prevData = Array.from(expData)
    const data = {
      indexRef: prevData?.length + 1,
      link: "",
      location: "",
      position: "",
      startedFrom: "",
      workPlace: "",
      workedTill: "",
    }
    prevData?.unshift(data)
    setExpData(prevData)
  }

  const removeExperience = (index) => {
    const prevData = Array.from(expData)
    prevData?.splice(index, 1)
    setExpData(prevData)
  }

  const moveExperience = (currentPosition, nextPosition) => {
    const prevData = Array.from(expData)
    prevData?.splice(nextPosition, 0, prevData?.splice(currentPosition, 1)[0])
    setExpData(prevData)
  }

  const handleUpdate = () => {
    const updatedExpData = expData?.map((e) => {
      return {
        link: e?.link,
        location: e?.location,
        position: e?.position,
        startedFrom: e?.startedFrom,
        workPlace: e?.workPlace,
        workedTill: e?.workedTill,
      }
    })
    // dispatch(toggleMainLoader(true))
    // firebase.handleSaveUserData("experience", updatedExpData)
    // navigate("/")
  }

  return (
    <div className="customContainer px-7 sm:px-20 lg:px-0">
      <button className="bg-rose-500" onClick={handleModifyDataFormat}>
        Reset
      </button>
      <div className="flex flex-col gap-3">
        {expData?.length > 0 ? (
          <div className="flex my-10 flex-col gap-3">
            <div className="flex justify-center mb-5 mt-10">
              <button
                title="Add new Experience"
                onClick={() => addNewExperience()}
              >
                <AddIcon />
              </button>
            </div>
            {expData?.map((item, index) => (
              <div className="flex justify-between gap-5">
                <div className="flex flex-1 gap-5">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-[#00ffc3]" />
                    <div className="h-full w-1 bg-[#00ffc3]" />
                  </div>

                  <div className={`py-10 space-y-3 flex-1 flex flex-col `}>
                    <div className="text-sm lg:gap-10 gap-5 lg:text-base flex">
                      <span>Position</span>
                      <input
                        value={item?.position}
                        name={"position"}
                        onChange={(e) =>
                          handleChange(
                            item?.indexRef,
                            e?.target?.name,
                            e?.target?.value
                          )
                        }
                        className="flex-1 outline-none border-none rounded-sm text-black px-3 py-1"
                      />
                    </div>
                    <div className="text-sm lg:gap-10 gap-5 lg:text-base flex">
                      <span>WorkPlace</span>
                      <input
                        value={item?.workPlace}
                        name={"workPlace"}
                        onChange={(e) =>
                          handleChange(
                            item?.indexRef,
                            e?.target?.name,
                            e?.target?.value
                          )
                        }
                        className="flex-1 outline-none border-none rounded-sm text-black px-3 py-1"
                      />
                    </div>
                    <div className="text-sm lg:gap-10 gap-5 lg:text-base flex">
                      <span>Link</span>
                      <input
                        value={item?.link}
                        name={"link"}
                        onChange={(e) =>
                          handleChange(
                            item?.indexRef,
                            e?.target?.name,
                            e?.target?.value
                          )
                        }
                        className="flex-1 outline-none border-none rounded-sm text-black px-3 py-1"
                      />
                    </div>
                    <div className="text-sm lg:gap-10 gap-5 lg:text-base flex">
                      <span>Started From</span>
                      <input
                        value={item?.startedFrom}
                        name={"startedFrom"}
                        onChange={(e) =>
                          handleChange(
                            item?.indexRef,
                            e?.target?.name,
                            e?.target?.value
                          )
                        }
                        className="flex-1 outline-none border-none rounded-sm text-black px-3 py-1"
                      />
                    </div>
                    <div className="text-sm lg:gap-10 gap-5 lg:text-base flex">
                      <span>Worked Till</span>
                      <input
                        value={item?.workedTill}
                        name={"workedTill"}
                        onChange={(e) =>
                          handleChange(
                            item?.indexRef,
                            e?.target?.name,
                            e?.target?.value
                          )
                        }
                        className="flex-1 outline-none border-none rounded-sm text-black px-3 py-1"
                      />
                    </div>
                    <div className="text-sm lg:gap-10 gap-5 lg:text-base flex">
                      <span>Location</span>
                      <input
                        value={item?.location}
                        name={"location"}
                        onChange={(e) =>
                          handleChange(
                            item?.indexRef,
                            e?.target?.name,
                            e?.target?.value
                          )
                        }
                        className="flex-1 outline-none border-none rounded-sm text-black px-3 py-1"
                      />
                    </div>
                  </div>
                </div>
                <button
                  title="Delete Experience"
                  onClick={() => removeExperience(index)}
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <button onClick={() => addNewExperience(0)}>Add Experience</button>
          </div>
        )}
      </div>
      <div className="flex my-10 flex-col gap3">
        {expData?.length > 0 && (
          <DragDropContext
            onDragEnd={(dragger) =>
              moveExperience(
                dragger?.source?.index,
                dragger?.destination?.index
              )
            }
          >
            <Droppable droppableId="droppable-1">
              {(provided, _) => (
                <div
                  ref={provided?.innerRef}
                  {...provided?.droppableProps}
                  className="flex flex-col gap-3"
                >
                  {expData?.map((item, index) => (
                    <Draggable
                      index={index}
                      key={item?.indexRef}
                      draggableId={`draggable-${item?.indexRef}`}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided?.innerRef}
                          {...provided?.draggableProps}
                          className="flex justify-between gap-5"
                        >
                          <div className="flex flex-1 gap-5">
                            <div className="flex flex-col items-center">
                              {expData?.length > 1 && (
                                <div
                                  className="h-6 w-5"
                                  {...provided.dragHandleProps}
                                >
                                  <DragHandleIcon />
                                </div>
                              )}
                              <div className="h-full ml-1 w-1 bg-[#00ffc3" />
                            </div>
                            {item?.workPlace}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided?.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
      <button className="bg-rose-500" onClick={handleUpdate}>
        Update
      </button>
    </div>
  )
}

export default Experience
