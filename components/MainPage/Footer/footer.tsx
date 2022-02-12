import s from './footer.module.css'
import logo from '../../../public/image/footer/logo.svg'
export default function Footer() {
    return(
        <div className={s.wrap} >
            <div className={s.footer} >
                    <div className={s.logo} >
                        <img src={logo} alt="" />
                        <p>Cheetah Code</p>
                    </div>
                    <div className={s.info} >
                        <p>Mon - Fri</p>
                        <p>09:00 am - 06:00 pm</p>
                    </div>
                    <div className={s.info} >
                        <p>Our mail</p>
                        <p>Cheetahcode@gmail.com</p>
                    </div>  
                    <input type="text" placeholder={'Your name'} />
                    <input type="text" placeholder={'Your Question'}/>
                    <button className={s.question} > Send question </button>
           </div>
           <div className={s.descr} >
               <p>Copyright © 2021 Cheetah Code - Bespoke fulfilment - All Rights Reserved.</p>
           </div>
        </div>
     
    )
}