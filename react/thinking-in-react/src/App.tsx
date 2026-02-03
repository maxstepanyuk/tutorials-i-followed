function App() {

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];


  return (
    <>
      <div>
        <form action="">
          <input type="text" />
          <input type="checkbox" name="" id="inStockOnly" />
          <label htmlFor="inStockOnly">Only show products in stock</label>
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr><th>Name</th><th>Price</th></tr>
          </thead>
          <tbody>
            <tr><td colSpan={2}>Fruits</td></tr>
            <tr><td>Apple</td><td>$1</td></tr>
            <tr><td>Dragonfruit</td><td>$1</td></tr>
            <tr><td className="not-stocked">Passionfruit</td><td>$2</td></tr>
            <tr><td colSpan={2}>Vegetables</td></tr>
            <tr><td>Spinach</td><td>$2</td></tr>
            <tr><td className="not-stocked">Pumpkin</td><td>$4</td></tr>
            <tr><td>Peas</td><td>$1</td></tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
