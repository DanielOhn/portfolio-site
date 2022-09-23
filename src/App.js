import './App.css'
import Github from "./Social/Github.js"
import Twitter from "./Social/Twitter.js"
import Twitch from "./Social/Twitch.js"

import Project from './Components/Project'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Daniel Ohn</h1>
      </div>
      <div className='content'>
        <p>Software Developer, currently looking for work</p>
        <p>Link to my resume</p>
      </div>
      <div className='social'>
        <Github />
        <Twitter />
        <Twitch />
      </div>
      <div className='projects'>
        <h2>Projects</h2>
        <Project name="BrisketBot" url="/" desc="Discord bot made with discordjs." />
        <div>
          possum pals - imageboard made with a pern stack
        </div>
        <div>
          Poké App - react website that pulls from pokemon api
        </div>
        <div>
          Pong - made pong with pixijs
        </div>
        <div>
          kayne tweets - react website that pulls api for kanye tweets
        </div>
      </div>
    </div>
  )
}

export default App;
