import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Footer from "./index"

describe("Footer Component", () => {
  it("should render the footer container", () => {
    render(<Footer />)
    const image = screen.getByRole("img", { name: /ec/i });
    expect(image).toBeInTheDocument();
  })
})
