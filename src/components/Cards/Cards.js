import { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';

import './Cards.css';
import 'antd/dist/antd.css';

import { Calcular } from '../../store/Simulador/SimuladorAction';
import { actionLata05, actionLata25, actionLata36, actionLata18 } from '../../store/Calcular/CalcularAction';

let qualParede = 'primeiraParede';
let resultadoTotalParedeM2;

export const Cards = () => {
  const dispatch = useDispatch();
  const positionParede = ['Primeira Parede', 'Segunda Parede', 'Terceira Parede', 'Quarta Parede'];
  const paredes = ['primeiraParede', 'segundaParede', 'terceiraParede', 'quartaParede'];
  const [value, setValue] = useState({
    primeiraParede: {altura: 0, largura: 0, janela: 0, porta: 0},
    segundaParede: {altura: 0, largura: 0, janela: 0, porta: 0},
    terceiraParede: {altura: 0, largura: 0, janela: 0, porta: 0},
    quartaParede: {altura: 0, largura: 0, janela: 0, porta: 0},
  });
  const [redirect, setRedirect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [renderTextButton, setRenderTextButton] = useState({
    primeiraParede: false,
    segundaParede: false,
    terceiraParede: false,
    quartaParede: false,
  });
  
  const showModal = (event) => {
    setIsModalVisible(true);
    qualParede = event.target.getAttribute('name');
  };
  
  const  onChange = (event) => {
    setValue(prevState => {
      return {
        ...prevState,
        [qualParede] : {...prevState[qualParede], [event.target.getAttribute('name')]: event.target.value }
      }
    });
  }

  function calcularQtdLatasTintas() {
    let lata05 = 0, lata25 = 0, lata36 = 0, lata18 = 0;
    let litroTintas = resultadoTotalParedeM2 / 5;
    while (litroTintas > 0) {
      if (litroTintas >= 18) {
        litroTintas = litroTintas - 18
        lata18 += 1;
      } else if (litroTintas >= 3.6) {
        litroTintas = litroTintas - 3.6;
        lata36 += 1;
      } else if (litroTintas >= 2.5) {
        litroTintas = litroTintas - 2.5;
        lata25 += 1;
      } else {
        litroTintas = litroTintas - 0.5;
        lata05 += 1;
      }
    }
    if (lata05 > 0) {
      dispatch(actionLata05(lata05));
    }
    if (lata25 > 0) {
      dispatch(actionLata25(lata25));
    }
    if (lata36 > 0) {
      dispatch(actionLata36(lata36));
    }
    if (lata18 > 0) {
      dispatch(actionLata18(lata18));
    }
  }

  function chaveRenderTextButton() {
    setRenderTextButton((oldState) => {
      return { ...oldState, [qualParede]: true };
    });
    setIsModalVisible(false);
  }
  
  function paredeComPorta() {
    if (value[qualParede].janela > 0 || value[qualParede].porta > 0) {
      console.log('cheguei 1');
      const resultAlturaLargura = (value.primeiraParede.altura * value.primeiraParede.largura) / 2;
      const resultPortaJanela = ( 1.52 * value[qualParede].porta) + (2.4 * value[qualParede].janela);
      if (resultPortaJanela <= resultAlturaLargura) {
        chaveRenderTextButton();
      } else {
        window.alert('O total de área das portas e janelas deve ser no máximo 50% da área de parede');
      }
    } else {
      chaveRenderTextButton();
    }
  }
  
  const handleOk = () => {
    if (value[qualParede].porta === 0) {
      paredeComPorta();
    } else if (value[qualParede].porta > 0 && value[qualParede].altura > 2.2) {
      paredeComPorta();
    } else {
      window.alert('A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (redirect) {
    return <Redirect to="/dashboard/resultado" />
  }

  function renderDados(parede) {
    return (
      <div>
        <span>Altura: {value[parede].altura}</span>
        <span>Largura: {value[parede].largura}</span>
        <span>Janela: {value[parede].janela}</span>
        <span>Porta: {value[parede].porta}</span>
      </div>
    );
  };

  function onClickResult() {
    if (renderTextButton.primeiraParede || renderTextButton.segundaParede
        || renderTextButton.terceiraParede || renderTextButton.quartaParede) {
      const parede1 = (value.primeiraParede.altura * value.primeiraParede.largura) - ( 1.52 * value.primeiraParede.porta) - (2.4 * value.primeiraParede.janela);
      const parede2 = (value.segundaParede.altura * value.segundaParede.largura) - ( 1.52 * value.segundaParede.porta) - (2.4 * value.segundaParede.janela);;
      const parede3 = (value.terceiraParede.altura * value.terceiraParede.largura) - ( 1.52 * value.terceiraParede.porta) - (2.4 * value.terceiraParede.janela);;
      const parede4 = (value.quartaParede.altura * value.quartaParede.largura) - ( 1.52 * value.quartaParede.porta) - (2.4 * value.quartaParede.janela);;
      resultadoTotalParedeM2 = parede1 + parede2 + parede3 + parede4;
  
      dispatch(Calcular(resultadoTotalParedeM2))
      setRedirect(true);
      calcularQtdLatasTintas();
    } else {
      window.alert('Adicione pelo menos 1(uma) Parede!');
    }
  };

  function modal() {
    return (
      <Modal title="Medida da parede" visible={isModalVisible} onOk={() => {
        if ((value[qualParede].altura && value[qualParede].largura) > 0
            && (value[qualParede].altura && value[qualParede].largura) <= 15) {
          handleOk()
        } else {
          window.alert('Altura ou Largura incorreto');
        }
        }} onCancel={handleCancel}>
        <label className="label" forHTML="altura">Altura da parede 
          <input id="altura" className="input" value={value[qualParede].altura} type="number" name="altura" onChange={onChange} min="1" max="15" required step="0.1"/>
        </label>
        <label className="label" >Largura da parede
          <input value={value[qualParede].largura} className="input"  type="number" name="largura" min="1" max="15" onChange={onChange} required step="0.1"/>
        </label>
        <label className="label"  >Quantas portas
          <input value={value[qualParede].porta} className="input"  name="porta" onChange={onChange} min="0"  max="3" type="number"/>
        </label>
        <label className="label"  >Quantas janelas
          <input value={value[qualParede].janela} className="input"  name="janela" onChange={onChange} min="0" max="3" type="number"/>
        </label>
      </Modal>
    );
  };
  
  return (
    <div className="card">
      <div className="paredes">
        {paredes.map((auxParede, index) => {
          return (
            <div className="item">
              { renderTextButton[auxParede] ?
                renderDados(auxParede)
                : null
              }
              <Button name={auxParede} type="primary" onClick={showModal}>
                {renderTextButton.auxParede ?
                    <div name={auxParede}>Editar {positionParede[index]}
                    </div>
                  : <p name={auxParede}>{positionParede[index]}</p>
                }
              </Button>
            </div>
          )
        })}
        {modal()} 
      </div>
      <div className="buttonCalcular">
        <button class="btn btn-primary" onClick={onClickResult}>Calcular</button>
      </div>
    </div>
  );
};