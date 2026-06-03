import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#D4A843', marginBottom: '1.5rem', fontWeight: 'bold' }}>
        مرحباً بكم في مكتب الموسوي للخدمات البرمجية
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#cbd5e0', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
        نحن هنا لنحول أفكارك البرمجية إلى حقيقة ملموسة. نوفر حلولاً متكاملة لتصميم المواقع الفاخرة، تطوير الأنظمة المخصصة، وأتمتة العمليات بأعلى معايير الجودة والأمان.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/order" className="btn">
          اطلب موقعك الآن 🚀
        </Link>
        <Link href="/services" className="btn" style={{ backgroundColor: '#1f2833', border: '1px solid #D4A843', color: '#D4A843' }}>
          استعرض خدماتنا
        </Link>
      </div>
    </div>
  );
}
