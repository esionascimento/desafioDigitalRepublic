import { useState } from 'react';
import { Modal, Button } from 'antd';

import './Cards.css';
import 'antd/dist/antd.css';

let qualParede;

export const Cards = () => {
  const [value, setValue] = useState({
    primeiraParede: {altura: '', largura: '', janela: '', porta: ''},
    segundaParede: {altura: '', largura: '', janela: '', porta: ''},
    terceiraParede: {altura: '', largura: '', janela: '', porta: ''},
    quartaParede: {altura: '', largura: '', janela: '', porta: ''},
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [renderTextButton, setRenderTextButton] = useState({
    primeiraParede: false,
    segundaParede: false,
    terceiraParede: false,
    quartaParede: false,
  });
  
  /* function onChangeGenerico(event) {
    setValue(prevState => {
      return {
        ...prevState,
        [qualParede.event.target.name] : event.target.value
      }
    });
    console.log(value.primeiraParede);
  } */
  const showModal = (event) => {
    setIsModalVisible(true);
    console.log('event.target.getAttribute', event.target.getAttribute('name'));
    qualParede = event.target.getAttribute('name');
  };
  
  const  onChange = (event) => {
    setValue(prevState => {
      return {
        ...prevState,
        [qualParede] : {...prevState[qualParede], [event.target.getAttribute('name')]: event.target.value }
      }
    });
    console.log(value);
  }
  
  const handleOk = (event) => {
    console.log('qualParede :', qualParede);
    if (qualParede === 'primeiraParede') {
      setRenderTextButton((oldState) => {
        return { ...oldState, primeiraParede: !oldState.primeiraParede };
      });
    } else if (qualParede === 'segundaParede') {
      setRenderTextButton((oldState) => {
        return { ...oldState, segundaParede: !oldState.segundaParede };
      });
    } else if (qualParede === 'terceiraParede') {
      setRenderTextButton((oldState) => {
        return { ...oldState, terceiraParede: !oldState.terceiraParede };
      });
    } else if (qualParede === 'quartaParede') {
      setRenderTextButton((oldState) => {
        return { ...oldState, quartaParede: !oldState.quartaParede };
      });
    }
    console.log('event', event)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="card">
      <div>
        <p>Cada litro de tinta é capaz de pintar 5 metros quadrados</p>
        <p>Não considerar teto nem piso</p>
        <p>As variações de tamanho das latas de tinta são: 0,5L; 2,5L; 3,6L; 18L</p>
      </div>
      <div className="paredes">
        <div name="pare" className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.primeiraParede ?
                <div name="primeiraParede">Ok
                  {/* <p>Altura: {value.primeiraParede.altura}</p>
                  <p>Largura: {value.primeiraParede.largura}</p>
                  <p>Janela: {value.primeiraParede.janela}</p>
                  <p>Porta: {value.primeiraParede.porta}</p> */}
                </div>
              : <p name="primeiraParede">Primeira Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.segundaParede ?
                <div name="segundaParede">Ok
                </div>
              : <p name="segundaParede">Segunda Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.terceiraParede ?
                <div name="terceiraParede">Ok
                </div>
              : <p name="terceiraParede">Terceira Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.quartaParede ?
                <div name="quartaParede">Ok
                </div>
              : <p name="quartaParede">Quarta Parede</p>
            }
          </Button>
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <label>Altura da parede
            <input type="number" name="altura" onChange={onChange} required/>
          </label>
          <label>Largura da parede
            <input type="number" name="largura" onChange={onChange} required/>
          </label>
          <label >Quantas portas
            <input name="porta" onChange={onChange} type="number"/>
          </label>
          <label >Quantas janelas
            <input name="janela" onChange={onChange} type="number"/>
          </label>
        </Modal>
      </div>
      <div>
        <button onClick={()=> {
          
        }}>Calcular</button>
      </div>
    </div>
  );
}