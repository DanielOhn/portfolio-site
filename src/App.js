import { useEffect, useState } from 'react'

import './App.css'
import Github from "./Social/Github.js"
import Twitter from "./Social/Twitter.js"
import Twitch from "./Social/Twitch.js"

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
        <p>Software Developer</p>
        <p>Link to my resume</p>
      </div>
      <div className='social'>
        <p>Find me on these:</p>
        <Github />
        <Twitter />
        <Twitch />
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
