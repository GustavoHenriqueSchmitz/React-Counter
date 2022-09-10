import './App.css'
import { Counter } from './components/Counter';
import { Header } from './components/Header'

function App() {

  return (
    <div id='counter-container'>
      <Header imgDescription='Logo do react' title='React Counter'/>
      <Counter/>
    </div>
  )
}

export default App
