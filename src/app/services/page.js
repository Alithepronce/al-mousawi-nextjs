import Link from 'next/link';

export default function Services() {
  const services = [
    { title: "تطوير المواقع والأنظمة", desc: "مواقع فائقة السرعة باستخدام Next.js و Astro مع لوحات تحكم ذكية." },
    { title: "أتمتة العمليات والـ APIs", desc: "ربط الأنظمة وتسهيل إدارة العمليات والطلبات تلقائياً." },
    { title: "بوتات تيليجرام ذكية", desc: "أتمتة تامة وخدمة عملاء تفاعلية على مدار الساعة." }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#D4A843', marginBottom: '30px' }}>🛠️ خدماتنا الاحترافية</h1>
      <div style={{ display: 'grid', gap: '20px', textAlign: 'right' }}>
        {services.map((s, idx) => (
          <div key={idx} style={{
            backgroundColor: '#1E1E1E',
            padding: '20px',
            borderRadius: '8px',
            borderRight: '5px solid #8B0000'
          }}>
            <h3 style={{ color: '#D4A843', margin: '0 0 10px 0' }}>{s.title}</h3>
            <p style={{ color: '#ccc', margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px' }}>
        <Link href="/" style={{ color: '#D4A843', textDecoration: 'none' }}>العودة للرئيسية 🏠</Link>
      </div>
    </div>
  );
}