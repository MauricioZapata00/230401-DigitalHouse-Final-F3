import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [edad, setEdad] = useState(0)
  const [seMuestraAlerta, setSeMuestraAlerta] = useState(false)
  const [mensajeDeAlerta, setMensajeDeAlerta] = useState("")
  const [seMuestraCard, setSeMuestraCard] = useState(false)


  const handleChangeName = (event) => {
    setNombre(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setCorreo(event.target.value)
  }

  const handleChangeAge = (event) => {
    setEdad(event.target.value)
  }

  const handleSubmitAnimal = (event) => {
    event.preventDefault()
    if (nombre.length <= 3 || nombre[0] === " ") {
      setSeMuestraAlerta(true)
      setMensajeDeAlerta("Por favor chequea que la información sea correcta.")
      return
    }
    if (correo.length <= 6) {
      setSeMuestraAlerta(true)
      setMensajeDeAlerta("Por favor chequea que la información sea correcta.")
      return
    }
    setSeMuestraAlerta(false)
    setMensajeDeAlerta("")
    setSeMuestraCard(true)
  }

  const deleteAlert = () => {
    setSeMuestraAlerta(false)
    setMensajeDeAlerta("")
    setNombre("")
    setCorreo("")
    setEdad(0)
  }

  return (
    <>
      <form onSubmit={handleSubmitAnimal}>
        <div>
          <h1>
            Deja aquí tus datos
          </h1>
        </div>
        <div>
          <label htmlFor="Name" style={{
            paddingRight: "2em",
            fontFamily: "sans-serif"
          }}>Nombre: </label>
          <input id='Name' type="text" onChange={handleChangeName} value={nombre} />
        </div>
        <div>
          <label htmlFor="Email" style={{
            paddingRight: "2em",
            fontFamily: "sans-serif"
          }}>Correo: </label>
          <input id='Email' type="text" onChange={handleChangeEmail} value={correo} />
        </div>
        <div>
          <label htmlFor="Age" style={{
            paddingRight: "2em",
            fontFamily: "sans-serif"
          }}>Años: </label>
          <input id='Age' type="number" min={0} max={500} onChange={handleChangeAge} value={edad} />
        </div>
        {seMuestraAlerta && <dialog open={seMuestraAlerta}>
          {mensajeDeAlerta}
          <button onClick={deleteAlert}>&#10005;</button>
        </dialog>}
        <div>
          {seMuestraCard && <div>Gracias por dejar tu información {nombre}, te estaremos contactando próximamente.</div>}
          <div>
            <input type="submit" value="Enviar" style={{
              width: "15.5em",
              marginTop: "3em",
            }} />
            <div />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
