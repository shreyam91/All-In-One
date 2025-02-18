export default function ProductCard({ image, title }) {
    return (
      <div className="product-card">
        <img src={image} alt={title} className="product-img" />
        <span className="product-title">{title}</span>
      </div>
    );
  }
  