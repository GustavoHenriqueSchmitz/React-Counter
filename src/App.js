import './App.css'
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <div id='counter-container'>
        <Header imgDescription='Logo do react' title='React Counter'/>
        <Counter/>
      </div>
      <Analytics/>
    </>
  )
}

export default App
