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
  
  function onChangeGenerico(event, qualParede) {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
  }
  const showModal = (event) => {
    setIsModalVisible(true);
    qualParede = event.target.attributes.name.nodeValue;
  };
  
  const  onChange = (event) => {
    onChangeGenerico(qualParede);
    console.log(event.target);
    setValue({
      ...value,
      [event.target.name]: event.target.value
    });
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
    } else {
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
                <p name="">oi</p>
              : <p name="primeiraParede">Primeira Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.segundaParede ?
                <p name="">deu certo segunda parede</p>
              : <p name="segundaParede">Segunda Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.terceiraParede ?
                <p name="">deu certo segunda parede</p>
              : <p name="terceiraParede">Terceira Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button type="primary" onClick={showModal}>
            {renderTextButton.quartaParede ?
                <div>
                  <button>Editar Quarta Parede</button>
                </div>
              : <p name="quartaParede">Quarta Parede</p>
            }
          </Button>
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <label>Altura da parede
            <input name="altura" onChange={onChange}/>
          </label>
          <label name="largura" onChange={onChange}>Largura da parede
            <input />
          </label>
          <label name="porta" onChange={onChange}>Quantas portas
            <input type="number"/>
          </label>
          <label name="janela" onChange={onChange}>Quantas janelas
            <input type="number"/>
          </label>
        </Modal>
      </div>
    </div>
  );
}