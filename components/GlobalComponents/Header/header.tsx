import s from './header.module.css'
import logo from '../../../public/image/Header/Logo.svg'
import { useEffect, useState } from 'react'

export default function Header() {

  const [windows, setWindow] = useState(false)
  useEffect(()=> {
    if (window.innerWidth > 900) {
      setWindow(true)
    }
  },[])

  const listLinkAnchorMenu = [
    {
      name: "About us",
      href: "#aboutUs"
    },
    {
      name: "Services",
      href: "#services"
    },
    {
      name:"Get a website",
      href: "#getAWebsite"
    },
    {
      name: "Preferences",
      href: "#preferences"
    },
    {
      name: "Prices",
      href: "#prices"
    },
    {
      name: "FAQ",
      href: "#faq"
    },
  ]

  const [menuOpen, setMenuOpen] = useState(false)
  console.log(windows);

  return (
    <div className={ s.coverHeaderBg }>
      <div className={ s.coverHeader }>
        <img src={ logo } alt="logo" className={ s.logoImg } />
        <div className={s.burger}
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        >
          <div className={!menuOpen ? s.lineOne : s.lineOneOpen}></div>
          <div className={!menuOpen ? s.lineTwo : s.lineTwoOpen} ></div>
        </div>

        { (menuOpen || windows) && <div className={ s.coverColumn }>

          <div className={ s.coverListMenu }>

            {
              listLinkAnchorMenu.map(item => {
                return (
                  <a className={ s.itemMenu }
                    href={item.href}
                    key={ item.name }
                    onClick={() => {
                      setMenuOpen(false)
                    }}
                    >{ item.name }</a>
                )
              })
            }

          </div>
          <button className={ s.btnGetWebsite }>
            Get website
          </button>
        </div>}
      </div>
    </div>
  )
}
