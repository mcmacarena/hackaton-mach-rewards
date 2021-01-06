import React, { useContext, useState } from "react";
import "../Profile/styles/Profile.css";
import { ContextUser } from "../../../App";
import data from "../../../data/users.json";
import Pig from "../../../img/pigBank.svg";
import Puño from "../../../img/puño.svg";
import tarjeta from "../../../img/cardMach.svg";
import nextCategory from "../../../img/mountain.svg";
import desafio from "../../../img/desafioDelDia.svg";
import ProgressBar from "react-customizable-progressbar";
import imgBoton from "../../../img/Historial_icono.png";
import logoColores from "../../../img/pointsIcon.svg";
import CountUp from "react-countup";
import History from "./History";
import Filter from "../Beneficios/Filter";

const UserProfile = () => {
  const [user]= useContext(ContextUser);
  const [modalHistory,setModalHistory]=useState(false);

  const category = user === 0 ? "MACH Explorer" : "MACH Lover";
  const classPointsChallenge =
    user === 0 ? "textPointsBegginer" : "textPointsAdvance";
  const classNumberBenefitsProfile =
    user === 0 ? "numberBenefitsPointsBegginer" : "numberBenefitsPointsAdvance";

  return (
    <div className="profile">
      <img
        className="logoBeginner"
        src={data[user].perfil.logoCategoria}
        alt="logoCategoria"
      />
      <div className="containerPointsProfile">
        {/* primera carta */}
        <section className="cardProfile">
          <div className='containerIconInfo'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.2997 2.91965C12.0608 2.20483 10.6453 1.85418 9.21598 1.90803C7.78667 1.96189 6.40158 2.41805 5.21998 3.22407C4.03839 4.03008 3.10827 5.15323 2.53658 6.46434C1.9649 7.77545 1.77486 9.2213 1.98832 10.6356C2.20178 12.0499 2.81007 13.3753 3.74325 14.4593C4.67642 15.5432 5.89659 16.3418 7.26343 16.7632C8.63028 17.1846 10.0883 17.2117 11.4698 16.8413C12.8514 16.4709 14.1003 15.7181 15.0731 14.6695C15.2451 14.4887 15.4814 14.3829 15.7309 14.375C15.9803 14.367 16.2229 14.4576 16.4061 14.6271C16.5893 14.7966 16.6984 15.0313 16.7099 15.2806C16.7214 15.53 16.6343 15.7738 16.4674 15.9594C13.521 19.1414 8.66627 19.9868 4.75095 17.7261C0.207784 15.1045 -1.34903 9.29418 1.27447 4.75098C3.89608 0.207785 9.70636 -1.34904 14.2495 1.27448C18.1648 3.53516 19.8613 8.16099 18.5771 12.3043C18.5427 12.4263 18.4843 12.5403 18.4052 12.6394C18.3261 12.7384 18.228 12.8207 18.1166 12.8813C18.0052 12.9418 17.8828 12.9795 17.7567 12.992C17.6305 13.0046 17.5031 12.9917 17.382 12.9543C17.2609 12.9168 17.1485 12.8554 17.0515 12.7738C16.9544 12.6922 16.8747 12.592 16.817 12.4791C16.7593 12.3663 16.7248 12.243 16.7155 12.1165C16.7062 11.9901 16.7223 11.863 16.7629 11.7429C17.2706 10.0971 17.2044 8.32772 16.5753 6.72443C15.9461 5.12113 14.7912 3.77898 13.2997 2.91775V2.91965ZM10.4501 4.75098C10.4501 5.0029 10.35 5.2445 10.1719 5.42264C9.99376 5.60077 9.75216 5.70085 9.50024 5.70085C9.24832 5.70085 9.00672 5.60077 8.82859 5.42264C8.65046 5.2445 8.55038 5.0029 8.55038 4.75098C8.55038 4.49906 8.65046 4.25746 8.82859 4.07933C9.00672 3.90119 9.24832 3.80112 9.50024 3.80112C9.75216 3.80112 9.99376 3.90119 10.1719 4.07933C10.35 4.25746 10.4501 4.49906 10.4501 4.75098ZM10.4501 7.60057C10.4501 7.34866 10.35 7.10705 10.1719 6.92892C9.99376 6.75079 9.75216 6.65071 9.50024 6.65071C9.24832 6.65071 9.00672 6.75079 8.82859 6.92892C8.65046 7.10705 8.55038 7.34866 8.55038 7.60057V14.2496C8.55038 14.5015 8.65046 14.7431 8.82859 14.9213C9.00672 15.0994 9.24832 15.1995 9.50024 15.1995C9.75216 15.1995 9.99376 15.0994 10.1719 14.9213C10.35 14.7431 10.4501 14.5015 10.4501 14.2496V7.60057Z" fill="#EE9B00" />
            </svg>
          </div>
          <ProgressBar
            className="progressBar"
            strokeColor="#EE9B00"
            progress={40}
            radius={40}
            strokeWidth={10}
            trackStrokeWidth={10}
            initialAnimation="false"
            initialAnimationDelay={0}
            transition="0.6 ease"
            steps={100}
          />
          <div className="containerNextPoints">
            <img src={logoColores} alt="" />
            <span className="textCardPoints">
              Hasta <strong>50.000 puntos</strong>
            </span>
          </div>
          <div className="containerTextCardProfile">
            <span className="textNextCategory">Próxima categoría:</span>
            <span>{category}</span>
          </div>
        </section>
        {/* segunda carta */}
        <section className="cardProfile">
          <img className="fotoDesafio" src={desafio} alt="" />
          <span className={classPointsChallenge}>
            <strong>+3000 </strong>Puntos
          </span>
          <span className="textChallengeDay">Desafío del día</span>
          <span>Paga una cuenta de servicio con MACH</span>
        </section>
      </div>
      <button className="boton-historial" onClick={()=> setModalHistory(!modalHistory)}>
        <img className="iconButtonProfile" src={imgBoton} alt="" />
        Mi historial
      </button>
      <History filter={modalHistory} setFilter={setModalHistory}/>
      <div className="containerBenefitsProfile">
        <span className="titleBenefits">Tus ganancias MACHer</span>
        <span className="textBenefits">
          Revisa las ganacias que has obtenido con MACH
        </span>
        <div className="containerCardsBefitsProfile">
          <div className="boxProfile">
            <img src={Pig} alt="pig" />

            <CountUp start={0} end={data[user].perfil.dineroAhorrado} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span className={classNumberBenefitsProfile}>$</span>
                  <span
                    className={classNumberBenefitsProfile}
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
            <span className="textBenefitsProfile">
              Dinero ahorrado, usando los beneficios MACH
            </span>
          </div>

          <div className="boxProfile">
            <img src={Puño} alt="" />
            <div className="containerNumbersCount">
            <img src={logoColores} alt="" />
              <CountUp start={0} end={data[user].perfil.puntosAmigos} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span
                    className={classNumberBenefitsProfile}
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
            </div>
            <span className="textBenefitsProfile">
              Dinero ahorrado, usando los beneficios MACH
            </span>
          </div>
          <div className="boxProfile">
            <img src={tarjeta} alt="" />
            <div>
              <img src={logoColores} alt="" />
              <span className={classNumberBenefitsProfile}>
              <CountUp start={0} end={data[user].perfil.puntosCarga} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span
                    className={classNumberBenefitsProfile}
                    ref={countUpRef}
                  />
                </div>
              )}
            </CountUp>
              </span>
            </div>
            <span className="textBenefitsProfile">
              Dinero ahorrado, usando los beneficios MACH
            </span>
          </div>
          <div className="boxProfile">
            <img src={nextCategory} alt="" />
            <div>
              <img src={logoColores} alt="" />
              <span className={classNumberBenefitsProfile}>
              <CountUp start={0} end={data[user].perfil.puntosProxCategoria} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span
                    className={classNumberBenefitsProfile}
                    ref={countUpRef}
                  />
                </div>
              )}

              </CountUp>
              </span>
            </div>
            <span className="textBenefitsProfile">
              Dinero ahorrado, usando los beneficios MACH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
