import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`)
        }

        const data = await response.json()
        // debug: show the raw API response in the console
        console.log('fetched products', data)

        const mappedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          // use the API's description when available; fall back to category
          description: product.description ?? product.category ?? '',
          price: product.price,
          image: product.image,
        }))

        setProducts(mappedProducts)
      } catch (err) {
        console.error('Erreur lors du chargement des produits:', err)
        setError(err.message || 'Erreur inconnue')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const itemAlreadyInCart = currentCart.find((item) => item.id === product.id)

      if (itemAlreadyInCart) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      return currentCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0)
    })
  }

  return (
    <div className="app-shell">
      <nav className="topbar">
        <div className="nav-group nav-left">
          <button type="button" onClick={() => setCurrentPage('home')}>
            Home
          </button>
          <button type="button" onClick={() => setCurrentPage('products')}>
            Produits
          </button>
        </div>

        <div className="nav-search">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Recherche..."
            aria-label="Recherche de produits"
          />
        </div>

        <div className="nav-group nav-right">
          <button type="button" onClick={() => setCurrentPage('cart')}>
            Panier ({cart.length})
          </button>
        </div>
      </nav>

      {loading && <p className="loading">Chargement des produits…</p>}
      {error && <p className="error">Erreur: {error}</p>}

      {currentPage === 'home' && (
        <Home products={products} addToCart={addToCart} search={search} />
      )}
      {currentPage === 'products' && (
        <Products products={products} addToCart={addToCart} search={search} />
      )}
      {currentPage === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  )
}

export default App
