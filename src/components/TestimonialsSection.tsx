import React from 'react';

const testimonials = [
  { name: '김철수', feedback: 'FRUITIQUE의 과일은 정말 신선하고 맛있어요!' },
  { name: '이영희', feedback: '항상 만족스러운 품질과 서비스에 감사드립니다.' },
];

const TestimonialsSection = () => (
  <section className="py-16 bg-green-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">"{t.feedback}"</p>
            <h3 className="text-green-800 font-semibold">{t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
