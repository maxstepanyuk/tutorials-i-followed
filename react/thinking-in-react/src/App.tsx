function ProductRow({ name = "product name", price = "0$", isInStock = true }) {
  if (isInStock) {
    return <tr><td>{name}</td><td>{price}</td></tr>
  }
  return <tr><td className="not-stocked">{name}</td><td>{price}</td></tr>
}

function ProductCategoryRow({ name = "category name" }) {
  return <tr><td colSpan={2}>{name}</td></tr>
}

function ProductTable({ products }) {
  let rows = [];
  let currentCategory: string | null = null

  products.sort(
    (a, b) => {
      const nameA: string = a.category.toUpperCase();
      const nameB: string = b.category.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  )

  products.forEach(
    (product) => {
      if (currentCategory !== product.category) {
        rows.push(<ProductCategoryRow name={product.category} />)
        currentCategory = product.category
      }
      rows.push(<ProductRow name={product.name} price={product.price} isInStock={product.stocked} />)
    }
  )

  return (<>
    <table>
      <thead>
        <tr><th>Name</th><th>Price</th></tr>
      </thead>
      <tbody>
        {rows}
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

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
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


  return <FilterableProductTable products={PRODUCTS} />
}

export default App
