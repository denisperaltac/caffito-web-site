// import { render, screen } from "@testing-library/react";
// import { Header } from "../header";

// const mockHeader = {
//   title: "Products",
//   children: <h2>This are my products</h2>,
// };

// describe("Header", () => {
//   it("Check if renders ok", () => {
//     render(<Header title={mockHeader.title} children={mockHeader.children} />); // Arrange

//     const header = screen.getByRole("heading", {
//       name: "Products",
//     }); // Act

//     expect(header).toBeInTheDocument(); // Assert
//   });

//   it("Check if renders children", () => {
//     render(<Header title={mockHeader.title} children={mockHeader.children} />); // Arrange

//     const header = screen.getByText(/This/); // Act

//     expect(header).toBeInTheDocument(); // Assert
//   });

//   it("Check if renders without children", () => {
//     render(<Header title={mockHeader.title} />); // Arrange

//     const header = screen.getByText(/Products/); // Act

//     expect(header).toBeInTheDocument(); // Assert
//   });
// });
