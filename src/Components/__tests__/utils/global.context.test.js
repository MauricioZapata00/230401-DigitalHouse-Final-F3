import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { ContextGlobal, ContextProvider } from "../../utils/global.context"
import Navbar from "../../Navbar"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'

describe('GlobalContext should works', () => {

    test('GlobalContext should renders', () => {

        render(<ContextProvider>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </ContextProvider>)

        const testNavbar = screen.getByText('Change theme')

        expect(testNavbar).toBeInTheDocument()
    })

    

    test('updates context state correctly', () => {
        const { getByText } = render(
          <ContextProvider>
            <TestComponent />
          </ContextProvider>
        )
    
        const button = getByText('Toggle Theme')
        fireEvent.click(button)
    
        expect(getByText('dark')).toBeInTheDocument()
      })
})

function TestComponent() {
    const { currentContext, dispatchContextUpdate } = React.useContext(ContextGlobal);
  
    const handleClick = () => {
      dispatchContextUpdate({ type: 'TOGGLE_THEME' });
    };
  
    return (
      <>
        <div>{currentContext.theme}</div>
        <button onClick={handleClick}>Toggle Theme</button>
      </>
    );
  }