import { Button } from "../components/ui/button";

export default function FloristHome() {
  return (
    <div className="bg-rose-50 min-h-screen text-stone-700 font-light">
      <section className="text-center py-20 px-6 bg-rose-100">
        <h1 className="text-5xl font-semibold mb-4 text-rose-700">꽃으로 전하는 감성</h1>
        <p className="text-xl text-rose-600">당신의 순간을 꽃으로 물들입니다.</p>
      </section>

      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-rose-700 mb-4">플로리스트 소개</h2>
        <p>
          계절의 흐름에 따라 자연스러운 감성의 꽃다발을 제작합니다. 중요한 순간을 더욱 따뜻하게 기억되도록 함께합니다.
        </p>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-rose-700 mb-8">작업물 갤러리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="overflow-hidden rounded-xl shadow">
              <img
                src={`/flowers/${n}.jpg`}
                alt={`작업물 ${n}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-rose-700 mb-6">공간과 작업 영상</h2>
        <iframe
          className="w-full h-72 md:h-96 rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="플로리스트 영상"
          allowFullScreen
        />
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-rose-700 mb-6">오시는 길</h2>
       <iframe
  className="w-full h-64 rounded-xl shadow"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.3239918521754!2d127.37303759678954!3d36.352930400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654b310f5a2f6d%3A0xceab6cd457363bb8!2z7Zek7Ja07IK066Gx7IaM7Zi4NQ!5e0!3m2!1sko!2skr!4v1748013025181!5m2!1sko!2skr"
  title="구글맵 위치"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      </section>

      <section className="px-6 py-16 bg-white max-w-2xl mx-auto rounded-xl shadow-lg mt-12 text-center">
        <h2 className="text-3xl font-semibold text-center text-rose-700 mb-6">꽃다발 예약하기</h2>
        <Button asChild>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf4VPY8bJLRY3OXBnjxW3oO3BWjIJ9WmLN6TiwfQ5oJWD-U0Q/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            예약하러 가기
          </a>
        </Button>
      </section>
    </div>
  );
}
