export default function Services() {
  const servicesList = [
    {
      title: "💻 تصميم المواقع الإلكترونية",
      desc: "مواقع متكاملة وفائقة السرعة مصممة بـ Next.js و Astro ومحسنة لمحركات البحث (SEO).",
    },
    {
      title: "⚙️ تطوير الأنظمة السحابية",
      desc: "أنظمة إدارة وقواعد بيانات متكاملة وآمنة بالكامل على سحابة Supabase و Cloudflare.",
    },
    {
      title: "🤖 أتمتة وبوتات ذكية",
      desc: "تطوير بوتات تيليجرام تفاعلية وذكية مرتبطة بأنظمتك لتسهيل استلام وخدمة العملاء تلقائياً.",
    }
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', color: '#D4A843', textAlign: 'center', marginBottom: '3rem' }}>
        خدماتنا الاحترافية
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {servicesList.map((srv, i) => (
          <div key={i} style={{ backgroundColor: '#1f2833', border: '1px solid #8B0000', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#D4A843', fontSize: '1.5rem', marginBottom: '1rem' }}>{srv.title}</h3>
            <p style={{ color: '#cbd5e0' }}>{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
