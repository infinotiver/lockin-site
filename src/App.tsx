import './App.css'
import DotGrid from '@/components/DotGrid'
import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa"

function App() {

  return (
    <>
      <div className='hero-container'>
        <DotGrid
          dotSize={5}
          gap={25}
          baseColor="#1e1e1e"
          activeColor="#ababab"
          proximity={120}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
          style={{position: 'absolute', zIndex: -1}}
        />
        <div className='hero-text-container'>
          <div>
            <h1 className='hero'>LockIn</h1>
            <p className='subtext'>Productivity, Reimagined</p>
          </div>
          <div className='hero-button-container'>
            <button className='hero-button primary'><Download/>Download</button>
            <button className='hero-button secondary'><FaGithub size={24}/>Github</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
