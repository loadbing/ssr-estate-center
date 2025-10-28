import { render, screen } from "@testing-library/react"
import Header from "./index"
import "@testing-library/jest-dom"

describe("Header Component", () => {
  it("should render the logo image", () => {
    render(<Header />)
    const image = screen.getByRole("img", { hidden: true })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/ec.svg")
    expect(image).toHaveAttribute("width", "80")
    expect(image).toHaveAttribute("height", "80")
  })

  it("should render the navigation links", () => {
    render(<Header />)
    const propertiesLink = screen.getByRole("link", { name: "Propiedades" })
    const loginLink = screen.getByRole("link", { name: "Iniciar sesión" })

    expect(propertiesLink).toBeInTheDocument()
    expect(propertiesLink).toHaveAttribute("href", "/")

    expect(loginLink).toBeInTheDocument()
    expect(loginLink).toHaveAttribute("href", "/login")
  })
})
