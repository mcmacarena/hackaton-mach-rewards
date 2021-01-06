import React, {useState} from 'react'
import CardPartners from './CardPartners'
import './styles/rewards.css'
import PointsWins from  './PointsWins'
import CardSubCategoriaAdventure from './CardSubCategoriaAdventure'


const Rewards = () => {
  const [adventureSubcat, setadventureSubcat] = useState(false)
  // const accessCategory = () => {
  //   console.log("btn")
  //   setadventureSubcat(!adventureSubcat)
  // } 
  return (
    <div className="container_rewards">
      <div className="container_rewards_components">
      <div className="container_Ptos_Acumulated">
        <PointsWins />
      </div>
      <div className="container_explication">
      <h5>Canjea tus Puntos </h5>
      <p>Paga con tu tarjeta MACH en cualquiera de estas tiendas y acumula más puntos. Puedes canjear tus puntos en cualquiera de las tiendas asociadas del comercio.</p>
      </div>
     
      <CardPartners  click={() => setadventureSubcat(!adventureSubcat)}/>
      <CardSubCategoriaAdventure adventureSubcat={adventureSubcat}/>
     </div>
      </div>
     
    

  )
}

export default Rewards
