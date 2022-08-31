import './App.css';
import React, {useState} from 'react';
import Header from './componentes/header'
import Body from './componentes/body'
import Fotter from './componentes/fotter'
import Cards from './componentes/cards'
import Modal from './componentes/modal'

function App() {
  const [openModal, setOpenModal] = useState(false);  

  return (
    <div className="App">
      <Header />
      <Body />
      <div className="row">
        <Cards onClick={()=> setOpenModal(true)} />
        <Cards />
        <Cards />
        <Modal open={openModal} />
      </div>
      <Fotter />
    </div>
  );
}

export default App;
