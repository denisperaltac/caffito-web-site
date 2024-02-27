import { render, screen } from "@testing-library/react";
import CajaComponent from "../component";

describe("Home", () => {
  it("should contain the text 'Usuario'", () => {
    render(<CajaComponent />); // Arrange

    const myElem = screen.getByText(/Usuario/i); // Act

    expect(myElem).toBeInTheDocument(); // Assert
  });
});
