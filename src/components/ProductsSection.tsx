import React from 'react';

const products = [
  { name: '사과', description: '신선하고 아삭한 사과', image: '/images/product-1.jpg' },
  { name: '바나나', description: '달콤하고 부드러운 바나나', image: '/images/product-2.jpg' },
  { name: '포도', description: '탱글탱글한 포도', image: '/images/product-3.jpg' },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
        Our Products
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-xl mb-5"
            />
            <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
