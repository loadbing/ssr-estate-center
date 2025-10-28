import { render, screen } from "@testing-library/react"
import Header from "./index"
import "@testing-library/jest-dom"

describe("Header Component", () => {
  it("should render the header container", () => {
    render(<Header />)
    const element = screen.getByText(/Propiedades/)
    expect(element).toBeInTheDocument()
  })
})
