import React from 'react';

const ContactSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.302410613591!2d127.34060357566531!3d36.329219972385125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654d3445cc9b2d%3A0x452c1c4937ea220e!2z7Iux7Iux6rO87J28!5e0!3m2!1sko!2skr!4v1748025824764!5m2!1sko!2skr"
            width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <p className="text-lg text-gray-700 mb-2">📧 fruitique@freshmail.com</p>
          <p className="text-lg text-gray-700 mb-4">📞 010-1234-5678</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6kbfvrF0_BA4Qbt9iDF85u0o4uyYiXJI60_32QuduRHHW4A/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">예약하러 가기</button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
