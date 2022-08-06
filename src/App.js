import './App.css'
import { Header } from './components/Header'

function App() {
  return (
    <div id="counter-container">
      <Header imgDescription='Logo do react' title='React Counter'/>
      <div id="counter"></div>
    </div>
  );
}

export default App;
