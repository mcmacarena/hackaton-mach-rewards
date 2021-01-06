import React from 'react'
import './styles/cardSubCategoriaAdventure.css'

const CardSubCategoria = (props) => {
  const classToogleAdventure = props.adventureSubcat === true ? 'toggleVisible' : 'toggleHidden';

  return (
    <div className={classToogleAdventure}>
    <div className="containerCardSubcategory">
      <div className="containerImgSubCategory">
      </div>
      <div className="containerDetailsSubCatg">
      <div className="pointsAndLevelSubCategory">
      <div className="containerLogPtosSubCategory">
      <img  src="" alt="logoPtos"/>
      </div>
      <h6> pspasdjaskdasd</h6>
      </div>
      <div className="descriptionSubCategory">
        <p> </p>
      </div>
      <p> </p>
      </div>
    </div>
    </div>
  )
}

export default CardSubCategoria
