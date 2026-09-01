function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>{product.price} €</strong>
      <button type="button" onClick={() => onAddToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  )
}

export default ProductCard
