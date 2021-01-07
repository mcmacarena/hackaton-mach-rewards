import React,{useContext}from 'react'
import { ContextUser } from '../../../App';
import './styles/cardSubCategoriaAdventure.css'
import data from '../../../data/users.json'
import back from '../../../img/back.svg'
import PointWins from './PointsWins'

const CardSubCategoria = (props) => {
  const classToogleAdventure = props.adventureSubcat === true ? 'toggleVisibleSubCategory' : 'toggleHiddenSubCategory';
  const [user] = useContext(ContextUser);

// let subCategory = data[user].canjes.map((subdata)=>{
//   return subdata.subCategoria
// }) 

  return (
    <div className={classToogleAdventure}>
      <PointWins />
      <div className="containerTitleAndDescription">
        <h4>Aventuras</h4>
        <p>Que esperas para vivir al límite, diviértete al máximo con estas aventuras extremas.
          Sólo para atrevídos</p>
      </div>
      <img className="imaArrowBack" onClick={() => props.setadventureSubcat(!props.adventureSubcat)} src={back} alt="" />
      {data[user].subCategoriaCanjes.map((data, index) => {
      return  <div key={index} className="containerCardSubcategory">
        
      <div className="containerImgSubCategory">
        <img src={`${data.img}`} alt="insub"/>
      </div>
      <div className="containerDetailsSubCatg">
      <h5>{data.title}</h5>
      <div className="pointsAndLevelSubCategory">
      <div className="containerLogPtosSubCategory">
      <img  src={`${data.imgPointCat}`} alt="logoPtos"/>
      </div>
      <h6>{data.points}</h6>
      </div>
      <div className="descriptionSubCategory">
        <p>{data.description} </p>
      </div>
      <p className="textCanjear">Canjear</p>
      </div>
    </div>
    
   
        })}
    </div>
  )
}

export default CardSubCategoria
