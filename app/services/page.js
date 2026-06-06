import React from 'react'

export default function Services() {
  const services = [
    {
      title: "تطوير المواقع الفاخرة (Next.js)",
      desc: "مواقع سريعة جداً، مهيأة بالكامل لمحركات البحث SEO ومصممة بأحدث الهويات البصرية المذهلة.",
      icon: "💻"
    },
    {
      title: "أتمتة الأعمال والأنظمة",
      desc: "ربط وتطوير حلول برمجية وقواعد بيانات سحابية متطورة لتنظيم بياناتك ومبيعاتك أوتوماتيكياً.",
      icon: "⚙️"
    },
    {
      title: "بوتات التيليجرام الذكية",
      desc: "تصميم بوتات مخصصة لإدارة المجموعات، تلقي الطلبات، معالجة الدفع، والتنبيهات الذكية.",
      icon: "🤖"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl sm:text-5xl font-black text-white">خدماتنا الاحترافية</h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
          نقدم حلولاً متكاملة لنقل أعمالك إلى الفضاء الرقمي بأمان واحترافية متناهية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-[#161616] border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-[#8B0000] transition-all duration-300 shadow-md">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8B0000]/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="text-4xl mb-4">{srv.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4A843] transition">
              {srv.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="/order" className="inline-block bg-gradient-to-r from-[#8B0000] to-[#D4A843] text-white px-8 py-3 rounded-xl font-bold transition hover:opacity-90">
          طلب خدمة مخصصة 🤝
        </a>
      </div>
    </div>
  )
}