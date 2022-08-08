import './App.css'
import { Header } from './components/Header'
import arrowLeft from './img/icons/left-arrow.png'
import arrowRight from './img/icons/right-arrow.png'

function App() {
  return (
    <div id='counter-container'>
      <Header imgDescription='Logo do react' title='React Counter'/>
      <div id='counter'>
        <div className='arrow-area'><img className='arrows' src={arrowLeft} alt='Flecha apontando para a esquerda.'></img></div>
        <div id='counter-area'>

        </div>
        <div className='arrow-area'><img className='arrows' src={arrowRight} alt='Flecha apontando para a direita.'></img></div>
      </div>
    </div>
  );
}

export default App;
