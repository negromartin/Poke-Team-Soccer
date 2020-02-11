import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import  Jugadores from './components/Jugadores';
import  EquipoSeleccionado from './components/EquipoSeleccionado';
import './styles/style.scss';
import icon from './imagenes/pokeball.png';

const App=()=>(
  
  <Provider store={store}>
    <main>
      <h1>Poke-Team-Soccer <img className="icon" src={icon} alt=""/></h1>
       <Jugadores />
       <EquipoSeleccionado />
    </main>
  </Provider>

)



export default App;
