import React from 'react';

const AboutSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
      <img src="/images/about.jpg" alt="About" className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="md:ml-10 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-green-900 mb-4">About FRUITIQUE</h2>
        <p className="text-gray-700">
          FRUITIQUE는 자연의 신선함을 담은 프리미엄 과일을 제공합니다. 최고의 품질과 서비스를 통해 고객에게 건강과 행복을 전합니다.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
