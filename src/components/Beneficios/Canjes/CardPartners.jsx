import React, { useContext, useState } from 'react'
import data from '../../../data/users.json'
import './styles/cardPartners.css'
import { ContextUser } from '../../../App';
import FilterCanjes from './FilterCanjes'

import filterIcon from '../../../img/filter.svg'


const CardPartners = (props) => {
  const [user] = useContext(ContextUser);

  const [filter, setFilter] = useState(false);
  // seleccion segun   usuario  beginner  o adventure

  const [filterMark, setFilterMark] = useState([])

  console.log(filterMark);

  let buttonFilterCanjes = ''

  if (filterMark.length === 0) {
    buttonFilterCanjes = <div className=''>
      <button className='buttonFilterCanjes'>
        Todos los beneficios
    </button>
    </div>
  }
  else {
    buttonFilterCanjes = filterMark.map((data, index) => {
      return <div key={index} className=''>
        <button className='buttonFilterCanjes'>
          {data}
        </button>
      </div>
    })
  }

  // const classContainerDiscount = user === 0 ? 'containerDiscountBegginer' : 'containerDiscountAdventure';
  //const classTextGetCoupon = user === 0 ? 'textGetCouponBegginer' : 'textGetCouponAdventure';

  return (
    <div>
      <div className='containerFiltersCanjes'>
        <div className='containerButtonsFilterCanjes'>
          {buttonFilterCanjes}
        </div>
        <img src={filterIcon} alt='filter' onClick={() => setFilter(!filter)} />
      </div>
      < FilterCanjes filter={filter} setFilter={setFilter} filterMark={filterMark} setFilterMark={setFilterMark} />
      <div className="containerCanjes">
        {data[user].canjes.map((data, index) => {
          if (filterMark.length === 0) {
            return <div key={index} className="cardPartners" onClick={props.click}>
              <div className="containerImgCategory">
                <img src={`${data.imgCanje}`} alt="imgCategory" />
              </div>
              <div className="pointAndLevel">
                <div className="containerLogPtos">
                  <img src={`${data.imgPointCat}`} alt="logoPtos" />
                </div>
                <h5>{data.pointCategoria}</h5>
              </div>
              <div className="containerDetails">
                <h6>{data.categoria}</h6>
                <p>{data.description}</p>
              </div>
            </div>
          } else {
            for (let i = 0; i < filterMark.length; i++) {
              if (data.categoria === filterMark[i]) {
                return <div key={index} className="cardPartners" onClick={props.click}>
                  <div className="containerImgCategory">
                    <img src={`${data.imgCanje}`} alt="imgCategory" />
                  </div>
                  <div className="pointAndLevel">
                    <div className="containerLogPtos">
                      <img src={`${data.imgPointCat}`} alt="logoPtos" />
                    </div>
                    <h5>{data.pointCategoria}</h5>
                  </div>
                  <div className="containerDetails">
                    <h6>{data.categoria}</h6>
                    <p>{data.description}</p>
                  </div>
                </div>
              }
            }
          }
        })}
      </div>
    </div>
  )
}

export default CardPartners
