import s from './Reviews.module.css'
import data from './data.json'
import Facebook from '../../../public/image/Reviwes/Facebook.svg'
import React from 'react'
import Marquee from "react-fast-marquee";


export default function Reviews () {
    
    const userList = data.data.map((e, i) => {
        const name = e.img.substring(e.img.lastIndexOf('/') + 1, e.img.lastIndexOf('.'))
        return(
            <div key={Math.random()} className={s.listElement} style={ i%2 == 0 ? {background: '#2C323E'} : {background: 'rgba(0, 0, 0, 0.87)'}} >
                <div className={s.titleInfo} >
                    <div>
                        <img src={e.img} alt="userPhoto" />
                        <p  >{name}</p>
                    </div>
                    <img src={Facebook} alt="Facebook" />
                </div>
                <p>{e.text}</p>
            </div>
        )
    })

    const userListBottom = data.dataBottom.map((e, i) => {
        const name = e.img.substring(e.img.lastIndexOf('/') + 1, e.img.lastIndexOf('.'))
        return(
            <div key={Math.random()} className={s.listElement} style={ i%2 != 0 ? {background: '#2C323E'} : {background: 'rgba(0, 0, 0, 0.87)'}} >
                <div className={s.titleInfo} >
                    <div>
                        <img src={e.img} alt="userPhoto" />
                        <p  >{name}</p>
                    </div>
                    <img src={Facebook} alt="Facebook" />
                </div>
                <p>{e.text}</p>
            </div>
        )
    })

    return(
        <div className={s.wrap} id={"revivers"} >
                <h2>Reviews</h2>
                <Marquee 
                style={{alignItems:'unset'}}
                gradient={false}>
                    <div className={s.marquee} >
                         <div className={s.rewiversList} >
                            {userList}
                         </div>
                         <div className={s.wrapList} >
                              <div  className={s.rewiversListBottom } >
                                  {userListBottom}
                             </div>
                         </div>
                        
                    </div>
                   
                </Marquee>
        </div>
    )
}