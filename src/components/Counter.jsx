import { useState, useEffect } from 'react'
import style from './Counter.module.css'
import arrowLeft from '../img/icons/left-arrow.png'
import arrowRight from '../img/icons/right-arrow.png'

export function Counter() {

  // useStates
  const [number, setNumber] = useState(0)
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1100)

  // Function counter
  function count(type) {

    if (type === 1) {
        setNumber(number + 1)
      }

    else if (type === 2) {
        setNumber(number - 1)
      }
    }
    
  // Check the window size
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1100);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })

  return  (
    <>
      {isDesktop ? (
        <div id={style.counter}>
            <img className={style.arrows} onClick={ () => count(2)} src={arrowLeft} alt='Flecha apontando para a esquerda.'></img>
            <div id={style.counterArea}>
              <p>{number}</p>
            </div>
            <img className={style.arrows} onClick={ () => count(1)} src={arrowRight} alt='Flecha apontando para a direita.'></img>
        </div>
      ) : (
        <div id={style.counter}>
          <div id={style.counterArea}>
            <p>{number}</p>
          </div>
          <div>
            <img className={style.arrows} onClick={ () => count(2)} src={arrowLeft} alt='Flecha apontando para a esquerda.'></img>
            <img className={style.arrows} onClick={ () => count(1)} src={arrowRight} alt='Flecha apontando para a direita.'></img>
          </div>
        </div>
      )}
    </>
  )
}
