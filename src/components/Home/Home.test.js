import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchBar from "../SearchBar/SearchBar"
import theme from "../../styles/theme"

// describe(`SearchBar`, () => {
//   test(`renders SearchBar component`, () => {
//     render(<SearchBar />)

//     screen.debug()
//   })
// })

// describe(`checking the button`, () => {
//   test(`callback is called on button click`, function test() {
//     const callback = jest.fn()
//     render(<SearchBar onClickHandler={callback} />)

//     userEvent.click(screen.getByRole(`button`, { name: /call/i }))

//     expect(callback).toHaveBeenCalledTimes(1)
//     expect(callback).toHaveBeenCalledWith()
//   })
// })

function sum(x, y) {
  return x + y
}
describe(`sum`, () => {
  test(`sums up two values`, () => {
    expect(sum(2, 4)).toBe(6)
  })
})
