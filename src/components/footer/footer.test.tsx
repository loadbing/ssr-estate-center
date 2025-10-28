import { render, screen } from "@testing-library/react"
import Footer from "./index"

describe("Footer Component", () => {
  it("should render the footer container", () => {
    render(<Footer />)
    const footerElement = screen.getByRole("img", { hidden: true })
    expect(footerElement).toBeInTheDocument()
  })

  it("should render the correct image source", () => {
    render(<Footer />)
    const image = screen.getByRole("img", { hidden: true })
    expect(image).toHaveAttribute("src", "/ec.svg")
    expect(image).toHaveAttribute("width", "50")
    expect(image).toHaveAttribute("height", "50")
  })
})
