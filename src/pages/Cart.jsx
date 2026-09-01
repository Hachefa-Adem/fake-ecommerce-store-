function Cart({ cart = [], removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main>
      <h1>Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Quantité : {item.quantity} — {item.price * item.quantity} €</p>
                </div>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Supprimer du panier"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
          <h2>Total : {total} €</h2>
        </>
      )}
    </main>
  )
}

export default Cart
