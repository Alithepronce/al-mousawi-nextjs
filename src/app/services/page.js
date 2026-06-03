export default function Services() {
  const services = [
    {
      title: 'تصميم مواقع ويب فاخرة',
      desc: 'واجهات مستخدم مخصصة وجذابة باستخدام Next.js و Tailwind CSS تناسب الهوية البصرية لشركتك.',
      icon: '🎨'
    },
    {
      title: 'أنظمة إدارة الأعمال',
      desc: 'قواعد بيانات سحابية متطورة مع Supabase لإدارة المبيعات، الحجوزات، والعملاء بسلاسة.',
      icon: '📊'
    },
    {
      title: 'أتمتة العمليات وبوتات تيليجرام',
      desc: 'بوتات ذكية تفاعلية لخدمة العملاء وأخذ الطلبات وإرسال الإشعارات التلقائية الفورية.',
      icon: '🤖'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">خدماتنا الاحترافية</h2>
        <p className="mt-4 text-zinc-400">نقدم حلولاً متكاملة ومصممة خصيصاً لتلبية احتياجات عملك ومساعدتك على النمو والتميز.</p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => (
          <div key={idx} className="p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#D4A843] transition-all glass-card">
            <span className="text-4xl mb-4 block">{s.icon}</span>
            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}