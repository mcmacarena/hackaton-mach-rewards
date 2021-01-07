import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/walkthrough.css';
import Slider from "react-slick";
import n1 from '../../../img/1Walkthrough.svg'
import n2 from '../../../img/2Walkthrough.svg'
import n3 from '../../../img/3Walkthrough.svg'
import n4 from '../../../img/4Walkthrough.svg'
import icon from './../../../img/iconWalkthrough.svg'
import sumamaspuntos from './../../../img/sumamaspuntos.svg'
import tecnologia from './../../../img/tecnologia.svg'
import retail from './../../../img/retail.svg'
import deporte from './../../../img/deporte.svg'
import aventura from './../../../img/aventura.svg'
import mascotas from './../../../img/mascota.svg'
import libros from './../../../img/libros.svg'
import beneficiosmach from './../../../img/beneficiosmach.svg';
import puntosmach from './../../../img/puntosmach.png';

const Walkthrough = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="modaltWalkthrough">
      <div className="modalContentWalkthrough">
        <Slider {...settings}>
          {/* primera pantalla */}
          <div className='containerPageWalkthrough'>
            <span className='titleWalkthrough'>
              Categorías
            </span>
            <span className='textWalkthrough'>
              Los beneficios MACH se dividen en 4 categorías:
            </span>
            <div className='containerAllNumbersWalkthrough'>
              <div className='containerNumberWalktrough'>
                <img src={n1} alt="n1" />
                <div className='containerTextCategoryWalkthrough'>
                  <span className='titleCategoryWalkthrough'>MACH Beginner</span>
                  <span className='pointsCategoryWalkthrough1'>0-50.000 puntos</span>
                </div>
              </div>
              <div className='containerNumberWalktrough'>
                <img src={n2} alt="n1" />
                <div className='containerTextCategoryWalkthrough'>
                  <span className='titleCategoryWalkthrough'>MACH Explorer</span>
                  <span className='pointsCategoryWalkthrough2'>50.000-150.000 puntos</span>
                </div>
              </div>
              <div className='containerNumberWalktrough'>
                <img src={n3} alt="n1" />
                <div className='containerTextCategoryWalkthrough'>
                  <span className='titleCategoryWalkthrough'>MACH Adventure</span>
                  <span className='pointsCategoryWalkthrough3'>150.000-300.000 puntos</span>
                </div>
              </div >
              <div className='containerNumberWalktrough'>
                <img src={n4} alt="n1" />
                <div className='containerTextCategoryWalkthrough'>
                  <span className='titleCategoryWalkthrough'>MACH Lover</span>
                  <span className='pointsCategoryWalkthrough4'>300.000 puntos en adelante</span>
                </div>
              </div>
            </div>
            <span className='textWalkthrough'>
              Para subir y desbloquear de nivel, deberás acumular los puntos necesarios.
            </span>
          </div>
          {/* segunda pantalla */}
          <div className='containerPageWalkthrough'>
            <div className='containerTitleIconWalkthrough'>
              <img src={icon} alt="icon" />
              <span className='titleWalkthroughIcon'>
                Puntos MACH
              </span>
            </div>
            <span className='textWalkthrough'>
              Para acumular los puntos, deberás cumplir con los desafíos MACH que tenemos para tí.
            </span>
            <div className='containerImgPuntos'>
              <img src={puntosmach} alt='puntosmach' />
            </div>
            <button className='btnDEsafiosMach'>
              Desafíos MACH
            </button>

            <span className='textWalkthrough'>
              Desafíos: Invita a un amigo, acumula las letras M-A-C-H, desafío del día y carga tu tarjeta de prepago.
            </span>
          </div>
          {/* tercera pantalla */}
          <div className='containerPageWalkthrough'>
            <span className='titleWalkthrough'>
              Suma más puntos
            </span>
            <span className='textWalkthrough'>
              Además al pagar con tu tarjeta MACH en las tiendas asociadas, estarás acumulando más puntos.
            </span>
            <img className='imgWalkthroughSuma' src={sumamaspuntos} alt="sumamaspuntos" />
            <div className='containerTitleIconWalkthrough'>
              <span className='equivalenceWalkthrough'>
                $100 pesos =
              </span>
              <img src={icon} alt="icon" />
              <span className='equivalenceWalkthrough'>
                1 punto
              </span>
            </div>
            <span className='textWalkthrough'>
              Cada tienda te dará diferente puntaje y eres libre elegir cual quieres hacer.
            </span>
          </div>
          {/* cuarta pantalla */}
          <div className='containerPageWalkthrough'>
            <div className='containerTitleIconWalkthrough'>
              <img src={icon} alt="icon" />
              <span className='titleWalkthroughIcon'>
                Canjea tus puntos
              </span>
            </div>
            <span className='textWalkthrough'>
              Cuando tengas la cantidad de puntos necesarios, podrás canjearlos por los <strong>productos en el comercio nacional e internacional.</strong>
            </span>
            <div className='containerCanjesWalkthrough'>
              <div className='containerEachCanjesWalkthrough'>
                <img src={tecnologia} alt="tecnologia" />
                <span className=''>Tecnología</span>
              </div>
              <div className='containerEachCanjesWalkthrough'>
                <img src={retail} alt="retail" />
                <span className=''>Tecnología</span>
              </div>
              <div className='containerEachCanjesWalkthrough'>
                <img src={deporte} alt="deporte" />
                <span className=''>Tecnología</span>
              </div>
              <div className='containerEachCanjesWalkthrough'>
                <img src={aventura} alt="aventura" />
                <span className=''>Tecnología</span>
              </div>
              <div className='containerEachCanjesWalkthrough'>
                <img src={mascotas} alt="mascotas" />
                <span className=''>Tecnología</span>
              </div>
              <div className='containerEachCanjesWalkthrough'>
                <img src={libros} alt="libros" />
                <span className=''>Tecnología</span>
              </div>
            </div>
            <span className='textWalkthrough'>
              Cada categoría tendrá canjes más atractivos que la anterior.
              ¡Qué esperas para descubrirlos!
            </span>
          </div>
          {/* quinta pantalla */}
          <div className='containerPageWalkthrough'>
            <span className='titleWalkthrough'>
              Beneficios MACH
            </span>
            <span className='textWalkthrough'>
              ¡ Eso no es todo ! Además te regalamos beneficios de <strong>descuentos</strong> para que los utilices en el comercio o también <strong>recargas de dinero</strong>r por pagar con tu tarjeta MACH.
              </span>
            <img className='imgBeneficiosWalkthrough' src={beneficiosmach} alt="beneficiosmach" />
            <span className='textWalkthrough'>
              Mientras estés más arriba en las categorías, accederás a mejores beneficios.
              <strong>¡No necesitas puntos para cobrarlos!</strong>
            </span>
          </div>
        </Slider>
      </div>
    </div >
  )
};

export default Walkthrough;