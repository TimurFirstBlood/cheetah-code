import s from './howtoGet.module.css'
import pin from '../../../public/image/howToGet/Finish.svg'
import { useEffect, useState } from 'react'

export default function HowToGet() {

    const [windows, setWindow] = useState(false)
    useEffect(()=> {
      if (window) {
        setWindow(true)
      }
    },[])

    const infoData = [
        {
            img: '/image/howToGet/Icons.svg',
            text: 'Technical task'
        },
        {
            img: '/image/howToGet/Icons1.svg',
            text: 'Information architecture'
        },
        {
            img: '/image/howToGet/Icons2.svg',
            text: 'Creating a layout'
        },
        {
            img: '/image/howToGet/Icons3.svg',
            text: 'Creating a design'
        },
        {
            img: '/image/howToGet/Icons4.svg',
            text: 'Design agreement'
        },
        {
            img: '/image/howToGet/Icons5.svg',
            text: 'Writing code'
        },
        {
            img: '/image/howToGet/Icons6.svg',
            text: 'Fixing bugs'
        },
        {
            img: '/image/howToGet/Icons7.svg',
            text: 'Website agreement'
        },
        {
            img: '/image/howToGet/Icons8.svg',
            text: 'Uploading website'
        },
    ]


    const infoTable = infoData.map((e) => {
            return(
            <div key={Math.random()} className={s.tableItem} >
                <img src={e.img} alt="" />
                <p>
                    {e.text}
                </p>
            </div>
        )
    }
      
    )
      
    //mobileSnake.png
    return(
        <div className={s.howToget} id={"getAWebsite"} >
            <h2>How to get a website?</h2>
            <div className={s.content} >
          { windows && window.innerWidth > 900 ? <img src="/image/howToGet/snake.jpg" alt="" />
          :  <img src="/image/howToGet/mobileSnake.png" alt="" />}

            <div className={s.contentInfo} >
                <div className={s.infoTable} >
                    {infoTable}
                </div>
                <div className={s.finish} >
                        <p>Finished website</p>
                        <img src={pin} alt="finish" />
                    </div>
            </div>
            </div>
        </div>
    )
}
