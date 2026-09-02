import { useMemo } from 'react'
import ProductCard from '../components/ProductCard'

function Products({ products = [], addToCart, limit, title = 'Nos produits', search = '' }) {
  const visibleProducts = useMemo(() => {
    const text = (search || '').toLowerCase()

    const filteredProducts = products.filter((product) => {
      // guard against missing fields to avoid runtime errors when calling toLowerCase()
      const name = (product && product.name) ? String(product.name).toLowerCase() : ''
      const description = (product && product.description) ? String(product.description).toLowerCase() : ''

      return (
        name.includes(text) || description.includes(text)
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

      {visibleProducts.length === 0 && (
        <p className="empty-state">Aucun produit trouvé.</p>
      )}
    </main>
  )
}

export default Products
