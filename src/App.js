import './App.css'

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
        Twitter, Github, Twitch
      </div>
      <div className='projects'>
        <h2>Projects</h2>
        <div>
          brisketbot - a discord bot made with discordjs
        </div>
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
