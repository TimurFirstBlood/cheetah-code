import s from './aboutUs.module.css'

export default function AboutUs() {

    const litleInfo = [
        {
            title: 'Who are we?',
            text: 'A fast-growing professional company with 7 years of experience in successful website creation and redesign. '
        },
        {
            title: 'How do we work?',
            text: 'Being experts in website creation, our development team aims to fully understand and accept all clients’ requirements to build the website that will show the vision and the value of the business. '
        },
        {
            title: 'What is our mission?',
            text: 'An innovative perception of website building made us passionate about providing companies with professional websites and ongoing support.'
        }
    ]


    const InfoList = litleInfo.map((e) => {
        return(
            <div key={Math.random()} >
                <p className={s.title} >{e.title}</p>
                <p className={s.infoText} >{e.text}</p>
            </div>
        )
    })

    return (
        <div className={s.aboutUs} id={"aboutUs"} >
            <h2>About us</h2>
            <div className={s.info} >
                <div className={s.list} >
                    {InfoList}
                </div>
                <div className={s.statistBlock} >
                    <div className={s.statistBlockLine} >
                        <div className={s.conturTitle} >
                            <p>150+</p>
                            <p>Employees</p>
                        </div>
                          <hr />
                        <div className={s.regularTitle} >
                            <p>30K+</p>
                            <p>Clients</p>
                        </div>
                    </div>
                    <hr />
                    <div className={s.statistBlockLine} >
                        <div className={s.regularTitle} >
                            <p>20K+</p>
                            <p>Projects</p>
                        </div>
                          <hr />
                        <div className={s.conturTitle} >
                            <p>98%</p>
                            <p>Employees</p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
  }