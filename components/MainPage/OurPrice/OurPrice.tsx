import s from './OurPrice.module.css'
export default function OurPrice () {

    const dataList = [
        {
            title: 'Website redesign',
            from: 'From $80',
            descr: '800+ users choosen use it'
        },
        {
            title: 'Website creating ',
            from: 'From $100',
            descr: '1000+ users choosen use it'
        }, 
        {
            title: 'Other services - ',
            from: 'Negotiable price',
            descr: '200+ users choosen use it'
        },
    ]
    const list  = dataList.map((e, i) => {
        return(
            <div key={Math.random()} className={s.listElem} >
                <p className={s.title} >{e.title}</p>
                <div>
                    <p className={s.from}
                        style={
                            dataList.length-1 == i ?
                            {
                                fontSize: 34,
                                fontWeight: 500,
                                letterSpacing: 0.25,
                                fontFamily: 'Roboto',
                                color: '#00BAD4'
                            } : {}
                        }
                    >{e.from}</p>
                    <p className={s.desc} >{e.descr}</p>
                </div>
                <button className={s.LearnMore} >
                   Choose
                </button>
            </div>
        )
    })

    return(
        
            <div className={s.prices} id={"prices"} >
                <div className={s.titleInfo} >
                    <h2>Our prices</h2>
                    <p>Being experts with considerable experience, we set the most reasonable pricing policy for our services. Check it here:</p>
                </div>
                <div className={s.list} >
                    {list}
                </div>
            </div>
   
    )
}