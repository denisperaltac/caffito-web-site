async function loadProducts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return "Error";
  }
}

export default async function ProductosPage() {
  // const Products = await loadProducts();
  const Products = [{ hola: "hola" }];

  return (
    <div>
      <h1>Productos Page</h1>
    </div>
  );
}
