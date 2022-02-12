import { useEffect, useState } from 'react'
import titleimg from '../../../public/image/titleBlockImg/Frame4436813.png'
import s from './titleBlock.module.css'

export default function TitleBlock() {
  const [windows, setWindow] = useState(false)
  useEffect(()=> {
    if (window) {
      setWindow(true)
    }
  },[])
  return (
    <div className={ s.coverTitleBlock } >
      <div className={ s.coverColumns }>
        <div className={ s.coverLeftColumn }>
          <div>
            <h1 className={ s.mainText }>
              Website { windows && window.innerWidth > 900 && <br />}
              <p className={ s.coralTxt }  >creation & redesign</p>
            </h1>
            <p className={ s.textGrey }>
                Building a digital world!        
            </p>
          </div>
          <img className={s.mobileCnt} src={'./image/titleBlockImg/main.png'}
             alt="img laptop phone and PC" />
          <button className={ s.LearnMore } >
            <a href="#services">
              Learn more
            </a>
          </button>
        </div>
        <div className={ s.coverRightColumn }>
          <img src={'./image/titleBlockImg/main.png'}
             alt="img laptop phone and PC" />
        </div>
      </div>
    </div >
  )
}