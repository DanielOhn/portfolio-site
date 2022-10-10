import { useEffect, useState } from 'react'

import './App.css'
import Github from "./Social/Github.js"
import Twitter from "./Social/Twitter.js"
import Twitch from "./Social/Twitch.js"

import PDF from "./Data/Resume.pdf";
import Project from './Components/Project'
const data = require("./Data/projects.json");


function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(data.projects);
  }, [projects])

  return (
    <div className="App">
      <div className="header">
        <h1>daniel.ohn</h1>
      </div>
      <div className='content'>
        <p>Hello, I'm a Software Developer whose main goal in life is to make cool stuff.  My main focus at the moment is creating PERN stack projects, and creating apps that I find intersting and fun.  I'm currently looking for work!</p>
        <a href={PDF} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <div className='social'>
        <Github />
        <Twitter />
        {/* <Twitch /> */}
      </div>
      <div className='projects'>
        <h2>Projects</h2>
        {projects.map((proj, i) => {
          return (
            <div key={i}>
              <Project
                name={proj.name}
                url={proj.url}
                desc={proj.desc}
                github={proj.github}
                key={i}
              /></div>)
        })}
      </div>
    </div>
  )
}

export default App;
