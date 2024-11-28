import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.title}
          style={{
            height: '250px',   // Fixed height for consistency
            objectFit: 'contain', // Ensure image scales without cropping
            backgroundColor: '#f8f9fa' // Light background for contrast
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.substring(0,100)}</p>
          <p className="card-text"><strong>Category:</strong> {product.category}</p>
          <p className="card-text"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p className="card-text">
            <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
