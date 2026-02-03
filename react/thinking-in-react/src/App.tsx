function ProductRow({ name = "product name", price = "0$", isInStock = true }) {
  if (isInStock) {
    return <tr><td>{name}</td><td>{price}</td></tr>
  }
  return <tr><td className="not-stocked">{name}</td><td>{price}</td></tr>
}

function ProductCategoryRow({ name = "category name" }) {
  return <tr><td colSpan={2}>{name}</td></tr>
}

function ProductTable({ }) {
  return (<>
    <table>
      <thead>
        <tr><th>Name</th><th>Price</th></tr>
      </thead>
      <tbody>
        <ProductCategoryRow name={'Fruits'} />
        <ProductRow name={'Apple'} price={'$1'} />
        <ProductRow name={'Dragonfruit'} price={'$1'} />
        <ProductRow name={'Passionfruit'} price={'$2'} isInStock={false} />
        <ProductCategoryRow name={'Vegetables'} />
        <ProductRow name={'Spinach'} price={'$2'} />
        <ProductRow name={'Pumpkin'} price={'$4'} isInStock={false} />
        <ProductRow name={'Peas'} price={'$1'} />
      </tbody>
    </table>
  </>)
}

function SearchBar({ }) {
  return (
    <form action="">
      <input type="text" />
      <input type="checkbox" name="" id="inStockOnly" />
      <label htmlFor="inStockOnly">Only show products in stock</label>
    </form>
  )
}

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
      <SearchBar />
      <ProductTable />
    </>
  )
}

export default App
