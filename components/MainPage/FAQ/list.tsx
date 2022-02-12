import s from './faq.module.css'
import arow from '../../../public/image/faq/arow.svg'
import { useEffect, useState } from 'react'

export default function List (
    {name, 
        desc,
        open,
        setOpen,
        index,
        ind,
        setIndex
    }:
    {name: string, 
        ind: number,
        desc: string, 
        index: number,
        open: boolean,
        setIndex: (value: number) => void
        setOpen: (value: boolean) => void
    })
{

    const [windows, setWindow] = useState(false)
    useEffect(()=> {
      if (window.innerWidth > 900) {
        setWindow(true)
      }
    },[])

    const isCurrentElem = ind == index
    const whatIsChild = () => {
        if (windows) {
            if (ind == 0) {
                return(
                    {height: '4em'}
                    )
                }
                if (ind == 1) {
                    return(
                        {height: '6em'}
                    )
                }
                if (ind == 2) {
                    return(
                        {height: '4em'}
                    )
                }
        } else{
             if (ind == 0) {
            return(
                {height: '3em'}
                )
            }
            if (ind == 1) {
                return(
                    {height: '12em'}
                )
            }
            if (ind == 2) {
                return(
                    {height: '7em'}
                )
            }
        }
       
    }
    return(
        <div className={s.dropForm} >
        <div className={ open && isCurrentElem ? s.listElemOpen : s.listElem }
            onClick={() => {
                setOpen(!open)
                setIndex(ind)
            }}  
        >
            <p>
               {name}
            </p>
            <img src={arow} 
                 alt="arrow"
            />
        </div>
        <div  >
           <div className={ open && isCurrentElem ? s.dropContent : s.closeContent }
                style={open && isCurrentElem  ? whatIsChild() : {}}
           >
              { open && isCurrentElem &&  <p className={s.open} >{desc}</p>}
           </div>

        </div>
    </div>
    )
}