import React,{useContext} from 'react'
import logoPtos from '../../../img/logPtos.svg';
import './styles/pointsWins.css';
import { ContextUser } from '../../../App';
import  data from '../../../data/users.json'


const PointsWins = () => {
  const [user] = useContext(ContextUser);
  
  const classContainerPointWin= user === 0 ? 'container_point_informationsBegginer' : 'container_point_informationsAdventure';

 // const classContainerPointWin = user === 0 ? 'container_point_informationsBegginer' : 'container_point_informationsAdventure';
  //const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';

  return (
    <>  
      <h3>Puntos Acumulados</h3>
        <div className={classContainerPointWin}>
      <div className="containerLogPtos">
      <img src={logoPtos} alt="logoPtos"/>
      </div>
       <h4>{data[user].puntos}</h4>
      </div>
      <h5>{data[user].descTipoNivelPuntos}</h5>
    </>
  )
}

export default PointsWins
