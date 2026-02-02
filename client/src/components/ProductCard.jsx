import React from 'react';

const ProductCard = () => {
    return (
        <div className="border rounded shadow p-4">
            <h3 className="font-bold">Product Name</h3>
            <p className="text-gray-600">$99.99</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
