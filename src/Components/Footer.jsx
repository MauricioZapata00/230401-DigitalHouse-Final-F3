import React, { useContext } from 'react'
import DH from '../assets/DH.png'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const { currentContext } = useContext(ContextGlobal)
  const { theme } = currentContext
  return (
    <footer className={theme}>
        <p>Powered by</p>
        <img src={DH} alt='DH-logo' />
    </footer>
  )
}

export default Footer
