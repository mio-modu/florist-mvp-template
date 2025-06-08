import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe4e9] via-white to-[#fff0f3] text-gray-800 font-['Noto_Sans_KR']">
      {/* 헤더 섹션 */}
      <header className="relative bg-gradient-to-r from-[#ffd6e0] to-[#ffecf1] p-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-[5rem] font-bold text-pink-700 mb-4">Florist Studio</h1>
          <nav className="flex space-x-8">
            <a href="#" className="text-[2rem] text-pink-600 hover:text-pink-800 transition-colors">클래스</a>
            <a href="#" className="text-[2rem] text-pink-600 hover:text-pink-800 transition-colors">갤러리</a>
            <a href="#" className="text-[2rem] text-pink-600 hover:text-pink-800 transition-colors">문의하기</a>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Floral background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 to-pink-600/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-[5rem] md:text-[6.67rem] font-bold mb-6 drop-shadow-lg">감성을 전하는 꽃</h2>
          <p className="text-6xl md:text-8xl mb-8 font-light">당신만의 특별한 순간을 더욱 특별하게</p>
          <button className="px-16 py-6 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-300 shadow-lg hover:shadow-xl text-5xl">
            클래스 둘러보기
          </button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* 소개 섹션 */}
        <section className="text-center mb-20">
          <h2 className="text-[5rem] font-bold text-pink-700 mb-6">🌸 클래스 안내</h2>
          <p className="text-[2rem] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            1:1 플라워 클래스부터 원데이 클래스, 웨딩 부케까지<br/>
            당신만의 특별한 순간을 만들어보세요
          </p>
        </section>

        {/* 클래스 카드 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <div className="relative overflow-hidden h-[40vh] w-full">
              <img 
                src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="부케 클래스" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-[2.5rem] font-bold text-pink-700 mb-4">부케 클래스</h3>
              <p className="text-[1.5rem] text-gray-600 mb-6">감각적인 웨딩 부케 만들기</p>
              <button className="w-full px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-[1.5rem]">
                자세히 보기
              </button>
            </div>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <div className="relative overflow-hidden h-[40vh] w-full">
              <img 
                src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="테이블 플라워" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-[2.5rem] font-bold text-pink-700 mb-4">테이블 플라워</h3>
              <p className="text-[1.5rem] text-gray-600 mb-6">홈카페 분위기의 테이블 연출</p>
              <button className="w-full px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-[1.5rem]">
                자세히 보기
              </button>
            </div>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
            <div className="relative overflow-hidden h-[40vh] w-full">
              <img 
                src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="꽃다발 포장" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-[2.5rem] font-bold text-pink-700 mb-4">꽃다발 포장</h3>
              <p className="text-[1.5rem] text-gray-600 mb-6">감성 가득한 꽃다발 만들기</p>
              <button className="w-full px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-[1.5rem]">
                자세히 보기
              </button>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-3xl p-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-[5rem] font-bold text-pink-700 mb-6">✨ 특별한 경험을 선물하세요</h2>
            <p className="text-[2rem] text-gray-700 mb-8">당신만의 특별한 순간을 더욱 특별하게 만들어드립니다</p>
            <button className="px-16 py-6 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-[2rem]">
              문의하기
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-pink-50 to-pink-100 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-[3rem] font-bold text-pink-700 mb-4">Florist Studio</h3>
            <p className="text-[1.5rem] text-gray-600">꽃으로 전하는 특별한 마음</p>
          </div>
          <div className="text-[1.2rem] text-gray-500">
            <p className="mb-2">ⓒ 2025 Florist Studio. All rights reserved.</p>
            <p>서울특별시 강남구 테헤란로 123</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;