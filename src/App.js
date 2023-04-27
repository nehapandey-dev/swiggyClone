import './App.css'
import Navbarmenu from './Header/Navbarmenu'
import HeroSection from './components/HeroSection'
import Resturants from './components/Resturants'

import Card from './Card/Card'


function App() {
  return (
    <div>
      <Navbarmenu />
      <HeroSection />
      <Resturants />
      <Card />
    </div>
  )
}

export default App
