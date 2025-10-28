import { render, screen } from "@testing-library/react"
import Loader from "./index"
import "@testing-library/jest-dom"

describe("Loader Component", () => {
  it("should render the loader container", () => {
    render(<Loader />)
    const element = screen.getByText(/Cargando.../)
    expect(element).toBeInTheDocument()
  })
})
