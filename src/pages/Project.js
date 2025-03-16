import React from 'react'
import ProjectItem from '../components/ProjectItem';
import "../styles/Project.css";
import {projectList} from '../helpers/ProjectList';
function Project() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
       {projectList.map((project, indx)=>{
        return <ProjectItem id={indx} name={project.name} image={project.image} />
       })}
      </div>
    </div>
  )
}

export default Project;