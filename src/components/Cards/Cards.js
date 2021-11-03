import { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';

import './Cards.css';
import 'antd/dist/antd.css';

import { Calcular } from '../../store/Simulador/SimuladorAction';
import { actionLata05, actionLata25, actionLata36, actionLata18 } from '../../store/Calcular/CalcularAction';
import { calcularQtdLatasTintas } from '../Calcular/Calcular';

let qualParede = 'primeiraParede';
let resultadoTotalParedeM2;
const INITIAL_PAREDES = {
  primeiraParede: {altura: 0, largura: 0, janela: 0, porta: 0},
  segundaParede: {altura: 0, largura: 0, janela: 0, porta: 0},
  terceiraParede: {altura: 0, largura: 0, janela: 0, porta: 0},
  quartaParede: {altura: 0, largura: 0, janela: 0, porta: 0},
}

export const Cards = () => {
  const dispatch = useDispatch();
  const positionParede = ['Primeira Parede', 'Segunda Parede', 'Terceira Parede', 'Quarta Parede'];
  const paredes = ['primeiraParede', 'segundaParede', 'terceiraParede', 'quartaParede'];
  const [value, setValue] = useState(INITIAL_PAREDES);
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

  
  function chaveRenderTextButton(value, chave) {
    if (chave === 1) {
      paredes.map((parede) => {
        setRenderTextButton((oldState) => {
          return { ...oldState, [parede]: value };
        });
        return 0;
      })
    } else if (chave === 2) {
      setRenderTextButton((oldState) => {
        return { ...oldState, [qualParede]: value };
      });
      setIsModalVisible(false);
    }
  }
  
  function handleOk() {
    if (value[qualParede].janela > 0 || value[qualParede].porta > 0) {
      const resultAlturaLargura = (value.primeiraParede.altura * value.primeiraParede.largura) / 2;
      const resultPortaJanela = ( 1.52 * value[qualParede].porta) + (2.4 * value[qualParede].janela);
      if (resultPortaJanela <= resultAlturaLargura) {
        chaveRenderTextButton(true, 2);
      } else {
        window.alert('O total de área das portas e janelas deve ser no máximo 50% da área de parede');
      }
    } else {
      chaveRenderTextButton(true, 2);
    }
  }
  
  const paredeComPorta = () => {
    if (value[qualParede].porta === 0) {
      handleOk();
    } else if (value[qualParede].porta > 0 && value[qualParede].altura > 2.2) {
      handleOk();
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
      <div className="boxDado">
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
      let aux = 0;
      paredes.map((inParede) => {
        aux = aux + (value[inParede].altura * value[inParede].largura) - ( 1.52 * value[inParede].porta) - (2.4 * value[inParede].janela);
        return 0;
      });
      resultadoTotalParedeM2 = aux;

      dispatch(Calcular(resultadoTotalParedeM2))
      setRedirect(true);
      calcularQtdLatasTintas(dispatch, resultadoTotalParedeM2, actionLata05, actionLata25, actionLata36, actionLata18);
    } else {
      window.alert('Adicione pelo menos 1(uma) Parede!');
    }
  };

  function onClickClearAll() {
    setValue(INITIAL_PAREDES);
    chaveRenderTextButton(false, 1);
  };

  function verificaLargura() {
    if ((value[qualParede].largura > 0) && (value[qualParede].largura) <= 15) {
      paredeComPorta()
    } else {
      window.alert('Largura incorreto');
    }
  }

  function verificaAltura() {
    if ((value[qualParede].altura > 0) && (value[qualParede].altura) <= 15) {
      verificaLargura()
    } else {
      window.alert('Altura incorreto');
    }
  }

  function modal() {
    return (
      <Modal title="Medida da parede" visible={isModalVisible} onOk={verificaAltura} onCancel={handleCancel}>
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
            <div key={index} className="item">
              <div className="dadoParede">
                { renderTextButton[auxParede] ?
                  renderDados(auxParede)
                  :  null
                }
              </div>
              <div className="buttonParede">
                <Button name={auxParede} type="primary" onClick={showModal}>
                  {renderTextButton[auxParede] ?
                      <p name={auxParede}>Editar {positionParede[index]}</p>
                    : <p name={auxParede}>{positionParede[index]}</p>
                  }
                </Button>
              </div>
            </div>
          )
        })}
        {modal()} 
      </div>
      <hr></hr>
      <div className="buttonCalcular">
        <button className="btn btn-primary" onClick={onClickClearAll}>Apagar tudo</button>
        <button className="btn btn-primary" onClick={onClickResult}>Calcular</button>
      </div>
    </div>
  );
};