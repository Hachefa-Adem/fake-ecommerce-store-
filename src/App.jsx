import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()

        const mappedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          description: product.category,
          price: product.price,
          image: product.image,
        }))

        setProducts(mappedProducts)
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error)
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
