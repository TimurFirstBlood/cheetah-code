import s from './preferences.module.css'
import iconImg from '../../../public/image/preferences/listIcon.svg'

export default function Preferences () {

const listData = [
    'Personal approach to every customer',
    '7 years of experience in creating websites that bring value to the business',
    'Effective building of the website redesign strategy',
    'Honest pricing policy',
    'Fresh vision of the digital world',
    'Fast and efficient services'
]

    const list = listData.map((e) => {
        return(
            <div key={Math.random()} className={s.listElem} >
                <img src={iconImg} alt="" />
                <p>
                   {e}
                </p>
            </div>
        )
    })

    return(
        <div className={s.background} id={"preferences"} >
            <div className={s.wrap} >
                <h2>
                   Preferences
                </h2>
                <div className={s.content} >
                    <img src={'image/preferences/preferences.png'} alt="" />
                    <div>
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}