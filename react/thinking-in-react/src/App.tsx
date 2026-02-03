import { useState } from "react";

function ProductRow({ name = "product name", price = "0$", isInStock = true }) {
  if (isInStock) {
    return <tr><td>{name}</td><td>{price}</td></tr>
  }
  return <tr><td className="not-stocked">{name}</td><td>{price}</td></tr>
}

function ProductCategoryRow({ name = "category name" }) {
  return <tr><th colSpan={2}>{name}</th></tr>
}

function ProductTable({ products, filterText, inStockOnly }) {
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

      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return
      }

      if (inStockOnly && !product.stocked) {
        return
      }

      if (currentCategory !== product.category) {
        rows.push(<ProductCategoryRow name={product.category} key={product.category} />)
        currentCategory = product.category
      }
      rows.push(<ProductRow name={product.name} price={product.price} isInStock={product.stocked} key={product.name} />)
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

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form action="">
      <input type="text" value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <input type="checkbox" name="" id="inStockOnly" checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}
      />
      <label htmlFor="inStockOnly">Only show products in stock</label>
    </form>
  )
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar
        filterText={filterText} inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
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
