import s from './faq.module.css'
import List from './list'
import { useEffect, useState } from 'react'

export default function Faq () {

  

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const dataList = [
        {
            blockName: 'Can you build a new website on the platform of the old one?',
            desc: 'Yes, sure.'
        },
        {
            blockName: 'Will you pay attention to all customers’ ideas before the website agreement?',
            desc: 'In the process of website building, we discuss every question you have and every detail of the future website. We will take into account all your requirements.'
        },
        {
            blockName: 'Can you provide me with ongoing support?',
            desc: 'Yes, sure. We can easily provide you with this service.'
        },
    ]

    const list = dataList.map((e, i) => {
        return(
            <List name={e.blockName}
                  desc={e.desc}
                  open={open}
                  setOpen={setOpen}
                  ind={i}
                  index={index}
                  setIndex={setIndex}
                  
            />
        )
    }) 
    
    return (
        <div className={s.faq} >
            <div className={s.wrap} id={"faq"} >
                <h2>FAQ</h2>
                <div className={s.elemList} >
                    {list}
                </div>
            </div>
        </div>
       
    )
} 