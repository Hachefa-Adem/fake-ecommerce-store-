import Products from './Products'

function Home({ products = [], addToCart, search = '' }) {
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <p className="hero-kicker">Boutique premium</p>
          <h1>Tout chez nous</h1>
          <p className="hero-subtitle">
            Découvre des essentiels bien choisis pour le quotidien.
          </p>
        </div>
      </header>

      <Products
        products={products}
        limit={3}
        title="Produits phares"
        addToCart={addToCart}
        search={search}
      />
    </div>
  )
}

export default Home
