const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold mb-4">FRUITIQUE</h1>
      <p className="mb-6 text-lg">고급 과일의 향연, 지금 경험해보세요</p>
      <div className="space-x-4">
        <a
          href="#products"
          className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-xl transition"
        >
          제품 보기
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe9rPTI7fFeVMlLlYx8vOKfe8LkA2scKqBKAY_b2S3lSW8JGg/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-xl transition"
        >
          문의하기
        </a>
      </div>
    </section>
  );
};

export default Hero;
