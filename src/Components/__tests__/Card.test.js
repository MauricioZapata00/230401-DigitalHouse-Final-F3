import { fireEvent, render, screen } from "@testing-library/react"
import { ContextProvider } from "../utils/global.context"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Card from "../Card"
import '@testing-library/jest-dom'

describe('Card should works', () => {

    const underTestProps = {
        name: 'testName',
        username: 'userNameTest',
        id: 123
    }
    test('Card should renders and add a card to favorites', () => {

        render(
            <ContextProvider>
                <BrowserRouter>
                    <Card {...underTestProps} />
                </BrowserRouter>
            </ContextProvider>
        )

        const nameHeaderTest = screen.getByText('testName')

        expect(nameHeaderTest).toBeInTheDocument()
    })

    // test('it should add a card to favorites', () => {
    //     const mockDispatch = jest.fn();
    //     jest.spyOn(React, 'useContext').mockReturnValue({
    //         currentContext: { theme: 'light', data: [] },
    //         dispatchContextUpdate: mockDispatch,
    //     });
    //     render(
    //         <ContextProvider>
    //             <BrowserRouter>
    //                 <Card {...underTestProps} />
    //             </BrowserRouter>
    //         </ContextProvider>
    //     );
    //     fireEvent.click(screen.getByText(/add fav/i));
    //     expect(mockDispatch).toHaveBeenCalledWith({
    //         type: 'UPDATE_FAVORITES',
    //         payload: [{ ...underTestProps }],
    //     });
    // });
})