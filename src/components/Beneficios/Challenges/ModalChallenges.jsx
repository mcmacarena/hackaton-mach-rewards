import React,{useContext, useState} from 'react';
import './Styles/ModalChallenges.css';
import './Styles/Challenges.css';
import { ContextUser } from '../../../App.js';
import closeIcon from '../../../img/close.svg';
import BanderaModal from '../../../img/BanderaDesafioModal.svg';
import Logoptos from '../../../img/logPtos.svg';
import copyIcon from '../../../img/CopyIcon.svg';

const ModalChallenge = (props) => {
	const [user] = useContext(ContextUser);

	const [modalChallenge, setModalChallenge] = useState(false);

	return (
		<div>
			<div className="cardChallengePpal" >
			{modalChallenge === false ? null : <div className="modalChallenge">
        <div className="modalContentChallenge">
          <img src={closeIcon} alt='closeIcon' className="closeModalChallenge" onClick={() => setModalChallenge(false)} />    
		  <img className ="imgModal"src={props.data.foto} alt="" srcSet="" />
		  <div className="challengeBanner">
		  
			  <p className="titleBanner"> <img src= {BanderaModal} className="iconoChallenge" alt=""/> Desafío</p>  
		  </div>
		  <div className="infoModal">
			  <div className="pointsModal">
			  <p><img src= {Logoptos} alt=""/>{props.data.puntos}</p>
			  </div>
			  <div className="textModal">
				  <p className="titleModal">{props.data.titulomodal}</p>
				  <p className="paragraphModal">{props.data.textomodal}</p>
			  </div>
			  <div className ="copyLink">
				  <p className="instructionCopy">Copia el link de descarga</p>
				  <p className="linkDownload"> https://bajamach.com/MGyXjoQGocv <img className="copyIcon" src={copyIcon} alt=""/> </p>
			  </div>
		  </div>
		
		</div>
      </div>}
				<img src={props.data.foto} className="photoCard"alt="" srcset="" />
				<div className="cardTextPpal">
					<p className="pointsPpal">{props.data.puntos}</p>
					<p className="cardSubtitlePpal">{props.data.titulo}</p>
					<p className="cardExplanationPpal">{props.data.Explicacion}</p>
				</div>
				<button className="btnDesafio"  onClick={() => setModalChallenge(!modalChallenge)}>
					{props.data.textobton}
				</button>
			</div>
		</div>
	);
}

export default ModalChallenge;