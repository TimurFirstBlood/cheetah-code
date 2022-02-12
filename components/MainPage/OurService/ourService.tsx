import s from './ourService.module.css'
export default function OurService() {

    const serviceListData = [
        {
            img: '/image/ourService/liseElem1.jpg',
            text: 'Custom website creating'
        },
        {
            img: '/image/ourService/liseElem2.jpg',
            text: 'Custom website design.'
        },
        {
            img: '/image/ourService/liseElem3.jpg',
            text: 'Website maintenance'
        },
        {
            img: '/image/ourService/liseElem4.jpg',
            text: 'Ongoing support'
        },
        {
            img: '/image/ourService/liseElem5.jpg',
            text: 'Additional website features '
        },
        {
            img: '/image/ourService/liseElem6.jpg',
            text: 'Other services'
        },
    ]

    const serviceList = serviceListData.map((e) => {
        return(
            <div
                 className={s.listElem}
                key={Math.random()}
                style={{background: `url('${e.img}')`}}
            >
                <div>
                    <p>{e.text}</p>
                </div>
            </div>
        )
    })

    return (
        <div  className={s.background} id={"services"} >
            <div className={s.wrap} >
                <h2>Our services</h2>
                <div className={s.list} >
                    {serviceList}
                </div>
            </div>
        </div>
    )
}