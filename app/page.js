import React from 'react'

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#161616] via-[#111111] to-[#0d0d0d] py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-block bg-[#8B0000]/20 border border-[#8B0000] text-[#D4A843] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
          السرعة • الجودة • الأمان
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight">
          نبني لك <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A843] to-[#FFD700]">المستقبل الرقمي</span> بأحدث التقنيات
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          مرحباً بك في مكتب الموسوي للخدمات البرمجية. نختص بتطوير الويب فائق السرعة، أتمتة الأنظمة، وبوتات التيليجرام الذكية المصممة خصيصاً لتنمية عملك وزيادة مبيعاتك.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a href="/order" className="bg-[#8B0000] hover:bg-[#a00000] text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-[#8B0000]/30 transform hover:-translate-y-1">
            اطلب مشروعك الآن 🚀
          </a>
          <a href="/services" className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-8 py-4 rounded-xl font-bold transition transform hover:-translate-y-1">
            استكشف خدماتنا 📂
          </a>
        </div>
      </div>

      {/* Trust & Stats Section */}
      <div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a1a] border border-zinc-800 p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="text-lg font-bold text-[#D4A843] mb-1">سرعة مذهلة</h3>
          <p className="text-sm text-zinc-400">مواقع مبنية بـ Next.js تضمن أداءاً فائق السرعة وتوافق تام مع محركات البحث.</p>
        </div>
        <div className="bg-[#1a1a1a] border border-zinc-800 p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">🛡️</div>
          <h3 className="text-lg font-bold text-[#D4A843] mb-1">أمان وحماية</h3>
          <p className="text-sm text-zinc-400">حماية عالية لبياناتك بالتعاون مع فريقنا الأمني وبقواعد بيانات Supabase محصنة.</p>
        </div>
        <div className="bg-[#1a1a1a] border border-zinc-800 p-6 rounded-2xl text-center">
          <div className="text-3xl mb-2">🤖</div>
          <h3 className="text-lg font-bold text-[#D4A843] mb-1">أتمتة ذكية</h3>
          <p className="text-sm text-zinc-400">بناء وتطوير بوتات ذكية لتسهيل أعمالك وتوفير وقتك وجهدك بالكامل.</p>
        </div>
      </div>
    </div>
  )
}