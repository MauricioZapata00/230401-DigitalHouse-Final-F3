import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { currentContext, dispatchContextUpdate } = useContext(ContextGlobal)

  const { theme } = currentContext

  const changeTheme = () => {
    dispatchContextUpdate({ type: "TOGGLE_THEME" })
  }

  return (
    <nav className={theme} data-testid='navbar-test-id'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/">
        Home
      </Link>
      <Link to="/favorites">
        Favorites
      </Link>
      <Link to="/contact">
        Contact us
      </Link>
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar