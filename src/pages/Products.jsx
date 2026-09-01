import { useMemo } from 'react'
import ProductCard from '../components/ProductCard'

function Products({ products = [], addToCart, limit, title = 'Nos produits', search = '' }) {
  const visibleProducts = useMemo(() => {
    const filteredProducts = products.filter((product) => {
      const text = search.toLowerCase()
      return (
        product.name.toLowerCase().includes(text) ||
        product.description.toLowerCase().includes(text)
      )
    })

    return limit ? filteredProducts.slice(0, limit) : filteredProducts
  }, [products, search, limit])

  return (
    <main className="products-page">
      <h1>{title}</h1>

      <section className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </section>
    </main>
  )
}

export default Products
