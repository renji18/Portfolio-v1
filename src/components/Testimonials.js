import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([])

  const { contact } = useSelector((state) => state?.portfolioData?.portfolio)

  useEffect(() => {
    setTestimonialData(contact)
  }, [contact])

  return (
    <div>
      <div>yo</div>
    </div>
  )
}

export default Testimonials
