import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const id=useParams();
    const courseId=id.id;
    console.log(courseId);
  return (
    <div>courseId : {courseId}</div>
  )
}

export default Details