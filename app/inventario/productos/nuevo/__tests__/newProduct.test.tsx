import { render, screen } from "@testing-library/react";
import { NewProductComponent } from "../component";


const form = {};
const setForm = jest.fn();

describe("NewProductComponent", () => {
  test("renders without errors", () => {
   

    render(<NewProductComponent form={form} setForm={setForm} />); //Arrange

    const myElem = screen.getByText("Nuevo Producto"); //Act

    expect(myElem).toBeInTheDocument(); //Assert
  });

  test("renders without errors", () => {

    render(<NewProductComponent form={form} setForm={setForm} />); //Arrange

    const myElem = screen.getByText("Nuevo Producto"); //Act

    expect(myElem).toBeInTheDocument(); //Assert
  });

  // Add more tests as needed
});
