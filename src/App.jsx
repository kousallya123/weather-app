import './App.css'
import WeatherApp from './Components/WeatherApp'
import Bg from './assets/bg.jfif'

function App() {


  return (
    <div className='min-h-[100vh] p-6 bg-cover' style={{ backgroundImage: `url(${Bg})` }}>
   <WeatherApp/>
   </div>
  )
}

export default App
