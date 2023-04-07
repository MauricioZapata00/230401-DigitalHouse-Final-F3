import { fireEvent, render, screen } from "@testing-library/react"
import { ContextProvider } from "../utils/global.context"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../Navbar"
import '@testing-library/jest-dom'

describe('Navbar should works', () => {

    test('Navbar should renders', () => {

        render(
            <ContextProvider>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </ContextProvider>
        )

        const underTest = screen.getByText('Change theme')

        expect(underTest).toBeInTheDocument()
    })

    test('Navbar should changes the theme', () => {

        render(
            <ContextProvider>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </ContextProvider>
        )

        const changeThemeButtonTest = screen.getByText('Change theme')

        fireEvent.click(changeThemeButtonTest)
        expect(screen.getByTestId('navbar-test-id')).toHaveClass('dark')
    })
})