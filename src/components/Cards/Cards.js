import { useState } from 'react';
import { Modal, Button } from 'antd';

import './Cards.css';
import 'antd/dist/antd.css';

let qualParede = 'primeiraParede';

export const Cards = () => {
  const [value, setValue] = useState({
    primeiraParede: {altura: 0, largura: 0, janela: 0, porta: 0},
    segundaParede: {altura: 0, largura: 0, janela: 0, porta: 0},
    terceiraParede: {altura: 0, largura: 0, janela: 0, porta: 0},
    quartaParede: {altura: 0, largura: 0, janela: 0, porta: 0},
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
    console.log('event :', event);
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
  
  function paredeComPorta() {
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
    setIsModalVisible(false);
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

  return (
    <div className="card">
      <div>
        <p>Cada litro de tinta é capaz de pintar 5 metros quadrados</p>
        <p>Não considerar teto nem piso</p>
        <p>As variações de tamanho das latas de tinta são: 0,5L; 2,5L; 3,6L; 18L</p>
      </div>
      <div className="paredes">
        <div name="pare" className="item">
          <Button name="primeiraParede" type="primary" onClick={showModal}>
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
          <Button name="segundaParede" type="primary" onClick={showModal}>
            {renderTextButton.segundaParede ?
                <div name="segundaParede">Ok
                </div>
              : <p name="segundaParede">Segunda Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button name="terceiraParede" type="primary" onClick={showModal}>
            {renderTextButton.terceiraParede ?
                <div name="terceiraParede">Ok
                </div>
              : <p name="terceiraParede">Terceira Parede</p>
            }
          </Button>
        </div>
        <div className="item">
          <Button name="quartaParede" type="primary" onClick={showModal}>
            {renderTextButton.quartaParede ?
                <div name="quartaParede">Ok
                </div>
              : <p name="quartaParede">Quarta Parede</p>
            }
          </Button>
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={() => {
          if (value[qualParede].altura > 0 && value[qualParede].largura > 0) {
            handleOk()
          } else {
            window.alert('Altura ou Largura incorreto');
          }
          }} onCancel={handleCancel}>
          <label>Altura da parede
            <input value={value[qualParede].altura} type="number" name="altura" onChange={onChange} min="1" max="15" required/>
          </label>
          <label>Largura da parede
            <input value={value[qualParede].largura} type="number" name="largura" min="1" max="15" onChange={onChange} required/>
          </label>
          <label >Quantas portas
            <input value={value[qualParede].porta} name="porta" onChange={onChange} min="0"  max="3" type="number"/>
          </label>
          <label >Quantas janelas
            <input value={value[qualParede].janela} name="janela" onChange={onChange} min="0" max="3" type="number"/>
          </label>
        </Modal>
      </div>
      <div>
        <button onClick={()=> {
          const parede1 = (value.primeiraParede.altura * value.primeiraParede.largura) - ( 1.52 * value.primeiraParede.porta) - (2.4 * value.primeiraParede.janela);
          console.log('parede1 :', parede1);
          const parede2 = (value.segundaParede.altura * value.segundaParede.largura) - ( 1.52 * value.segundaParede.porta) - (2.4 * value.segundaParede.janela);;
          const parede3 = (value.terceiraParede.altura * value.terceiraParede.largura) - ( 1.52 * value.terceiraParede.porta) - (2.4 * value.terceiraParede.janela);;
          const parede4 = (value.quartaParede.altura * value.quartaParede.largura) - ( 1.52 * value.quartaParede.porta) - (2.4 * value.quartaParede.janela);;
          const resultadoTotalParedeM2 = parede1 + parede2 + parede3 + parede4;
          const resultadoTotalTinta = resultadoTotalParedeM2 / 5;
          console.log('resultadoTotalTinta :', resultadoTotalTinta);
        }}>Calcular</button>
      </div>
    </div>
  );
}