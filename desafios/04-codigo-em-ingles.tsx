// Código em inglês 
import { useState } from "react"

interface Product {
  productName: string;
  price: string;
}

const productList = [
  {
    productName: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    productName: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  function handleFindByProduct(productNameEnteredByUser: string) {
    const productFilteredFromList = productList.filter(product => product.productName.includes(productNameEnteredByUser))

    setFilteredProducts(productFilteredFromList)
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleFindByProduct(e.target.value)} />

      {filteredProducts.map(product => (
        <div>
          <p>{product.productName}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}


